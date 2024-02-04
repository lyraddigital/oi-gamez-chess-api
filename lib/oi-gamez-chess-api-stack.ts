import * as cdk from "aws-cdk-lib";
import { EventBus } from "aws-cdk-lib/aws-events";
import { Construct } from "constructs";

import { RoomEventsSubscriber } from "./constructs";

export class OiGamezChessApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const eventBusArn =
      "arn:aws:events:ap-southeast-2:767013533477:event-bus/OiGamezRoomApiStackRoomExternalEventBusOIGamezRoomEventBusEA68F635";
    const eventBusSourceName = "room-external";
    const eventBus = EventBus.fromEventBusArn(
      this,
      "RoomExternalEventBus",
      eventBusArn
    );

    new RoomEventsSubscriber(this, "OIChessRoomEventsSubscriber", {
      eventBus,
      eventBusSourceName,
    });
  }
}
