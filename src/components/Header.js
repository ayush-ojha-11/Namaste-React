import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link to={"/"}>
          <img className="logo w-20 mix-blend-multiply" src={LOGO_URL} />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-10">
          <li className="hover:text-gray-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to={"/contact"}>Contact us</Link>
          </li>

          <li className="font-medium">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
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
        <i className="ri-menu-line"></i>
      </div>
    </div>
  );
};

export default Header;
