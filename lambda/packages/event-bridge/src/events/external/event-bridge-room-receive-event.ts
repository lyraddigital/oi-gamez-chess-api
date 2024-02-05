import { EventBridgeRoomReceiveEventType } from "./types";

export abstract class EventBridgeRoomReceiveEvent {
  constructor(public detailType: EventBridgeRoomReceiveEventType) {}
}
