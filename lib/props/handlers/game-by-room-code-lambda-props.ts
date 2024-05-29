import { TableV2 } from "aws-cdk-lib/aws-dynamodb";

import { CorsProps } from "../cors-props";
import { LambdaHandlerProps } from "./lambda-handler-props";

export interface GameByRoomCodeLambdaProps
  extends CorsProps,
    LambdaHandlerProps {
  gameTable: TableV2;
  roomCodeIndexName: string;
}
