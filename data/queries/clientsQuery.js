import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import Client from "../types/clientType";
import models from "../../models";

const clientsFilter = new GraphQLNonNull(
    new GraphQLInputObjectType({
      name: "clientsFilter",
      fields: () => ({
        name: { type: GraphQLJSON },
        company_id: { type: new GraphQLNonNull(GraphQLInt) }
      })
    })
);

const clients = {
  type: new GraphQLList(Client),
  args: {
    where: {type: clientsFilter},
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve(root, args) {
    return models.Client.findAll(args);
  }
};

export default clients;
