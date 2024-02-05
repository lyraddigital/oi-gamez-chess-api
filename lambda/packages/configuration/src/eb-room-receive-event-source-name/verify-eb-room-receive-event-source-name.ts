import { ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME } from "./eb-room-receive-event-source-name";

export const verifyEbRoomReceiveEventSourceName = (): void => {
  if (!ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME) {
    throw new Error(
      "ROOM_RECEIVE_EVENT_BUS_EVENT_SOURCE_NAME environment variable is not set"
    );
  }
};
