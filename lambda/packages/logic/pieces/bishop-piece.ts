import { PieceColor, PieceColors, PieceType } from "../models";
import { Board } from "../game";

import { ChessPiece } from "./chess-piece";
import {
  BLACK_SQUARE_BISHOP_MOVEMENT,
  WHITE_SQUARE_BISHOP_MOVEMENT,
} from "../movement";

export class BishopPiece extends ChessPiece {
  constructor(board: Board, color: PieceColor) {
    const movementPaths =
      color === PieceColors.black
        ? BLACK_SQUARE_BISHOP_MOVEMENT
        : WHITE_SQUARE_BISHOP_MOVEMENT;
    super(board, PieceType.bishop, color, movementPaths);
  }

  public canMove(startIndex: number, endIndex: number): boolean {
    return super.isMovementAllowed(startIndex, endIndex);
  }
}
