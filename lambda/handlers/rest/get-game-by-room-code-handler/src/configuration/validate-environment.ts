import {
  verifyCorsAllowedOrigin,
  verifyGameTableName,
  verifyRoomCodeIndexName,
} from "@oigamez/configuration";

export const validateEnvironment = (): void => {
  verifyCorsAllowedOrigin();
  verifyGameTableName();
  verifyRoomCodeIndexName();
};
