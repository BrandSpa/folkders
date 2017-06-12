import { graphql } from "react-apollo";
import { connect } from 'react-redux';
import Todos from './section';
import { getTodoQuery } from '../../queries/todoQueries';

const todosWithData = graphql(getTodoQuery, {
   options: props => ({
    variables: {
      id: props.project.clientId
    }
  }),
  skip: props => { 
    return props.project.clientId == null ? true : false;
  }
})(Todos);

const mapStateToProps = state => ({
  client: state.client,
	project: {clientId: 1, selected: {id: 1, name: "brandspa"}},
	todo: state.todo
});

export default connect(mapStateToProps)(todosWithData);