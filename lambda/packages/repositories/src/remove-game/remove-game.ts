import {
  DeleteItemCommand,
  DeleteItemCommandInput,
} from "@aws-sdk/client-dynamodb";

import { GAME_TABLE_NAME } from "@oigamez/configuration";
import { dbClient, keys } from "@oigamez/dynamodb";

export const removeGame = async (gameId: string): Promise<void> => {
  const input: DeleteItemCommandInput = {
    TableName: GAME_TABLE_NAME,
    Key: keys.game(gameId),
  };

  const command = new DeleteItemCommand(input);

  await dbClient.send(command);
};
