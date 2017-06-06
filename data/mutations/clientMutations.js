import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import models from "../../models";
import Client from '../types/clientType';

export const createClient = {
	type: Client,
	args: {
		name: { type: new GraphQLNonNull(GraphQLString) },
    company_id: { type: new GraphQLNonNull(GraphQLInt) }
	},
	resolve(root, args) {
		return models.Client.create(args);
	}
}

export const updateClient = {
  type: Client,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    data: { type: new GraphQLNonNull(GraphQLJSON) }
  },
  resolve(root, args) {
    return models.Client.update(args.data, { where: { id: args.id } })
      .then(company => models.Client.findOne({ where: args.id }));
  }
};
