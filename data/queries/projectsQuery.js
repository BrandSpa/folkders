import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";

import GraphQLJSON from "graphql-type-json";
import Project from "../types/projectType";
import models from "../../models";

const projectsFilter = new GraphQLNonNull(
  new GraphQLInputObjectType({
    name: "projectsFilters",
    fields: () => ({
      name: { type: GraphQLJSON },
      client_id: { type: new GraphQLNonNull(GraphQLInt) }
    })
  })
);

const projects = {
  type: new GraphQLList(Project),
  args: {
    where: {type: projectsFilter},
    limit: { type: GraphQLInt },
    order: { type: GraphQLJSON }
  },
  resolve(root, args) {
    return models.Project.findAll(args);
  }
};

export default projects;
