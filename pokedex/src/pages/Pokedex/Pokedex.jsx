import React from "react";
import axios from "axios";
import styled from "styled-components";
import CardPokemon from "../../components/CardPokemon";
import { goToHomePage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import CardPokedex from "../../components/CardPokedex";



export default function Pokedex(props) {
  const navigate = useNavigate()


const mostrarNapokedex = props.pokemonsInPokedex.map((pokemon)=>{
  console.log(pokemon)
  return <CardPokedex removeFromPokedex={props.removeFromPokedex} pokemon={pokemon} />

})


  return (
    <>
    <h1>Pokedex</h1>
  




      {mostrarNapokedex}
      <button onClick={()=>goToHomePage(navigate)}>Home</button>
    </>
  );
}
