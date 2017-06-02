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

export default SubTodo;
