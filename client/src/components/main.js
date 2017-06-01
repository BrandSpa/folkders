import React, { Component } from "react";
import { gql, graphql } from 'react-apollo';
import Header from './header';

class Main extends Component {
  render() {
    return (
      <div>
				<Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default graphql(
  gql`
    query getClients{ 
      clients {
        name,
        projects {
          name,
          todos {
            title,
            content,
            created_at,
            author {
              name
            }
            subtodos(order: [["id", "DESC"]]) {
              content,
              created_at,
              author {
                name
              }
            }
          }
        }
      }


    }
  `)(Main);
