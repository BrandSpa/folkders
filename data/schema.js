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

import models from '../models';

const Company = new GraphQLObjectType({
  name: "company",
   description: "Represent a company",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    users: {
      type: User,
      resolve(company) {
        return company.getUsers({}).then(user => user[0] ? user[0].dataValues : {} );
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
      type: GraphQLString, 
      resolve(user) {
        return user.name
      }
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
        console.log(args);
        return models.User.findAll({where: args});
      }
    },
    companies: {
      type: new GraphQLList(Company),
      resolve(root, args) {
        return models.Company.findAll({});
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});


export default Schema;