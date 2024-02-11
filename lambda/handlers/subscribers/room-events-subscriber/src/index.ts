import { EventBridgeEvent } from "aws-lambda";

import {
  GameInitializedEvent,
  RoomCreatedEvent,
  RoomEvent,
  RoomEventTypes,
  RoomRemovedEvent,
  publishRoomEvents,
} from "@oigamez/event-bridge";
import { getCurrentGameByRoomCode, removeGame } from "@oigamez/repositories";

import { validateEnvironment } from "./configuration";
import { createNewGame } from "./repositories";
import { generateGameId } from "./services";

validateEnvironment();

export const handler = async (
  event: EventBridgeEvent<RoomEventTypes, RoomEvent>
): Promise<void> => {
  const detailType = event["detail-type"];

  if (detailType === RoomEventTypes.roomCreated) {
    const { roomCode, hostUsername } = event.detail as RoomCreatedEvent;

    const uniqueGameId = generateGameId();
    await createNewGame(uniqueGameId, roomCode, hostUsername);

    await publishRoomEvents<GameInitializedEvent>([
      new GameInitializedEvent(roomCode),
    ]);
  } else if (detailType === RoomEventTypes.roomRemoved) {
    const { roomCode } = event.detail as RoomRemovedEvent;
    const game = await getCurrentGameByRoomCode(roomCode);

    if (game) {
      await removeGame(game.gameId);
    }
  }
};
