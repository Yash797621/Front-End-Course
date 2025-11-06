import React from "react";

class WelcomeMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default WelcomeMessage;
