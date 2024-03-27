import { PieceColor, PieceColors, PieceType } from "../models";
import { Board } from "../game";
import { BLACK_PAWN_MOVEMENT, WHITE_PAWN_MOVEMENT } from "../movement";

import { ChessPiece } from "./chess-piece";

export class PawnPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    super(
      board,
      PieceType.king,
      color,
      color === PieceColors.black ? BLACK_PAWN_MOVEMENT : WHITE_PAWN_MOVEMENT
    );
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    // Add code to check if diagonal movement can be made based on an opponent existing there.
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
