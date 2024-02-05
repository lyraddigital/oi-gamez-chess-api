import { EB_ROOM_RECEIVE_EVENT_NAME } from "./eb-room-receive-eb-name";

export const verifyEbRoomReceiveEventName = (): void => {
  if (!EB_ROOM_RECEIVE_EVENT_NAME) {
    throw new Error(
      "EB_ROOM_RECEIVE_EVENT_NAME environment variable is not set"
    );
  }
};
