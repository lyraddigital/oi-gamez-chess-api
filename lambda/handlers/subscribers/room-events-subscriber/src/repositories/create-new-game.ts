import { PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";

import { GAME_TABLE_NAME } from "@oigamez/configuration";
import {
  dbClient,
  dynamoFieldNames,
  dynamoFieldValues,
  expressions,
} from "@oigamez/dynamodb";

export const createNewGame = async (
  gameId: string,
  roomCode: string,
  hostUsername: string
): Promise<void> => {
  const input: PutItemCommandInput = {
    TableName: GAME_TABLE_NAME,
    Item: {
      [dynamoFieldNames.common.pk]: dynamoFieldValues.game.pk(gameId),
      [dynamoFieldNames.common.sk]: dynamoFieldValues.game.sk,
      [dynamoFieldNames.game.roomCode]:
        dynamoFieldValues.game.roomCode(roomCode),
      [dynamoFieldNames.game.hostUsername]:
        dynamoFieldValues.game.hostUsername(hostUsername),
      [dynamoFieldNames.game.whitePlayerUsername]:
        dynamoFieldValues.game.whitePlayerUsername(hostUsername),
    },
    ConditionExpression: expressions.common.keysDoNotExists,
  };
  const command = new PutItemCommand(input);

  await dbClient.send(command);
};
