import { AttributeValue } from "@aws-sdk/client-dynamodb";

interface CommonFieldNames {
  pk: string;
  sk: string;
}

interface GameFieldNames {
  gameId: string;
  roomCode: string;
  hostUsername: string;
  whitePlayerUsername: string;
  boardMap: string;
}

interface GameFieldValues {
  pk: (gameId: string) => AttributeValue.SMember;
  sk: AttributeValue.SMember;
  gameId: (gameId: string) => AttributeValue.SMember;
  roomCode: (code: string) => AttributeValue.SMember;
  hostUsername: (hostUsername: string) => AttributeValue.SMember;
  whitePlayerUsername: (whitePlayerUsername: string) => AttributeValue.SMember;
  boardMap: (boardMap: Map<number, string>) => AttributeValue.MMember;
}

interface DynamoKey {
  PK: AttributeValue.SMember;
  SK: AttributeValue.SMember;
}

interface CommonConditionalExpressions {
  keysExists: string;
  keysDoNotExists: string;
}

export interface DynamoConditionalExpressions {
  common: CommonConditionalExpressions;
}

export interface DynamoFieldNames {
  common: CommonFieldNames;
  game: GameFieldNames;
}

export interface DynamoFieldValues {
  game: GameFieldValues;
}

export interface DynamoKeys {
  game: (gameId: string) => DynamoKey & Record<string, AttributeValue>;
}
