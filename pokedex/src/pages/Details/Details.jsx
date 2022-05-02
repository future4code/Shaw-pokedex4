import React from "react";
import axios from "axios";
import styled from "styled-components";
import { HeaderStyle, CardBasic, MainTagStyle} from "./DetailsStyled";



export default function Details() {
  return (
    <>
      <HeaderStyle>
        <button>Voltar</button>
        <h1>Nome do pokemon</h1>
        <button>Adicionar/Remover da pokedex</button>
      </HeaderStyle>

      <MainTagStyle>
        <div>
          <CardBasic>
            <p>Imagem frontal</p>
            <img src="https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif" />
          </CardBasic>

          <CardBasic>
            <p>Imagem costas</p>
            <img src="https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif" />
          </CardBasic>
        </div>

        <div>
          <h2>Stats</h2>
          <h3>HP: 46</h3>
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
