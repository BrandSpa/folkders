import React, { Component } from "react";

class Client extends Component {

  changeClient = (client, e) => {
    e.preventDefault();
    this.props.changeClient(client);
  }

  editClient = (client, e) => {
    e.preventDefault();
    console.log(client);
  }
	
  render() {
    const {client} = this.props;

    return (
      <li
        style={
          this.props.selected == client.id
            ? { listStyle: "none", background: "rgba(0,0,0, .3)" }
            : { listStyle: "none" }
        }
      >
        <a
          href="#"
          style={{
            display: "block",
            padding: "40px 0 10px 10px",
            color: "#fff",
            padding: "20px 40px"
          }}
          onClick={this.changeClient.bind(null, client)}
        >
          {client.name}
          <button onClick={this.editClient.bind(null, client)}>Edit</button>
        </a>
      </li>
    );
  }
}

export default Client;
