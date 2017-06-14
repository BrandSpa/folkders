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

const clientsFilter = new GraphQLInputObjectType({
    name: "clientsFilters",
    fields: () => ({
      id: { type: GraphQLJSON },
      name: { type: GraphQLJSON }
    })
});
  
const clients = {
  type: new GraphQLList(Client),
  args: {
    where: {type: clientsFilter},
    limit: { type: GraphQLInt },
    order: { type: GraphQLJSON }
  },
  resolve(root, args, ctx) {
    let where = {...args.where, company_id: ctx.user.company_id};
    return models.Client.findAll({...args, where });
  }
};

export default clients;
