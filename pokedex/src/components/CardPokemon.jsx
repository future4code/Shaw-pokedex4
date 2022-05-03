import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const CardFather = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40vh;
    align-items: center;

    
    
`

export default function CardPokemon(props) {

  const [pokemon, setPokemon] = useState({})

  const getAllPokeCard = () => {

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
      .then((res) => {
        setPokemon(res.data)

      })
      .catch((err) => {
        alert("[ERRO]")
      })
  };

  useEffect(() => {

    getAllPokeCard()

  }, []);


  return (
    <center>
      <CardFather>
        <>
        {pokemon.sprites && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}/>)};

        </>
        <button>REMOVER DA POKEDEX</button>
        <button>VER DETALHES</button>
      </CardFather>

    </center>
  );
}