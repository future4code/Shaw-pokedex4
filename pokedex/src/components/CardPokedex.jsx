import styled from "styled-components"
import {useParams} from "react-router-dom"
import { goToDetails } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import useRequestData from "../Hooks/useRequestData"



const CardContainer = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: space-around;
 
`
const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: linear-gradient(135deg, #051f40, #2c0d2f, #3b0326);
  width: 100%;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 12px;
  transition: 200ms;
  
  
  &:hover{
    transform: scale(1.03);
  }

  h3{
    margin: 24px auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
  }
  
  h4{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #ffff;
    
  }
`

const Imagem = styled.div`
display: inline-flex;
justify-content: center;
  
  img {
    width: 150px;
  }
`
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
    p {
      background-color: #efcb6d;
      padding: 2px 12px;
      border-radius: 8px 6px;
      color: black;

      span {
      color: black;

    }
    }
    
`
const Botoes = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: orange;
    border: none;
    transition: 100ms;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    color: white;

    &:hover{
      background-color: #fed330;
      transform: scale(1.05);
      color: black;
    }
  }
 
`

function CardPokedex(props) {
const navigate = useNavigate()

const detalhesPokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`,{})
  


    return (

      <CardContainer>
      <CardFather>
        <>
          <h4>HP: {detalhesPokemon.stats && <>{detalhesPokemon.stats[0].base_stat}</>} </h4>
        </>
        <Imagem>
          {detalhesPokemon.sprites && (
            <img src={detalhesPokemon.sprites.other.dream_world.front_default} alt={detalhesPokemon.name} />
          )}
          
        </Imagem>

        <>
        <h3>{detalhesPokemon.name && (
              <>{detalhesPokemon.name.toUpperCase()}</>
            )}</h3>
        </>
        <Stats>
          <p>ATTACK: <span>{detalhesPokemon.stats && <>{detalhesPokemon.stats[1].base_stat}</>}</span></p>
          <p>DEFENSE: <span>{detalhesPokemon.stats && <>{detalhesPokemon.stats[2].base_stat}</>}</span></p>
        </Stats>
        <Botoes>
        <button onClick={()=>props.removeFromPokedex(props.pokemon)}>REMOVER POKÉMON</button>
        <button onClick={() => goToDetails(navigate, props.pokemon)}>
          VER DETALHES
        </button>
        </Botoes>
      </CardFather>
    </CardContainer>
      );
  }
  export default CardPokedex