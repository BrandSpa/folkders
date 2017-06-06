import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import GraphQLJSON from "graphql-type-json";
import User from './userType';
import SubTodo from './subtodoType';

const Todo = new GraphQLObjectType({
  name: "todo",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    created_at: { type: GraphQLString },
    subtodos: {
      type: new GraphQLList(SubTodo),
      args: {
        where: { type: GraphQLJSON },
        order: { type: GraphQLJSON },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
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

export default Todo;