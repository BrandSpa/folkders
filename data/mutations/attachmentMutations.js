import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import AWS from 'aws-sdk';
import models from "../../models";
const s3 = new AWS.S3();

var params = {Bucket: 'bucket', Key: 'key', Body: stream};

s3.upload(params, function(err, data) {
  console.log(err, data);
});
