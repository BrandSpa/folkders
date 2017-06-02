import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import Project from './projectType';

const projectsFilter = new GraphQLInputObjectType({
    name: "projectsFilter",
    fields: () => ({
      name: {type: GraphQLJSON}
    })
});


const Client = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    name: { type: GraphQLString },
    projects: {
      type: new GraphQLList(Project),
      args: {
        where: {type: projectsFilter}
      },
      resolve(client) {
        return client.getProjects();
      }
    }
  })
});

export default Client;