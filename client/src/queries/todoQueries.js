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
    assigned {
      name
    }
    subtodos {
			id
      content
    }
  }
}
`;

export const createTodoMutation = gql`
	mutation createTodo($content: String!, $title: String, $project_id: Int!, $assign_id: Int) {
		createTodo(title: $title, content: $content, project_id: $project_id, assign_id: $assign_id) {
			id
			title
			content
			created_at
			author {
				id
				name
			}
			assigned {
				id
				name
			}
		}
	}
`;
