import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

import { ResourcePaths } from "../constants";
import { RoomsInternalRestApiProps } from "../props";

import { InitializeGameLambda } from "./handlers";

export class RoomsInternalRestApi extends Construct {
  constructor(scope: Construct, id: string, props: RoomsInternalRestApiProps) {
    super(scope, id);

    const api = new RestApi(scope, "ChessRoomsInternalRestApi", {
      description:
        "HTTP API that will handle requests from the rooms system for OI Chess. This is an internal API",
    });

    const gamesResource = api.root.addResource(ResourcePaths.games);

    new InitializeGameLambda(this, "GetGameTypesLambda", {
      resource: gamesResource,
    });
  }
}
