import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { goToDetails } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";


const CardContainer = styled.div`
  width: 250px;
 
`
const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 50% 0%, orange 36%, #ffffff 36%);
  width: 100%;
  padding: 20px 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  
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
    <CardContainer>
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
          
        </>
        
        <button>REMOVER DA POKEDEX</button>
        <button onClick={() => goToDetails(navigate, pokemon.name)}>
          VER DETALHES
        </button>
      </CardFather>
    </CardContainer>
  );
}