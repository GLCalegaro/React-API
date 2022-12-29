import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
// import { Card } from 'react-bootstrap';
import { Card } from '../../styles/style';
import { Link } from 'react-router-dom';
import pokeball from "../../Images/pokeball.png";
import { getTypes } from '../../service/getTypes';
import { getColors } from '../../service/getColors';
import {CardButton} from "../../styles/buttons";
import {getCardColors} from "../../service/getCardColors";
import { TypeImg, Pokeball, Cardimg, Typebackg, Pokecontenttypes, Alltypes } from '../../styles/style';
import "../../pages/Cards/pokemon.css";
import { useNavigate } from 'react-router-dom';

const Pokemon = ({pokemon}) => {
  console.log('teste array pokemon',pokemon)
  const navigate = useNavigate();
  const navigateToPokedex =()=>{
    navigate("/pokedex");
  
}
  const getColors = () => {
  switch(pokemon.types[0].type.name) {
    case "bug":
      return "#316520";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F4D23B";
    case "fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "red";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#5269AC";
    case "grass":
      return "#70B873";
    case "ground":
      return "#D97745";
    case "ice":
      return "#74CEC0";
    case "normal":
      return "#8A8A8A";
    case "poison":
      return "#AD61AE";
    case "Psychic":
      return "#F67176";
    case "Rock":
      return "#C7B78B";
    case "Steel":
      return "#BBBBBB";
    case "water":
      return "#33A4F5";
    default:
      return "#74CEC0";
  }
};


  return (
    <>
    <Card className='card' color={getColors}> 
      <div>
      <Card.Text className='ids' >
      <p>#0{pokemon.id}</p>
      </Card.Text>
    <Card.Title className='pokename' as='div'>
          <strong >
             {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </strong>
        </Card.Title>
        {/* <Poketypes>{`${pokemon.types[0].type.name}`}
        </Poketypes> */}
        <Pokecontenttypes>
          {pokemon.types.map(pokemonType => <Alltypes>
            {pokemonType.type.name}
          </Alltypes>)}
          {pokemon.types.map(pokemonType => { return <TypeImg style={{background: "#33A4F5", color: "#FFF"}} src={getTypes(pokemonType.type.name.toLowerCase())}/>}).sort((a,b) => a > b ? 1 : -1)}
        </Pokecontenttypes>
      <Cardimg
      src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <Card.Body>
      <Link className='details' to='/details'>Detalhes</Link>
      <motion.button hilehover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>Capturar!</motion.button>
      <Pokeball src={pokeball} alt='pokeball'/>
      </Card.Body>
      </div>
    </Card>
    </>  
    )
}

export default Pokemon