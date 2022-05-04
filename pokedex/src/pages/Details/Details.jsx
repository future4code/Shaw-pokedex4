import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { HeaderStyle, CardBasic, MainTagStyle } from "./DetailsStyled";
import { goToBack } from "../../routes/Coordinator";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const params = useParams()
  const [pokemon, setPokemon] = useState({});
  console.log(params);

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
    <>
      <HeaderStyle>
        <button onClick={() => goToBack(navigate)}>Voltarx</button>
        <h1>{pokemon.name && (
              <>{pokemon.name.toUpperCase()}</>
            )}</h1>
        <button>Adicionar/Remover da pokedex</button>
      </HeaderStyle>

      <MainTagStyle>
        <div>
          <CardBasic>
            <p>Imagem frontal</p>
            {pokemon.sprites && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
          </CardBasic>

          <CardBasic>
            <p>Imagem costas</p>
            {pokemon.sprites && (
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            )}
          </CardBasic>
        </div>

        <div>
          <h2>Stats</h2>
          <h3>HP: {pokemon.hp && (
              <>{pokemon.hp}</>
            )}</h3>
          <h3>ATTACK: 39</h3>
          <h3>DEFENSE: 52</h3>
          <h3>SPECIAL-ATTACK: 43</h3>
          <h3>SPECIAL-DEFENSE: 54</h3>
          <h3>SPEED: 54</h3>
        </div>

        <div>
          <div>
            <h2>Type 1</h2>
            <h2>Type 2</h2>
          </div>

          <div>
            <h2>MOVES</h2>
            <h3>Move name 1</h3>
            <h3>Move name 2</h3>
            <h3>Move name 3</h3>
          </div>
        </div>
      </MainTagStyle>
    </>
  );
}
