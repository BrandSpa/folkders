import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import models from "../../models";
import Step from '../types/stepType';

export const createStep = {
	type: Step,
	args: {
		content: { type: new GraphQLNonNull(GraphQLString) },
    todo_id: { type: new GraphQLNonNull(GraphQLInt) }
	},
	resolve(root, args, ctx) {
    args = {...args, user_id: ctx.user.id}
		return models.Step.create(args);
	}
}