import React, { ReactDOM } from "react";
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: false, password: "" };
    this.onClick = this.onClick.bind(this);
  }
  getPassword(password) {
    this.setState({ password: password });
  }

  onClick() {
    this.setState({ active: true });
  }

  render() {
    return (
      <div>
        <h1>Generate Password</h1>
        <GeneratePassword />
        <p>Password is: {this.state.password}</p>
      </div>
    );
  }
}

class GeneratePassword extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  generatePassword() {
    return 12345666;
  }

  render() {
    return (
      <div>
        <button>Generate Password</button>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("root"));
