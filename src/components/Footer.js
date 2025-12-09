import React from "react";
import { Link } from 'react-router-dom';
import Photo from "../assest/logo.jpg"
import "./Footer.css"

function Footer() {

    return (
        <div className="fcountener">
            <section className="column-1">
                <img src={Photo} alt="Little Lemon Footer" className="footer-image" />
            </section>

            <section className="column">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><Link to="/reservations" className="nav-link-special">Reservations</Link></li>
                    <li><a href="/order">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </section>
            <section className="column">
                <h4>Contact</h4>
                <address>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>E-mail</p>
                </address>
            </section>
            <section className="column">
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="/j">Address</a></li>
                    <li><a href="/ff">Phone Number</a></li>
                    <li><a href="/ff">E-mail</a></li>
                </ul>
            </section>



        </div>
    );

}
export default Footer;