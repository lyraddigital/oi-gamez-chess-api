import { TableV2 } from "aws-cdk-lib/aws-dynamodb";
import { IEventBus } from "aws-cdk-lib/aws-events";

export interface RoomEventsSubscriberProps {
  gameTable: TableV2;
  roomCodeIndexName: string;
  eventBus: IEventBus;
  roomReceiveEventBus: IEventBus;
  eventBusSourceName: string;
  roomReceiveEventBusSourceName: string;
  gameTypeId: number;
}
