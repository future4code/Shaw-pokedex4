import React from "react";
import axios from "axios";
import styled from "styled-components";
import { goToPokedex } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/Coordinator";
import CardPokemon from "../../components/CardPokemon";


export default function HomePage() {
    const navigate = useNavigate()
  

  return (
    <>
   <h1>HOME PAGE</h1>
    <CardPokemon/>

   <button onClick={() => goToDetails(navigate)}>Detalhes</button>
   <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
    </>
  );
}