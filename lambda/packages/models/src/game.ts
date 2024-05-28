export interface Game {
  gameId: string;
  roomCode: string;
  hostUsername: string;
  whitePlayerUsername: string;
  boardMap: Map<string, string>;
}
