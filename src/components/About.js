import { log } from "console";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent Constructor");
  }
  render() {
    console.log("Paren render");

    return (
      <div>
        <h1>Namaste-React Project 1</h1>
        <User firstName={"Ayush"} />
        <UserClass name={"First Child"} />
        <UserClass name={"Second Child"} />
        <UserClass name={"Third Child"} />
      </div>
    );
  }
  componentDidMount() {
    console.log("Parent Mount");
  }
}
export default About;
