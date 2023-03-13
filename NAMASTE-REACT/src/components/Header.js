import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"
import { LOGO } from "../confige";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2 sm:bg-center"
        alt="logo"
        src={LOGO}
      ></img>
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline=useOnline();

  const {user}=useContext(UserContext);
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 lg:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">cart</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2">
            cart-{cartItems.length}

          </li>
        </ul>
      </div>
      <h1>{isOnline? "✅":"🔴"}</h1>
      <span className="span">{user.name}-{user.email}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
