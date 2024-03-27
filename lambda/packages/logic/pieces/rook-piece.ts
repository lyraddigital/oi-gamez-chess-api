import { PieceColor, PieceType } from "../models";
import { Board } from "../game";
import { ROOK_MOVEMENT } from "../movement";

import { ChessPiece } from "./chess-piece";

export class RookPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    super(board, PieceType.rook, color, ROOK_MOVEMENT);
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
