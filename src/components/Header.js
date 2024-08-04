import { useState,useContext } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";



const Header = () => {
const [LogBtn,setLogBtn]=useState(["LogIn"]);
const onlineStatus = useOnlineStatus();

const cartItems=useSelector((store)=>store.cart.items);


  return (
    <div className="flex flex-col mb-3 p-2 sm:px-4 sm:flex-row sm:items-center sm:justify-between md:flex md:flex-row md:justify-between md:items-center md:px-10 lg:border lg:border-black md:m-1 lg:w-11/12 lg:mx-auto lg:shadow-lg lg:mb-5">
      <div className="logo-container">
        <img className="w-14 h-14 sm:w-24 sm:h-20 lg:w-36 lg:h-32" src={logoUrl} />
      </div>
      <div className="nav-items">
        <ul className="flex flex-col gap-3 sm:flex-row md:flex md:flex-row md:gap-4 lg:gap-10 md:text-[1.1rem] lg:text-[1.3rem] font-semibold">
          <li>{onlineStatus?"Online":"Offline"}</li>
          <li className="cursor-pointer transition-all transform hover:scale-[1.04] duration-200"><Link to="/">Home</Link></li>
          <li className="cursor-pointer transition-all transform hover:scale-[1.04] duration-200"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer transition-all transform hover:scale-[1.04] duration-200"><Link to="/contact">Contact Us</Link></li>
          <li className="cursor-pointer transition-all transform hover:scale-[1.04] duration-200"><Link to={"/cart"}>Cart-({cartItems.length})items</Link></li>
          <li className="cursor-pointer transition-all transform hover:scale-[1.04] duration-200">
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
