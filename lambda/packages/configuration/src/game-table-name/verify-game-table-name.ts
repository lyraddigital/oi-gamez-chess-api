import { GAME_TABLE_NAME } from "./game-table-name";

export const verifyGameTableName = (): void => {
  if (!GAME_TABLE_NAME) {
    throw new Error("GAME_TABLE_NAME environment variable is not set");
  }
};
