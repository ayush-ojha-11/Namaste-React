import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");

    this.state = {
      count: 20,
    };
  }

  render() {
    console.log(this.props.name + " render");
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
    this.interval = setInterval(() => {
      console.log("Interval");
    }, 1000);
    console.log(this.props.name + " mount");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default UserClass;
