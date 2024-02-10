import {
  verifyEbRoomReceiveEventName,
  verifyEbRoomReceiveEventSourceName,
  verifyGameTableName,
} from "@oigamez/configuration";

export const validateEnvironment = (): void => {
  verifyEbRoomReceiveEventName();
  verifyEbRoomReceiveEventSourceName();
  verifyGameTableName();
};
