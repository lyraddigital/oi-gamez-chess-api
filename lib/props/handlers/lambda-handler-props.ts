import { IResource } from "aws-cdk-lib/aws-apigateway";
import { TableV2 } from "aws-cdk-lib/aws-dynamodb";

export interface LambdaHandlerProps {
  gameTable: TableV2;
  resource: IResource;
}
