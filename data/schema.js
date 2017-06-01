import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";

import GraphQLJSON from "graphql-type-json";

import models from "../models";

const Company = new GraphQLObjectType({
  name: "company",
  description: "Represent a company",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    users: {
      args: {
        name: { type: GraphQLJSON },
        limit: { type: GraphQLInt }
      },
      type: new GraphQLList(User),
      resolve(company, args) {
        return company.getUsers({ where: args });
      }
    },
    clients: {
      type: new GraphQLList(Client),
      resolve(company, args) {
        return company.getClients();
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

const Client = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    name: { type: GraphQLString },
    projects: {
      type: new GraphQLList(Project),
      resolve(client) {
        return client.getProjects();
      }
    }
  })
});

const Project = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    name: { type: GraphQLString },
    todos: {
      type: new GraphQLList(Todo),
      resolve(project) {
        return project.getTodos();
      }
    }
  })
});

const Todo = new GraphQLObjectType({
  name: "todo",
  fields: () => ({
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    created_at: { type: GraphQLString },
    subtodos: {
      type: new GraphQLList(SubTodo),
      args: {
        order: { type: GraphQLJSON } 
      },
      resolve(todo, args) {
        return todo.getSubTodos(args);
      }
    },
    author: {
      type: User,
      resolve(todo) {
        return todo.getUser();
      }
    }
  })
});

const SubTodo = new GraphQLObjectType({
  name: "subtodo",
  fields: () => ({
    content: { type: GraphQLString },
    created_at: { type: GraphQLString },
    author: {
      type: User,
      resolve(todo) {
        return todo.getUser();
      }
    }
  })
});

const whereFilter = new GraphQLInputObjectType({
  name: "whereFilter",
  fields: {
    name: { type: GraphQLJSON },
    company_id: { type: GraphQLInt }
  }
});

const Query = new GraphQLObjectType({
  name: "folkderApp",
  description: "Root Schema",
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve(root, args) {
        return models.User.findAll({ where: args });
      }
    },
    clients: {
      type: new GraphQLList(Client),
      args: {
        where: {
          type: new GraphQLInputObjectType({
            name: "clientsWhereFilter",
            fields: {
              name: { type: GraphQLJSON },
              company_id: { type: new GraphQLNonNull(GraphQLInt) }
            }
          })
        },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(root, args) {
        return models.Client.findAll(args);
      }
    },
    companies: {
      args: {
        where: {
          type: whereFilter
        },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      type: new GraphQLList(Company),
      resolve(root, args) {
        return models.Company.findAll(args);
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "folkderAppMutations", 
  fields: () => ({
    createCompany: {
      type: Company,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args) {
        return models.Company.create(args);
      }
    },
    updateCompany: {
      type: Company,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        data: { type: new GraphQLNonNull(GraphQLJSON) }
      },
      resolve(root, args) {
        return models.Company.update(args.data, { where: { id: args.id } })
        .then(company => models.Company.findOne({where: args.id}));
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
