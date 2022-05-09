import React from "react";
import axios from "axios";
import styled from "styled-components";
import CardPokemon from "../../components/CardPokemon";
import { goToHomePage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import CardPokedex from "../../components/CardPokedex";


const ContainerPokedex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* gap: 12px; */
  width: 100%;
`

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100%;
  flex-wrap: wrap;
  background: white;
  /* margin-top: 0px; */
  margin-bottom: 16px;
`;
const Titulo = styled.div`
  display: flex;
  margin-left: 36px;
  color: white;
  font-size: 16px;
  align-items: center;
  font-style: italic;
  span {
    /* font-size: 16px; */
    color: black;
  }
`;

const Nav = styled.div`
  /* margin-right: 36px; */
  button {
    margin: 16px;
    color: #161616;
    font-size: 16px;
    font-weight: 500;
    padding: 2px 16px;
    /* border: #fff; */
    border-radius: 6px;
    border: none;
    /* background: ; */
    width: auto;
    height: 32px;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover {
    background: #7869bf;
    color: white;
    border: none;
    transform: scale(1.05);
  }
`;

export default function Pokedex(props) {
  const navigate = useNavigate()


const mostrarNapokedex = props.pokemonsInPokedex.map((pokemon)=>{
  console.log(pokemon)
  return <CardPokedex removeFromPokedex={props.removeFromPokedex} pokemon={pokemon} />

})


  return (
    <ContainerPokedex>
    <Cabecalho>
        <Titulo>
          <h1>
            <span>
            POKÉDEX
            </span>
          </h1>
        </Titulo>
        <Nav>
        <button onClick={()=>goToHomePage(navigate)}>Home</button>
        </Nav>
       
      </Cabecalho>

      {mostrarNapokedex}
     
    </ContainerPokedex>
  );
}
