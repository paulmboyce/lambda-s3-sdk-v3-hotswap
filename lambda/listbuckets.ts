// add aws-sdk as project dev dependency for TS here.
// requires NODE 18
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: "eu-west-1" });

export const handler = async function (event: any, ctx: any) {
  console.log("RUNNING.. ");
  const { Buckets } = await s3Client.send(new ListBucketsCommand({}));
  return JSON.stringify(Buckets);

  //   return "hello.   I wrote this in TS and used the build to make the JS ";
};
