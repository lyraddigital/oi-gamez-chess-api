import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { getCurrentGameByRoomCode } from "@oigamez/repositories";
import {
  corsBadRequestResponse,
  corsOkResponseWithData,
  fatalErrorResponse,
} from "@oigamez/responses";

import { validateEnvironment } from "./configuration";
import { validateRequest } from "./validators";

validateEnvironment();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const origin = event?.headers ? event.headers["Origin"] : undefined;
    const roomCode = event.pathParameters
      ? event.pathParameters["roomCode"]
      : undefined;
    const validationResult = validateRequest(origin, roomCode);

    if (!validationResult.isSuccessful) {
      return corsBadRequestResponse(validationResult.errorMessages);
    }

    const game = await getCurrentGameByRoomCode(roomCode!);

    return corsOkResponseWithData(game);
  } catch (e) {
    console.log(e);

    return fatalErrorResponse(
      "Unexpected error occurred while trying to get the game by room code."
    );
  }
};
