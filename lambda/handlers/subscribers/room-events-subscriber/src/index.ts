import { EventBridgeEvent } from "aws-lambda";

import { GameInitializedEvent, publishRoomEvents } from "@oigamez/event-bridge";

import { validateEnvironment } from "./configuration";
import { RoomEventsSubscriberEvent } from "./models";

validateEnvironment();

export const handler = async (
  event: EventBridgeEvent<"", RoomEventsSubscriberEvent>
): Promise<void> => {
  console.log("event source: ", event.source);
  console.log("event detail type: ", event["detail-type"]);
  console.log("event detail: ", event.detail);

  // For now let's just raise the game initialized event
  await publishRoomEvents<GameInitializedEvent>([
    new GameInitializedEvent("ABCD"),
  ]);
};
