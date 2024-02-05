import {
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsRequestEntry,
} from "@aws-sdk/client-eventbridge";

import {
  EB_ROOM_RECEIVE_EVENT_NAME,
  EB_ROOM_RECEIVE_EVENT_SOURCE_NAME,
} from "@oigamez/configuration";

import { client } from "../client";
import { EventBridgeRoomReceiveEvent } from "../events";

const publishEvents = async <T extends EventBridgeRoomReceiveEvent>(
  eventBusName: string,
  eventBusSourceName: string,
  items: T[]
): Promise<void> => {
  const putEventsCommandInput: PutEventsCommandInput = {
    Entries: [
      ...items.map<PutEventsRequestEntry>((item: T) => ({
        EventBusName: eventBusName,
        Source: eventBusSourceName,
        Detail: JSON.stringify(item),
        DetailType: item.detailType,
      })),
    ],
  };

  const command = new PutEventsCommand(putEventsCommandInput);

  await client.send(command);
};

export const publishRoomEvents = async <T extends EventBridgeRoomReceiveEvent>(
  items: T[]
): Promise<void> => {
  await publishEvents(
    EB_ROOM_RECEIVE_EVENT_NAME!,
    EB_ROOM_RECEIVE_EVENT_SOURCE_NAME!,
    items
  );
};
