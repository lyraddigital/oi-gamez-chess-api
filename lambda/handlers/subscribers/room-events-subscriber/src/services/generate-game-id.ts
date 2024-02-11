import { v4 } from "uuid";

export const generateGameId = (): string => {
  return v4().replaceAll("-", "");
};
