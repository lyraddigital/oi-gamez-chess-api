import { PIECE_COLOR_PREFIXES, PieceColors, PieceType } from "../models";
import {
  BishopPiece,
  ChessPiece,
  KingPiece,
  KnightPiece,
  PawnPiece,
  QueenPiece,
  RookPiece,
} from "../pieces";

import { Board } from "./board";
import { DEFAULT_BOARD_MAP } from "./default-board-map";

export class BoardFactory {
  public static createInitialBoard(): Board {
    return BoardFactory.createFromConfiguration(DEFAULT_BOARD_MAP);
  }

  public static createFromConfiguration(
    configuration: Map<number, string>
  ): Board {
    const chessBoardMap: Record<number, ChessPiece> = {};
    const board = new Board(chessBoardMap);

    for (const boardIndex of configuration.keys()) {
      const entry = configuration.get(boardIndex);

      if (entry) {
        const color =
          entry.charAt(0) === PIECE_COLOR_PREFIXES[PieceColors.black]
            ? PieceColors.black
            : PieceColors.white;
        const pieceTypeCode = entry.substring(1);
        let chessPiece: ChessPiece;

        switch (pieceTypeCode) {
          case PieceType.rook: {
            chessPiece = new RookPiece(board, color);
            break;
          }
          case PieceType.knight: {
            chessPiece = new KnightPiece(board, color);
            break;
          }
          case PieceType.bishop: {
            chessPiece = new BishopPiece(board, color);
            break;
          }
          case PieceType.queen: {
            chessPiece = new QueenPiece(board, color);
            break;
          }
          case PieceType.king: {
            chessPiece = new KingPiece(board, color);
            break;
          }
          default: {
            chessPiece = new PawnPiece(board, color);
          }
        }

        chessBoardMap[boardIndex] = chessPiece;
      }
    }

    return board;
  }
}
