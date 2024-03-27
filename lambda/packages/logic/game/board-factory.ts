import {
  BishopPiece,
  ChessPiece,
  KingPiece,
  KnightPiece,
  QueenPiece,
  RookPiece,
} from "../pieces";
import { PieceColors } from "../models";

import { Board } from "./board";
import { ChessPieceStartIndexes } from "./chess-piece-start-indexes";

export class BoardFactory {
  public static createInitialBoard(): Board {
    const chessBoardMap: Record<number, ChessPiece> = {};
    const board = new Board(chessBoardMap);

    chessBoardMap[ChessPieceStartIndexes.LeftWhiteRook] = new RookPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.LeftWhiteKnight] = new KnightPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.LeftWhiteBishop] = new BishopPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.WhiteQueen] = new QueenPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.WhiteKing] = new KingPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.RightWhiteBishop] = new BishopPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.RightWhiteKnight] = new KnightPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.RightWhiteRook] = new RookPiece(
      board,
      PieceColors.white
    );

    chessBoardMap[ChessPieceStartIndexes.LeftBlackRook] = new RookPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.LeftBlackKnight] = new KnightPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.LeftBlackBishop] = new BishopPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.BlackQueen] = new QueenPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.BlackKing] = new KingPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.RightBlackBishop] = new BishopPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.RightBlackKnight] = new KnightPiece(
      board,
      PieceColors.black
    );

    chessBoardMap[ChessPieceStartIndexes.RightBlackRook] = new RookPiece(
      board,
      PieceColors.black
    );

    return board;
  }
}
