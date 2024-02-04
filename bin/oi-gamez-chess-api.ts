#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { OiGamezChessApiStack } from "../lib/oi-gamez-chess-api-stack";

const app = new cdk.App();

new OiGamezChessApiStack(app, "OiGamezChessApiStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
