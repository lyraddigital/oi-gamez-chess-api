import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

import { ResourcePaths } from "../constants";
import { ChessRestApiProps } from "../props";

import { GameByRoomCodeLambda } from "./handlers";

export class ChessRestApi extends Construct {
  constructor(scope: Construct, id: string, props: ChessRestApiProps) {
    super(scope, id);

    const api = new RestApi(scope, "ChessRestApi", {
      description:
        "HTTP API that represents all actions for the chess game for OI Gamez.",
    });

    const gamesResource = api.root.addResource(ResourcePaths.games);
    const gameRoomResource = gamesResource.addResource(
      ResourcePaths.byRoomCode
    );
    const roomCodeResource = gameRoomResource.addResource(ResourcePaths.room);

    new GameByRoomCodeLambda(this, "GameByRoomCodeLambda", {
      gameTable: props.gameTable,
      roomCodeIndexName: props.roomCodeIndexName,
      resource: roomCodeResource,
      allowedOrigins: props.allowedOrigins,
    });
  }
}
