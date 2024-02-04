import { Construct } from "constructs";

import { HandlerFilePaths, HandlerFunctionNames } from "../../constants";
import { InitializeGameLambdaProps } from "../../props";

import { RestAPIHandlerFunction } from "./rest-api-handler-function";

export class InitializeGameLambda extends Construct {
  constructor(scope: Construct, id: string, props: InitializeGameLambdaProps) {
    super(scope, id);

    new RestAPIHandlerFunction(this, "RestAPI", {
      handlerFileLocation: HandlerFilePaths.initializeGame,
      handlerFunctionName: HandlerFunctionNames.initializeGame,
      method: "POST",
      resource: props.resource,
      environment: {},
    });
  }
}
