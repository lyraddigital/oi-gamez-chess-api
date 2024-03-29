import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { dynamoFieldNames, getDynamoString } from "@oigamez/dynamodb";
import { Game } from "@oigamez/models";

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
  };
};
