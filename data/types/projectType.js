import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import Todo from './todoType';

const Project = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    todos: {
      type: new GraphQLList(Todo),
        args: {
          where: { type: GraphQLJSON },
          order: { type: GraphQLJSON },
          limit: { type: GraphQLInt },
          offset: { type: GraphQLInt }
        },
      resolve(project, args) {
        return project.getTodos(args);
      }
    }
  })
});

export default Project;