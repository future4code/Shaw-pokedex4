import React from "react";
import axios from "axios";
import styled from "styled-components";


const CardFather = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40vh;
    align-items: center;

    
    
`

export default function CardPokemon() {
   
   

  return (
    <center>
       <CardFather>
       <foto>
            <img src="https://www.imagensanimadas.com/data/media/1446/pokemon-imagem-animada-0100.gif"/>
        </foto>
        <button>REMOVER DA POKEDEX</button>
        <button>VER DETALHES</button>
       </CardFather>

    </center>
  );
}