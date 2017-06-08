import React, { Component } from "react";
import Client from './item';
import Form from './form';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {}
    }
  }

  changeClient = (client, e) => {
    this.props.changeClient(client);
  }

  searchClients = e => {
    this.props.searchClients(e);
  }

  editClient = (client) => {
     this.setState({client});
  }

  addClient = (client) => {
    this.props.addClient();
  }

  render() {
    const { clients } = this.props;

    return (
      <section style={{position:'relative'}}>
      <header style={{position: "relative"}}>
        <h5><i className="ion-ios-folder"></i> Clients</h5>
        <input
          type="text"
          onChange={this.searchClients}
          className="form-control"
          placeholder="Search"
        />
        <br/>
        <Form
          companyId={this.props.companyId} 
          client={this.state.client} 
          addClient={this.addClient}  
        />
        <br/>
        </header>
        <ul style={{ padding: "0", height: "60vh", overflow: "auto" }}>
          {clients.map((client, i) => 
            <Client
              key={i}
              changeClient={this.changeClient} 
              editClient={this.editClient} 
              selected={this.props.selected.id} 
              client={client} 
            />
          )}
        </ul>
      </section>
    );
  }
}

export default Clients;
