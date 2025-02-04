import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link to={"/"}>
          <img className="logo w-20 mix-blend-multiply" src={LOGO_URL} />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-10">
          <li className="">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-gray-500">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link className="link" to={"/about"}>
              About us
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link className="link" to={"/contact"}>
              Contact us
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link className="link" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <button
            className="px-4 py-2 rounded-lg bg-pink-200 hover:bg-pink-400 font-bold"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </nav>

      <div className="text-2xl cursor-pointer md:hidden">
        <i class="ri-menu-line"></i>
      </div>
    </div>
  );
};

export default Header;
