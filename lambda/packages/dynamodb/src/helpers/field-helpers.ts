import { AttributeValue } from "@aws-sdk/client-dynamodb";

import {
  DynamoConditionalExpressions,
  DynamoFieldNames,
  DynamoFieldValues,
  DynamoKeys,
} from "./types";

const stringAttribute = (stringValue: string): AttributeValue.SMember => ({
  S: stringValue,
});

export const getDynamoString = (
  dynamoField?: AttributeValue,
  defaultValue: string = ""
): string => {
  return dynamoField?.S || defaultValue;
};

export const getDynamoInt = (
  dynamoField?: AttributeValue,
  defaultValue: number = 0
): number => {
  return dynamoField?.N ? parseInt(dynamoField.N) : defaultValue;
};

export const getOptionalDynamoInt = (
  dynamoField?: AttributeValue
): number | undefined => {
  return dynamoField?.N ? parseInt(dynamoField.N) : undefined;
};

export const getDynamoBoolean = (
  dynamoField?: AttributeValue,
  defaultValue: boolean = false
): boolean => {
  return dynamoField?.BOOL || defaultValue;
};

export const dynamoFieldNames: DynamoFieldNames = {
  common: {
    pk: "PK",
    sk: "SK",
  },
  game: {
    gameId: "GameId",
    roomCode: "RoomCode",
    hostUsername: "HostUsername",
    whitePlayerUsername: "WhitePlayerUsername",
  },
};

export const dynamoFieldValues: DynamoFieldValues = {
  game: {
    pk: (gameId: string) => stringAttribute(`Game#${gameId}`),
    sk: stringAttribute("#Metadata"),
    gameId: (gameId: string) => stringAttribute(gameId),
    roomCode: (roomCode: string) => stringAttribute(roomCode),
    hostUsername: (hostUsername: string) => stringAttribute(hostUsername),
    whitePlayerUsername: (whitePlayerUsername: string) =>
      stringAttribute(whitePlayerUsername),
  },
};

export const expressions: DynamoConditionalExpressions = {
  common: {
    keysExists: `attribute_exists(${dynamoFieldNames.common.pk}) AND attribute_exists(${dynamoFieldNames.common.sk})`,
    keysDoNotExists: `attribute_not_exists(${dynamoFieldNames.common.pk}) AND attribute_not_exists(${dynamoFieldNames.common.sk})`,
  },
};

export const keys: DynamoKeys = {
  game: (gameId: string) => ({
    PK: dynamoFieldValues.game.pk(gameId),
    SK: dynamoFieldValues.game.sk,
  }),
};
