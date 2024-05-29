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
  hostUsername: string,
  boardMap: Map<number, string>
): Promise<void> => {
  const input: PutItemCommandInput = {
    TableName: GAME_TABLE_NAME,
    Item: {
      [dynamoFieldNames.common.pk]: dynamoFieldValues.game.pk(gameId),
      [dynamoFieldNames.common.sk]: dynamoFieldValues.game.sk,
      [dynamoFieldNames.game.gameId]: dynamoFieldValues.game.gameId(gameId),
      [dynamoFieldNames.game.roomCode]:
        dynamoFieldValues.game.roomCode(roomCode),
      [dynamoFieldNames.game.hostUsername]:
        dynamoFieldValues.game.hostUsername(hostUsername),
      [dynamoFieldNames.game.whitePlayerUsername]:
        dynamoFieldValues.game.whitePlayerUsername(hostUsername),
      [dynamoFieldNames.game.isWhiteTurn]:
        dynamoFieldValues.game.isWhiteTurn(true),
      [dynamoFieldNames.game.boardMap]:
        dynamoFieldValues.game.boardMap(boardMap),
    },
    ConditionExpression: expressions.common.keysDoNotExists,
  };
  const command = new PutItemCommand(input);

  await dbClient.send(command);
};
