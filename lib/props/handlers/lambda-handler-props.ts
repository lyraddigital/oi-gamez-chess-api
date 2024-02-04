import { IResource } from "aws-cdk-lib/aws-apigateway";

export interface LambdaHandlerProps {
  resource: IResource;
}
