import { EventBridgeEvent } from "aws-lambda";

import {
  GameInitializedEvent,
  RoomCreatedEvent,
  RoomEventTypes,
  publishRoomEvents,
} from "@oigamez/event-bridge";

import { validateEnvironment } from "./configuration";

validateEnvironment();

export const handler = async (
  event: EventBridgeEvent<any, any>
): Promise<void> => {
  console.log("event source: ", event.source);
  console.log("event detail type: ", event["detail-type"]);
  console.log("event detail: ", event.detail);

  if (event["detail-type"] === RoomEventTypes.roomCreated) {
    console.log("Processing room created code.");

    const { roomCode } = event.detail as RoomCreatedEvent;

    // For now let's just raise the game initialized event
    await publishRoomEvents<GameInitializedEvent>([
      new GameInitializedEvent(roomCode),
    ]);
  }
};
