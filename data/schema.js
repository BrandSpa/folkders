import {
  GraphQLSchema,
  GraphQLObjectType
} from "graphql";
//queries
import clientsQuery from './queries/clientsQuery';
import projectsQuery from './queries/projectsQuery';
import todosQuery from './queries/todosQuery';
//mutations
import { createCompany, updateCompany } from './mutations/companyMutations';
import { createClient, updateClient } from './mutations/clientMutations';
import { createProject, updateProject } from './mutations/projectMutations';
import { loginUser, registerUser } from './mutations/userMutations';

const Query = new GraphQLObjectType({
  name: "folkderAppQueries",
  description: "Root Schema",
  fields: () => ({
    clients: clientsQuery,
    projects: projectsQuery,
    todos: todosQuery
  })
});

const Mutation = new GraphQLObjectType({
  name: "folkderAppMutations", 
  fields: () => ({
    createCompany,
    updateCompany,
    createClient,
    updateClient,
    createProject, 
    updateProject,
    loginUser,
    registerUser
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
