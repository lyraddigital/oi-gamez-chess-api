import { EventBridgeEvent } from "aws-lambda";

import {
  GameInitializedEvent,
  RoomCreatedEvent,
  RoomEvent,
  RoomEventTypes,
  publishRoomEvents,
} from "@oigamez/event-bridge";

import { validateEnvironment } from "./configuration";

validateEnvironment();

export const handler = async (
  event: EventBridgeEvent<RoomEventTypes, RoomEvent>
): Promise<void> => {
  if (event["detail-type"] === RoomEventTypes.roomCreated) {
    const { roomCode } = event.detail as RoomCreatedEvent;

    // For now let's just raise the game initialized event
    await publishRoomEvents<GameInitializedEvent>([
      new GameInitializedEvent(roomCode),
    ]);
  }
};
