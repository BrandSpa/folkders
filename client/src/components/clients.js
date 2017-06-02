import React, { Component } from "react";

class Clients extends Component {

  openProjects = (client, e) => {
    e.preventDefault();
		this.props.changeProjects(client.projects);
  }

  render() {
    const { data } = this.props;
    const { clients = [] } = data;

    return (
      <section style={{ height: '80vh', overflow: 'auto' }}>
				<h3 style={{ color: '#fff' }}>Clients</h3>
        <input type="text" />
        <ul style={{padding: '0'}}>
          {clients.map((client, i) => {
            return (
              <li key={i} style={{ listStyle: 'none', background: 'rgba(0,0,0, .3)' }}>
                <a href="#" style={{display: 'block', padding: '40px 0 10px 10px', color: '#fff', padding: '20px 40px'}} onClick={this.openProjects.bind(null, client)}>
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
