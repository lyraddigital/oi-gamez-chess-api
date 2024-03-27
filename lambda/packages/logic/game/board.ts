import { PieceColor } from "../models";
import { ChessPiece } from "../pieces";

export class Board {
  constructor(private chessBoardMap: Record<number, ChessPiece>) {}

  public setPiece(cellIndex: number, piece: ChessPiece): void {
    this.chessBoardMap[cellIndex] = piece;
  }

  public isOccupied(cellIndex: number): boolean {
    return !!this.chessBoardMap[cellIndex];
  }

  public isOpponent(cellIndex: number, color: PieceColor): boolean {
    return (
      this.chessBoardMap[cellIndex]?.color &&
      this.chessBoardMap[cellIndex].color !== color
    );
  }

  public movePiece(startIndex: number, endIndex: number): boolean {
    const chessPiece = this.chessBoardMap[startIndex];

    if (!chessPiece) {
      return false;
    }

    if (!chessPiece.canMove(startIndex, endIndex)) {
      return false;
    }

    this.chessBoardMap[endIndex] = chessPiece;
    delete this.chessBoardMap[startIndex];

    return true;
  }

  public getChessPiece(cellIndex: number): ChessPiece | undefined {
    return this.chessBoardMap[cellIndex];
  }
}
