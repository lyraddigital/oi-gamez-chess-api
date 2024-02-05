import { ROOM_RECEIVE_EVENT_BUS_NAME } from "./eb-room-receive-eb-name";

export const verifyEbRoomReceiveEventName = (): void => {
  if (!ROOM_RECEIVE_EVENT_BUS_NAME) {
    throw new Error(
      "ROOM_RECEIVE_EVENT_BUS_NAME environment variable is not set"
    );
  }
};
