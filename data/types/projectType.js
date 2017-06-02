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
    name: { type: GraphQLString },
    todos: {
      type: new GraphQLList(Todo),
      resolve(project) {
        return project.getTodos();
      }
    }
  })
});

export default Project;