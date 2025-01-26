import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {props.firstName}</h2>
      <h3>Location: Basti</h3>
      <h4>Contact: @heyy </h4>
    </div>
  );
};

export default User;
