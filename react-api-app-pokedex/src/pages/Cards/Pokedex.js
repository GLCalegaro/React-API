import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pokedex = ({match}) => {
    const id = match.params.id;
    console.log(id);
    const [pokemonDetails, setPokemonDetails] = useState();

    const getPokemon = async(id) =>{
        const details = await getPokemonData(id);
        setPokemonDetails(details.data)
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Pokedex;