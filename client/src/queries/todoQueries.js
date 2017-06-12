import { gql } from 'react-apollo';

export const getTodoQuery = gql`
  query getTodo($id: Int!) {
  todo(where: {id: $id}) {
		id
    title
    content
    created_at
    author {
      name
    }
    subtodos {
      content
    }
  }
}
`;