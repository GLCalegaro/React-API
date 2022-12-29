import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Pokedex from "../../src/pages/Cards/Pokedex";
import Homepage from "../pages/Home/Homepage";
import Detailspage from "../pages/Cards/Detailspage";

const Navrout = () =>{
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Homepage/>}/>
        <Route path='pokedex' element={<Pokedex/>}/>
        <Route path='details' element={<Detailspage/>}/>
        </Routes> 
    };

export default Navrout;