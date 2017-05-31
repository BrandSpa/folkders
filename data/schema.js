import  {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
   GraphQLNonNull,
   GraphQLInputObjectType
} from 'graphql';

import GraphQLJSON from 'graphql-type-json';

import models from '../models';

const Company = new GraphQLObjectType({
  name: "company",
   description: "Represent a company",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    users: {
      args: {
       name: { type: GraphQLJSON }
      },
      type: new GraphQLList(User),
      resolve(company, args) {
        return company.getUsers({where: args})
      }
    }
  })
});

const User = new GraphQLObjectType({
  name: "user",
   description: "Represent a user",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { 
      type: GraphQLString
    },
    email: { type: GraphQLString },
    company: {
      type: Company,
      resolve(user) {
        return user.getCompany();
      }
    }
  })
});



const Query = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root Schema",
   fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve(root, args) {
        return models.User.findAll({where: args});
      }
    },
    companies: {
      args: {
       name: { type: GraphQLJSON },
      },
      type: new GraphQLList(Company),
      resolve(root, args) {
        return models.Company.findAll({where: args});
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});


export default Schema;