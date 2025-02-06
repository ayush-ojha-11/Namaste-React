import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Namaste-React Project 1</h1>
        <User firstName={"Ayush"} />
        <UserClass name={"First Child"} />
      </div>
    );
  }
  componentDidMount() {}
}
export default About;
