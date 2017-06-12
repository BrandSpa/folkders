import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import User from './userType';

const Todo = new GraphQLObjectType({
  name: "todo",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    created_at: { type: GraphQLString },
    is_completed: { type: GraphQLBoolean },
    subtodos: {
      type: new GraphQLList(Todo),
      args: {
        where: { type: GraphQLJSON },
        order: { type: GraphQLJSON },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(todo, args) {
        return todo.getTodos(args);
      }
    },
    author: {
      type: User,
      resolve(todo) {
        return todo.getUser();
      }
    },
    assigned: {
      type: User,
      resolve(todo) {
        console.log('assign', todo.assign_id);
        return todo.getUser();
      }
    }
  })
});

export default Todo;