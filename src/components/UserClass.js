import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count++
        </button>
        <h2>Name: Ayush Ojha</h2>
        <h3>Location: Basti</h3>
        <h4>Contact: {this.props.contact}</h4>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => {}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default UserClass;
