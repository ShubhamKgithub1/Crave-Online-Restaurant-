import { useState } from "react";
import { logoUrl } from "../utils/constants";

const Header = () => {
const [LogBtn,setLogBtn]=useState(["LogIn"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
          <button className="login-btn" onClick={()=>{
            LogBtn==="LogIn"?setLogBtn("LogOut"):setLogBtn("LogIn");
          }}>{LogBtn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
