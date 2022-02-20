#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {
  aws_iam as iam,
} from 'aws-cdk-lib';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'CdkGitHubOIDCProvider');

const provider = new iam.OpenIdConnectProvider(stack, 'GitHubOIDCProvider', {
  url: 'https://token.actions.githubusercontent.com',
  clientIds: ['sts.amazonaws.com'],
});

stack.exportValue(provider.openIdConnectProviderArn);