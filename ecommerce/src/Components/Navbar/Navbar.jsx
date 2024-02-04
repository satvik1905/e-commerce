import React, { useState } from "react";
import './Navbar.css';

import logo from '../Assets/logo.png';
import carticon from '../Assets/cart_icon.png';
import { Link, NavLink } from "react-router-dom";


const Navbar = () =>{
    
    const [menu,setMemu] = useState("shop");
    
    return(
        <div className="navbar">
        <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>SHOPPER</p></div>
        <ul className="nav-menu">
        <li onClick={()=>{setMemu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMemu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMemu("womens")}}><NavLink style={{textDecoration:'none'}} to='/womens'>Women</NavLink>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMemu("kids")}}><NavLink style={{textDecoration:'none'}} to='/kids'>Kids</NavLink>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <NavLink to='/login'><button>Login</button></NavLink>
        <NavLink to='/cart'><img src={carticon} alt=""/></NavLink>
        <div className="nav-cart-count">0</div>
        </div>
        </div>
    )
}

export default Navbar