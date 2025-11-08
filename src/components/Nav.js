import React from "react";
import Logo  from  "../assest/Logo .svg"

function Nav(){
    return(
        <>
         <img src={Logo} alt="logo"/>
        <ul>
         <li><a href="home">Home</a></li>
         <li><a href="About"> About</a></li>
         <li><a href="Menu">Menu</a></li>
         <li><a href="Reservation">Reservations</a></li>
         <li><a href="OrderOnline">Order online</a></li>
         <li><a href="Login"> Login</a></li>
        </ul>
        </>
    );

}
export default Nav;