import { IEventBus } from "aws-cdk-lib/aws-events";

export interface RoomEventsSubscriberProps {
  eventBus: IEventBus;
  roomReceiveEventBus: IEventBus;
  eventBusSourceName: string;
  roomReceiveEventBusSourceName: string;
  gameTypeId: number;
}
