import { AttributeValue } from "@aws-sdk/client-dynamodb";

import {
  dynamoFieldNames,
  getDynamoNumberStringMap,
  getDynamoString,
  getDynamoBoolean,
} from "@oigamez/dynamodb";
import { Game } from "@oigamez/models";

import { mapFromNumberStringMapToRecord } from "../../board-mapper";

export const mapFromDynamoToGame = (
  dynamoRecord: Record<string, AttributeValue>
): Game => {
  return {
    gameId: getDynamoString(dynamoRecord[dynamoFieldNames.game.gameId]),
    roomCode: getDynamoString(dynamoRecord[dynamoFieldNames.game.roomCode]),
    hostUsername: getDynamoString(
      dynamoRecord[dynamoFieldNames.game.hostUsername]
    ),
    whitePlayerUsername: getDynamoString(
      dynamoRecord[dynamoFieldNames.game.whitePlayerUsername]
    ),
    blackPlayerUsername: getDynamoString(
      dynamoRecord[dynamoFieldNames.game.blackPlayerUsername]
    ),
    isWhiteTurn: getDynamoBoolean(
      dynamoRecord[dynamoFieldNames.game.isWhiteTurn]
    ),
    boardMap: mapFromNumberStringMapToRecord(
      getDynamoNumberStringMap(dynamoRecord[dynamoFieldNames.game.boardMap])
    ),
  };
};
