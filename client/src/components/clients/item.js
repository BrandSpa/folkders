import React, { Component } from 'react';

class Client extends Component {
  selectClient = e => {
    e.preventDefault();
    this.props.selectClient(this.props.client);
  }

  render() {
    const { client, selected } = this.props;
    return (
      <li className={`client__item ${client.id == selected.id ? 'client__item--active' : ''}`}>
        <a href='#' onClick={this.selectClient}>{client.name}</a>
      </li>
    );
  }
}

export default Client;
