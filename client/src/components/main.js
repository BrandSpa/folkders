import React, { Component } from "react";
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

export default Main;
