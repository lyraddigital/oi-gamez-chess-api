import {
  verifyEbRoomReceiveEventName,
  verifyEbRoomReceiveEventSourceName,
} from "@oigamez/configuration";

export const validateEnvironment = (): void => {
  verifyEbRoomReceiveEventName();
  verifyEbRoomReceiveEventSourceName();
};
