import React, { Component } from "react";

class Clients extends Component {
  
  changeClient = (client, e) => {
    e.preventDefault();
    this.props.changeClient(client);
  };

  searchClients = e => {
    this.props.searchClients(e);
  };

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
        />
        <ul style={{ padding: "0" }}>
          {clients.map((client, i) => {
            return (
              <li
                key={i}
                style={this.props.selected == client.id ? { listStyle: "none", background: "rgba(0,0,0, .3)" } :{ listStyle: "none"} }
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
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Clients;
