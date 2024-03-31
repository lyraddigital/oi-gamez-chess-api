import { PieceColor } from "../models";
import { Board } from "../game";
import { QUEEN_MOVEMENT } from "../movement";

import { ChessPiece } from "./chess-piece";

export class QueenPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    super(board, color, QUEEN_MOVEMENT);
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
