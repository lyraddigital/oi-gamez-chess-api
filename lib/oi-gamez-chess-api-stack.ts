import * as cdk from "aws-cdk-lib";
import { EventBus } from "aws-cdk-lib/aws-events";
import { Construct } from "constructs";

import { ChessTable, RoomEventsSubscriber } from "./constructs";

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
    const roomReceiveEventBusArn =
      "arn:aws:events:ap-southeast-2:767013533477:event-bus/OiGamezRoomApiStackRoomReceiveEventBusOIGamezRoomEventBusBF064656";
    const roomReceiveEventBusSourceName = "room-receive";
    const roomReceiveEventBus = EventBus.fromEventBusArn(
      this,
      "RoomReceiveEventBus",
      roomReceiveEventBusArn
    );

    const gameTable = new ChessTable(this, "OIChessGameTable");

    new RoomEventsSubscriber(this, "OIChessRoomEventsSubscriber", {
      gameTable: gameTable.table,
      eventBus,
      eventBusSourceName,
      roomReceiveEventBus,
      roomReceiveEventBusSourceName,
      gameTypeId: 1, // Make this some code later on that is configurable
    });
  }
}
