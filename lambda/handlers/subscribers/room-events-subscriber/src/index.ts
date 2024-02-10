import { EventBridgeEvent } from "aws-lambda";

import {
  GameInitializedEvent,
  RoomCreatedEvent,
  RoomEvent,
  RoomEventTypes,
  publishRoomEvents,
} from "@oigamez/event-bridge";

import { validateEnvironment } from "./configuration";
import { createNewGame } from "./repositories";

validateEnvironment();

export const handler = async (
  event: EventBridgeEvent<RoomEventTypes, RoomEvent>
): Promise<void> => {
  if (event["detail-type"] === RoomEventTypes.roomCreated) {
    const { roomCode, hostUsername } = event.detail as RoomCreatedEvent;

    // TODO: Get random game id here
    await createNewGame("1", roomCode, hostUsername);

    await publishRoomEvents<GameInitializedEvent>([
      new GameInitializedEvent(roomCode),
    ]);
  }
};
