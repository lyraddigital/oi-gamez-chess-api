import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { RoomsInternalRestApi } from "./constructs/rooms-internal-rest-api";

export class OiGamezChessApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new RoomsInternalRestApi(this, "OiChessRoomsInternalRestApi", {});
  }
}
