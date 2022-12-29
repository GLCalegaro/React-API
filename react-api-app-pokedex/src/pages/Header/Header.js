import React, {useState, useEffect} from "react";
import "../../styles/header.css";
import axios from "axios";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


const Navbar = () => {
    const navigate = useNavigate();
    const navigateToPokedex =()=>{
        navigate("/pokedex")
    }
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png"
    return (
            <body className="header">
                <div className="bodyheade">
                    <h5>Todos Pokémons</h5>
                <div>
                    <img className="navbar-img"
                    src={logo}alt="pokedex-logo"
                    />
                    <motion.div className="poke-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={navigateToPokedex}>
                        Pokédex
                    </motion.div>
                    </div>
                </div>
            </body>
    )
}

export default Navbar;