import React, { Component } from 'react';
import Client from './item';
import ClientForm from './form';

class Clients extends Component {

  componentWillReceiveProps(props) {
    if(!props.client.selected.hasOwnProperty('id') && props.data.clients.length > 0) {
      this.selectClient(props.data.clients[0]);
    }
  }
   
  selectClient = client => {
    this.props.dispatch({type: 'SELECT_CLIENT', payload: client});
  }

  renderLoading = () => {
    return (<section className="col-lg-3 clients"><h5>loading...</h5></section>)
  }

  render() {
    const { clients = [], loading } = this.props.data;
    const { selected } = this.props.client;
    if(loading) return this.renderLoading();

    return (
      <section className="col-lg-3 clients">
        <header>
          <h5>Clients</h5>
        </header>
        <ul className="clients--list">
          <li><ClientForm /></li>
          {clients.map(client =>
            <Client
              key={client.id}
              client={client}
              selectClient={this.selectClient}
              selected={selected}
            />
          )}
        </ul>
      </section>
    )
  }
}

export default Clients;