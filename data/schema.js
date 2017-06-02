import {
  GraphQLSchema,
  GraphQLObjectType
} from "graphql";

import clientsQuery from './queries/clientsQuery';
import { createCompany, updateCompany } from './mutations/companyMutations';
import { loginUser, registerUser } from './mutations/userMutations';

const Query = new GraphQLObjectType({
  name: "folkderAppQueries",
  description: "Root Schema",
  fields: () => ({
    clients: clientsQuery
  })
});

const Mutation = new GraphQLObjectType({
  name: "folkderAppMutations", 
  fields: () => ({
    createCompany,
    updateCompany,
    loginUser,
    registerUser
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
