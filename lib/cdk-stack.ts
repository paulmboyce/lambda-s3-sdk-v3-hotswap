import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
import * as path from "path";
import { Effect } from "aws-cdk-lib/aws-iam";
//
export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const func = new lambda.Function(this, "function", {
      functionName: "CDK_listbuckets",
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(__dirname, "../lambda")),
      handler: "listbuckets.handler",
    });

    // Authn for S3
    const s3PolicyStatement = new iam.PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:*"],
      resources: ["*"],
    });
    func.role?.attachInlinePolicy(
      new iam.Policy(this, "s3PolicyStatement", {
        statements: [s3PolicyStatement],
      })
    );

    // Smoke Test: function executes
    const funcUrl = func.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, "Lambda Fn URL: ", {
      value: funcUrl.url,
    });
  }
}
