# Sample Lambda function NODE 18 with @aws-sdk/client-s3.

cdk.json configured for hotswap on JS compiled lambda functions

## SAM Local Testing

1. Start Docker
2. `cdk synth --no-staging` - to build the JSON template (./cdk.out/CdkStack.template.json)
3. `sam local invoke ListBucketsFn --no-event -t ./cdk.out/CdkStack.template.json`

NOTE: The function name is the logical id param in CDK (`lambda.Function(this, "ListBucketsFn", {...})`), not the functionName prop you would see in Lambda console.

SEE: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-getting-started.html

SEE: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-testing.html

## Instal SAM

```
$ brew install aws/tap/aws-sam-cli
```

## Dev commands

Start TS compile watch, and set CDK to hotswap

- `npm run watch` watch for changes and compile
- `cdk watch --hotswap` deploy this stack to your default AWS account/region

NOTE: Following settings in cdk.json trigger deployys on:

- compiles of TS lambda functions to JS (on save) for hotswap
- save changes to TS app/stack files

```
"exclude": [
      ...
      "lambda/*.ts",
      "lib/*.js",
      "bin/*.js",
      "jest.config.js",
      ...
    ]
```

## Docs SDK V3

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/listbucketscommand.html
