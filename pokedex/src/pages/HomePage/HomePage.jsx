import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { goToPokedex } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/Coordinator";
import CardPokemon from "../../components/CardPokemon";
import Details from "../Details/Details";



const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* gap: 12px; */
  width: 100%;
`

// ----------------------------------------------------------------------



const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin-top: 0px;
`;
const Titulo = styled.div`
  display: flex;
  margin-left: 36px;
  color: white;
  font-size: 16px;
  align-items: center;
  span {
    /* font-size: 16px; */
    color: black;
  }
`;

const Nav = styled.div`
  margin-right: 36px;
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

// ------------------------------------------------------------------------


const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;

`







export default function HomePage(props) {
  const navigate = useNavigate();
  const [pokemonList, setpokemonList] = useState([]);
 

  const getAllPokeName = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((res) => {
        setpokemonList(res.data.results);

      })
      .catch((err) => {
        alert("[ERRO]");
      });
  };

  useEffect(() => {
    getAllPokeName();
  }, []);

  const mapPokemons =
    pokemonList &&
    pokemonList.map((pokemon) => {
      return (
        <>
          <CardPokemon addPokedex={props.addPokedex} nome={pokemon.name} />
        </>
      );
    });

  const mapDetalhes =
    pokemonList &&
    pokemonList.map((pokemon) => {
      return <Details nome={pokemon.name} />;
    });

  return (

    <HomeContainer>
       <Cabecalho>
        <Titulo>
          <h1>
            Labe
            <span>
            Pokémons
            </span>
          </h1>
        </Titulo>
        <Nav>
        <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </Nav>
       
      </Cabecalho>
      <Cards>
        {mapPokemons}
      </Cards>
      {/* <button onClick={() => goToDetails(navigate)}>Detalhes</button> */}
      {/* <button onClick={() => goToPokedex(navigate)}>Pokedex</button> */}
    </HomeContainer>

  );
}
