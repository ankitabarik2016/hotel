import React from "react";
import './Header.css'

function Header() {
    return (
        <div className="head"> The Hotel Taj
            <div className="left-head">
            <ul className="room d-flex">
                <li><a href="">Room</a></li>
                <li><a href="">Amenities</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Photos</a></li>
            </ul>
        </div>
        <div className="right-head">
            <ul className="login d-flex">
                <li><a href="">Login</a></li>
                <li><a href="">SignIn</a></li>
            </ul>
        </div>
        </div>
    )
}
export default Header