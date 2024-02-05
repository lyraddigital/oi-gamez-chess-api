import { EB_ROOM_RECEIVE_EVENT_SOURCE_NAME } from "./eb-room-receive-event-source-name";

export const verifyEbRoomReceiveEventSourceName = (): void => {
  if (!EB_ROOM_RECEIVE_EVENT_SOURCE_NAME) {
    throw new Error(
      "EB_ROOM_RECEIVE_EVENT_SOURCE_NAME environment variable is not set"
    );
  }
};
