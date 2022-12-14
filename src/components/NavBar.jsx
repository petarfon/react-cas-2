//precica rfce
import React from "react";
import { BsCartFill } from "react-icons/bs";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <a href="">My Store</a>
      <div className="cart-items">
        <BsCartFill />
        <p className="cart-num">{cartNum}</p>
      </div>
    </div>
  );
}

export default NavBar;
