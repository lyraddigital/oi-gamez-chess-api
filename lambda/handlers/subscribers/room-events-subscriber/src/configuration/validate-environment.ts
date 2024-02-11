import {
  verifyEbRoomReceiveEventName,
  verifyEbRoomReceiveEventSourceName,
  verifyGameTableName,
  verifyRoomCodeIndexName,
} from "@oigamez/configuration";

export const validateEnvironment = (): void => {
  verifyEbRoomReceiveEventName();
  verifyEbRoomReceiveEventSourceName();
  verifyGameTableName();
  verifyRoomCodeIndexName();
};
