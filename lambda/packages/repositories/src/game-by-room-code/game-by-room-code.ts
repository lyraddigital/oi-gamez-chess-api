import { QueryCommand, QueryCommandInput } from "@aws-sdk/client-dynamodb";

import { GAME_TABLE_NAME, ROOM_CODE_INDEX_NAME } from "@oigamez/configuration";
import {
  dbClient,
  dynamoFieldNames,
  dynamoFieldValues,
} from "@oigamez/dynamodb";
import { mapFromDynamoToGame } from "@oigamez/mappers";
import { Game } from "@oigamez/models";

export const getCurrentGameByRoomCode = async (
  roomCode: string
): Promise<Game | undefined> => {
  const input: QueryCommandInput = {
    TableName: GAME_TABLE_NAME,
    IndexName: ROOM_CODE_INDEX_NAME,
    KeyConditionExpression: "#pk = :pk",
    ExpressionAttributeNames: {
      "#pk": dynamoFieldNames.game.roomCode,
    },
    ExpressionAttributeValues: {
      ":pk": dynamoFieldValues.game.roomCode(roomCode),
    },
  };

  const command = new QueryCommand(input);
  const response = await dbClient.send(command);

  if (response?.Items && response.Items.length > 0) {
    return mapFromDynamoToGame(response.Items[0]);
  }

  return undefined;
};
