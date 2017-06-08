import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";

import GraphQLJSON from "graphql-type-json";
import Todo from "../types/todoType";
import models from "../../models";

const todosFilter = new GraphQLNonNull(
  new GraphQLInputObjectType({
    name: "todosFilters",
    fields: () => ({
      name: { type: GraphQLJSON },
      project_id: { type: new GraphQLNonNull(GraphQLInt) }
    })
  })
);

const todos = {
  type: new GraphQLList(Todo),
  args: {
    where: {type: todosFilter},
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    order: { type: GraphQLJSON }
  },
  resolve(_, args) {
    return models.Todo.findAll(args);
  }
};

export default todos;
