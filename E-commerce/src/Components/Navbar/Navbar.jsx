import { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = ({ loginActive, handleLoginActive, cart }) => {
  const menuItems = ["Shop", "Men", "Women", "Kids"];
  const [menu, setMenu] = useState("shop");

  const logOut = () => {
    handleLoginActive(false);
  };

  useGSAP(() => {
    gsap.to(".nav-logo, .nav-menu, .nav-login", {
      opacity: 1,
      duration: 2,
      ease: "power1.out",
      stagger: {
        amount: 1.5,
        from: "left",
      },
    });
  });

  const changeMenu = (e) => {
    setMenu(e.target.innerText.toLowerCase());
  };

  return (
    <div className="navbar">
      <div className="nav-logo opacity-0">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu opacity-0">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={menu === item.toLowerCase() ? "active" : ""}
              onClick={(e) => {
                changeMenu(e);
              }}
            >
              <Link to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="nav-login opacity-0">
        {loginActive ? (
          <button onClick={logOut}>
            <Link to="/login">Log Out</Link>
          </button>
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}

        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" />
          </Link>
          <div className="nav-cart-count">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
