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

const todosFilter = new GraphQLInputObjectType({
  name: "todosFilter",
  fields: () => ({
    title: {type: GraphQLJSON}
  })
});

const Project = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    todos: {
      type: new GraphQLList(Todo),
        args: {
        where: {type: todosFilter},
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(project) {
        return project.getTodos();
      }
    }
  })
});

export default Project;