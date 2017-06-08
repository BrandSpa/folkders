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

const todoFilter = new GraphQLNonNull(
  new GraphQLInputObjectType({
    name: "todoFilters",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) }
    })
  })
);

const todo = {
  type: Todo,
  args: {
    where: {type: todoFilter},
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    order: { type: GraphQLJSON }
  },
  resolve(_, args) {
    return models.Todo.findOne(args);
  }
};

export default todo;
