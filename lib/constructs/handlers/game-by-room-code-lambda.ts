import { Construct } from "constructs";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

import {
  EnvironmentVariables,
  HandlerFilePaths,
  HandlerFunctionNames,
} from "../../constants";
import { GameByRoomCodeLambdaProps } from "../../props";

import { RestAPIHandlerFunction } from "./rest-api-handler-function";

export class GameByRoomCodeLambda extends Construct {
  constructor(scope: Construct, id: string, props: GameByRoomCodeLambdaProps) {
    super(scope, id);

    const createRoomLambda = new RestAPIHandlerFunction(this, "RestAPI", {
      handlerFileLocation: HandlerFilePaths.gameByRoomCode,
      handlerFunctionName: HandlerFunctionNames.gameByRoomCode,
      method: "GET",
      resource: props.resource,
      environment: {
        [EnvironmentVariables.gameByRoomCode.gameTableName]:
          props.gameTable.tableName,
        [EnvironmentVariables.gameByRoomCode.roomCodeIndexName]:
          props.roomCodeIndexName,
        [EnvironmentVariables.gameByRoomCode.corsAllowedOrigins]:
          props.allowedOrigins,
      },
    });

    const roomCodeIndexPolicyDocument = new PolicyStatement({
      effect: Effect.ALLOW,
      resources: [
        `${props.gameTable.tableArn}/index/${props.roomCodeIndexName}`,
      ],
      actions: ["dynamodb:Query"],
    });

    createRoomLambda.lambdaFunction.addToRolePolicy(
      roomCodeIndexPolicyDocument
    );
  }
}
