import React, { Component } from "react";
import Client from './item';

class Clients extends Component {
  
  changeClient = (client, e) => {
    this.props.changeClient(client);
  };

  searchClients = e => {
    this.props.searchClients(e);
  };

  editClient = (client, e) => {
    e.preventDefault();
    console.log(client);
  }

  render() {
    const { data } = this.props;
    const { clients = [] } = data;

    return (
      <section style={{ height: "80vh", overflow: "auto" }}>
        <h3 style={{ color: "#fff" }}>Clients</h3>
        <input
          type="text"
          onChange={this.searchClients}
          className="form-control"
          placeholder="Search"
        />
        <ul style={{ padding: "0" }}>
          {clients.map((client, i) => <Client changeClient={this.changeClient} selected={this.props.selected} key={i} client={client} />)}
        </ul>
      </section>
    );
  }
}

export default Clients;
