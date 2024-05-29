import { TableV2 } from "aws-cdk-lib/aws-dynamodb";

export interface ChessRestApiProps {
  gameTable: TableV2;
  allowedOrigins: string;
  roomCodeIndexName: string;
}
