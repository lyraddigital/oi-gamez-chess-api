import { IEventBus } from "aws-cdk-lib/aws-events";

export interface RoomEventsSubscriberProps {
  eventBus: IEventBus;
  eventBusSourceName: string;
}
