import { ROOM_CODE_INDEX_NAME } from "./room-code-index-name";

export const verifyRoomCodeIndexName = (): void => {
  if (!ROOM_CODE_INDEX_NAME) {
    throw new Error("ROOM_CODE_INDEX_NAME environment variable is not set");
  }
};
