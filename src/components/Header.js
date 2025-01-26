import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              About us
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact"}>
              Contact us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
