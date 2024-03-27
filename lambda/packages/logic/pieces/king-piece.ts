import { PieceColor, PieceType } from "../models";
import { Board } from "../game";
import { KING_MOVEMENT } from "../movement";

import { ChessPiece } from "./chess-piece";

export class KingPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    super(board, PieceType.king, color, KING_MOVEMENT);
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
