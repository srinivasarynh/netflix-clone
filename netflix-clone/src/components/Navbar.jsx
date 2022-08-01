import React, { useEffect, useState } from "react";
import "./navbar.css"

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`navbar ${show && "nav__black"}`}>
        <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" alt="" />

        <img className="nav__avatar" src="https://icons-for-free.com/download-icon-avatar+human+people+profile+user+icon-1320168139431219590_256.ico"  alt="" />
        </div>
    )
}

export default Navbar;