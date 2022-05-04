import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { goToDetails } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 40vh;
  align-items: center;
`;

export default function CardPokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  const getAllPokeCard = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        alert("[ERRO]");
      });
  };

  useEffect(() => {
    getAllPokeCard();
  }, []);

  return (
    <center>
      <CardFather>
        
        <>
        <h1>{pokemon.name && (
              <>{pokemon.name.toUpperCase()}</>
            )}</h1>
        </>

        <>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
          ;
        </>
        
        <button>REMOVER DA POKEDEX</button>
        <button onClick={() => goToDetails(navigate, pokemon.name)}>
          VER DETALHES
        </button>
      </CardFather>
    </center>
  );
}
