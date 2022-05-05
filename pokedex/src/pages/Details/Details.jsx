import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { HeaderStyle, CardBasic, MainTagStyle } from "./DetailsStyled";
import { goToBack } from "../../routes/Coordinator";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  console.log(params);
  console.log(pokemon.types);
  console.log(pokemon.stats);

  const getAllPokeCard = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
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
      <HeaderStyle>
        <h1>{pokemon.name && <>{pokemon.name.toUpperCase()}</>}</h1>
      </HeaderStyle>

      <>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button>Adicionar/Remover</button>
      </>

      <MainTagStyle>
        <div>
          <CardBasic>
            {pokemon.sprites && (
              <img
                src={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={pokemon.name}
              />
            )}
          </CardBasic>

          <CardBasic>
          {pokemon.sprites && (
              <img
                src={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
                alt={pokemon.name}
              />
            )}
          </CardBasic>
        </div>

        <div>
          <h2>Stats</h2>
          <h3>HP: {pokemon.stats && <>{pokemon.stats[0].base_stat}</>} </h3>
          <h3>ATTACK: {pokemon.stats && <>{pokemon.stats[1].base_stat}</>}9</h3>
          <h3>DEFENSE: {pokemon.stats && <>{pokemon.stats[2].base_stat}</>}</h3>
          <h3>
            SPECIAL-ATTACK:{pokemon.stats && <>{pokemon.stats[3].base_stat}</>}
          </h3>
          <h3>
            SPECIAL-DEFENSE:{" "}
            {pokemon.stats && <>{pokemon.stats[4].base_stat}</>}
          </h3>
          <h3>SPEED: {pokemon.stats && <>{pokemon.stats[5].base_stat}</>}</h3>
        </div>

        <div>
          <div>
            <h2>
              {" "}
              Type 1: {pokemon.types && <>{pokemon.types[0].type.name}</>}
            </h2>
            <h2>
             Type 2:{ pokemon.types && ( pokemon.types.length>1? <>{pokemon.types[1].type.name}</> :" null ")}
            </h2>
          </div>

          <div>
            <h2>MOVES</h2>
            <h3>{pokemon.moves && <>{pokemon.moves[0].move.name}</>}</h3>
            <h3>{pokemon.moves && <>{pokemon.moves[1].move.name}</>}</h3>
            <h3>{pokemon.moves && <>{pokemon.moves[2].move.name}</>}</h3>
          </div>
        </div>
      </MainTagStyle>
    </center>
  );
}
