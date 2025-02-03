import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [menuIcon, setMenuIcon] = useState("menu-outline");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center w-[92%] mx-auto">
      <div className="">
        <Link to={"/"}>
          <img className="logo w-16 mix-blend-multiply" src={LOGO_URL} />
        </Link>
      </div>

      <nav className="nav-links md:static bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
          <li className="">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-xl">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="hover:text-xl">
            <Link className="link" to={"/about"}>
              About us
            </Link>
          </li>
          <li className="hover:text-xl">
            <Link className="link" to={"/contact"}>
              Contact us
            </Link>
          </li>
          <li className="hover:text-xl">
            <Link className="link" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <button
            className="px-4 py-2 rounded-lg bg-blue-200 hover:bg-blue-400 font-bold"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </nav>

      <div className="text-3xl cursor-pointer md:hidden">
        <ion-icon name={menuIcon} onClick={() => onToggleMenu()}></ion-icon>
      </div>
    </div>
  );
};

export default Header;
