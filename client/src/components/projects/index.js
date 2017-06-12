import { getClientProjectsQuery } from '../../queries/projectQueries';
import ProjectsSection from './section';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

const projectsWithData = graphql(getClientProjectsQuery, {
  options: props => ({
    variables: {
      clientId: props.client.id,
      order: [["id", "DESC"]]
    }
  })
})(ProjectsSection);

const mapStateToProps = state => ({
  client: {id: 2, name: 'damm'},
	project: state.project
});

export default connect(mapStateToProps)(projectsWithData);