export interface Game {
  gameId: string;
  roomCode: string;
  hostUsername: string;
  whitePlayerUsername: string;
  blackPlayerUsername: string;
  isWhiteTurn: boolean;
  boardMap: Record<string, string>;
}
