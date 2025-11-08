import React from "react";
import Photo from "../assest/Recent.svg"

function Footer() {

    return (
        <>
            <img src={Photo} alt=" footer" />
            <div>
                <h1>Doormat
                    navigation</h1>
                <h2>
                    Home
                    About
                    Menu
                    Reservations
                    Order online
                    Login
                </h2>
                <h1>
                    Contact
                </h1>
                <h2>
                    Address
                    Phone Number
                    E-mail
                </h2>
                <h1>
                    Social Media Links
                </h1>
                <h2>Address
                    Phone Number
                    E-mail</h2>
            </div>


        </>
    );

}
export default Footer;