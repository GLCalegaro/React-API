import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, Col, Row } from 'react-bootstrap';
import Pokemon from "../Cards/Pokemon";


const Homepage = () => {

  const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i=1; i<=21; i++){
            pokemonArray.push(await getPokemonData(i));
        }
            // console.log(pokemonArray);
            setPokemon(pokemonArray);
            setLoading(false);
        }
    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }
    
useEffect(() => {
    getPokemonList();
}, [])

  return (
    <Row>
      {pokemon.map(p => (
      <Col key={p.data.name}>
        <Pokemon pokemon={p.data}/>
      </Col>
        ))}

    </Row>
  )
}

export default Homepage;