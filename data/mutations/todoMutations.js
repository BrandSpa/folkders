import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import models from "../../models";
import Todo from '../types/todoType';

export const createTodo = {
	type: Todo,
	args: {
		name: { type: new GraphQLNonNull(GraphQLString) },
    company_id: { type: new GraphQLNonNull(GraphQLInt) }
	},
	resolve(root, args) {
		return models.Todo.create(args);
	}
}

export const updateTodo = {
  type: Todo,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    data: { type: new GraphQLNonNull(GraphQLJSON) }
  },
  resolve(root, args) {
    return models.Todo.update(args.data, { where: { id: args.id } })
      .then(company => models.Todo.findOne({ where: args.id }));
  }
};
