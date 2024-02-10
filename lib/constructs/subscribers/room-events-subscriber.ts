import { aws_events_targets } from "aws-cdk-lib";
import { Rule } from "aws-cdk-lib/aws-events";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, OutputFormat } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

import {
  HandlerFunctionNames,
  HandlerFilePaths,
  EnvironmentVariables,
} from "../../constants";
import { RoomEventsSubscriberProps } from "../../props";

export class RoomEventsSubscriber extends Construct {
  public lambdaFunction: NodejsFunction;

  constructor(scope: Construct, id: string, props: RoomEventsSubscriberProps) {
    super(scope, id);

    this.lambdaFunction = new NodejsFunction(this, "LambdaFunction", {
      runtime: Runtime.NODEJS_18_X,
      handler: HandlerFunctionNames.roomEventsSubscriber,
      entry: join(__dirname, HandlerFilePaths.roomEventsSubscriber),
      bundling: {
        format: OutputFormat.ESM,
      },
      environment: {
        [EnvironmentVariables.roomEventsSubscriber.roomReceiveEventBusName]:
          props.roomReceiveEventBus.eventBusName,
        [EnvironmentVariables.roomEventsSubscriber
          .roomReceiveEventBusEventSourceName]:
          props.roomReceiveEventBusSourceName,
        [EnvironmentVariables.roomEventsSubscriber.gameTableName]:
          props.gameTable.tableName,
      },
    });

    new Rule(this, "RoomEventsSubscriberRule", {
      description:
        "Rule that subscribes any room events associated with the OI Chess game.",
      targets: [new aws_events_targets.LambdaFunction(this.lambdaFunction)],
      eventPattern: {
        source: [props.eventBusSourceName],
        detail: {
          gameTypeId: [props.gameTypeId],
        },
      },
      eventBus: props.eventBus,
    });

    const ebPutEventsPolicyDocument = new PolicyStatement({
      effect: Effect.ALLOW,
      resources: [props.roomReceiveEventBus.eventBusArn],
      actions: ["events:PutEvents"],
    });

    const gameTablePolicyDocument = new PolicyStatement({
      effect: Effect.ALLOW,
      resources: [props.gameTable.tableArn],
      actions: ["dynamodb:GetItem", "dynamodb:PutItem"],
    });

    this.lambdaFunction.addToRolePolicy(ebPutEventsPolicyDocument);
    this.lambdaFunction.addToRolePolicy(gameTablePolicyDocument);
  }
}
