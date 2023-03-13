# Sample Lambda function NODE 18 with @aws-sdk/client-s3.

cdk.json configured for hotswap on JS compiled lambda functions

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
