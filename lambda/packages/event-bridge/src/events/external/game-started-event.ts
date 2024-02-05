import { EventBridgeRoomReceiveEvent } from "./event-bridge-room-receive-event";
import { EventBridgeRoomReceiveEventType } from "./types";

export class GameStartedEvent extends EventBridgeRoomReceiveEvent {
  constructor(public roomCode: string) {
    super(EventBridgeRoomReceiveEventType.gameStarted);
  }
}
