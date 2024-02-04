import { EventBridgeEvent } from "aws-lambda";

import { RoomEventsSubscriberEvent } from "./models";

export const handler = async (
  event: EventBridgeEvent<"", RoomEventsSubscriberEvent>
): Promise<void> => {
  console.log("event source: ", event.source);
  console.log("event detail type: ", event["detail-type"]);
  console.log("event detail: ", event.detail);

  await Promise.resolve();
};
