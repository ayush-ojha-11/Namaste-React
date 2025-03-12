import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link to={"/"}>
          <img
            className="logo w-12 md:w-16 mix-blend-multiply"
            src={LOGO_URL}
          />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-3 md:gap-10 text-s md:text-xl">
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
