import { PieceColor, PieceType } from "../models";
import { Board } from "../game";
import { KNIGHT_MOVEMENT } from "../movement";

import { ChessPiece } from "./chess-piece";

export class KnightPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    super(board, PieceType.knight, color, KNIGHT_MOVEMENT);
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
