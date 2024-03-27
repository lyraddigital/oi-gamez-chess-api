import {
  MovementPaths,
  PieceColor,
  PIECE_COLOR_PREFIXES,
  PieceType,
} from "../models";
import { Board } from "../game";

export abstract class ChessPiece {
  constructor(
    public board: Board,
    private pieceType: PieceType,
    public color: PieceColor,
    protected movementPathsMap: Record<number, MovementPaths>
  ) {}

  public get key(): string {
    return `${PIECE_COLOR_PREFIXES[this.color]}${this.pieceType}`;
  }

  public abstract canMove(startIndex: number, endIndex: number): boolean;

  protected isMovementAllowed(startIndex: number, endIndex: number): boolean {
    const movementPaths = this.movementPathsMap[startIndex]?.paths;

    if (!this.hasMovementPaths(movementPaths, endIndex)) {
      return false;
    }

    if (this.hasPiecesInTheWay(movementPaths, endIndex)) {
      return false;
    }

    return (
      !this.board.isOccupied(endIndex) ||
      this.board.isOpponent(endIndex, this.color)
    );
  }

  private hasPiecesInTheWay(
    movementPaths: Record<number, number[]>,
    endIndex: number
  ) {
    let arePiecesInTheWay = false;

    movementPaths[endIndex].forEach((cellIndex) => {
      if (this.board.isOccupied(cellIndex)) {
        arePiecesInTheWay = true;
      }
    });

    if (arePiecesInTheWay) {
      return true;
    }

    return false;
  }

  private hasMovementPaths(
    movementPaths: Record<number, number[]>,
    endIndex: number
  ): boolean {
    if (!movementPaths || !movementPaths[endIndex]) {
      return false;
    }

    return true;
  }
}
