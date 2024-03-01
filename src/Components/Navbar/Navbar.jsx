import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

 const [menu , setmenu]   =  useState("shop");

  return (
    <>
      <div className="navbar">

        <div className="nav-logo">
          <img src={logo} alt="" />
          <p onClick={()=>{setmenu('shop')}}><NavLink style={{textDecoration:'none', color:"black", fontFamily:"serif" }} to={'./'}>SHOPPER</NavLink></p>
        </div>

        <ul className="nav-menu">
          <li onClick={()=>{setmenu("shop")}}><NavLink style={{textDecoration:'none', }}  to='/'>Shopper</NavLink>{menu==="shop"?<div></div>:<></>}</li>
          <li onClick={()=>{setmenu("mens")}}><NavLink style={{textDecoration:'none',}} to='/mens'>Men</NavLink>{menu==="mens"?<div></div>:<></>}</li>
          <li onClick={()=>{setmenu("womens")}}><NavLink style={{textDecoration:'none',}} to='/womens'>Women</NavLink>{menu==="womens"?<div></div>:<></>}</li>
          <li onClick={()=>{setmenu("kids")}}><NavLink style={{textDecoration:'none',}} to='/kids'>Kids</NavLink>{menu==="kids"?<div></div>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
         <NavLink to='/login'><button>Login</button></NavLink>
         <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink> 
          <div className="cart-count">0</div>
        </div>

  
      </div>
    </>
  );
};

export default Navbar;
