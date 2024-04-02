export type PieceColor = "white" | "black";
export enum PieceColors {
  white = "white",
  black = "black",
}
export const PIECE_COLOR_PREFIXES: Record<PieceColor, string> = {
  [PieceColors.black]: "B",
  [PieceColors.white]: "W",
};
