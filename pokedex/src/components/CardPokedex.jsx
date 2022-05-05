import styled from "styled-components"
import {useParams} from "react-router-dom"
import { goToDetails } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import useRequestData from "../Hooks/useRequestData"



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


function CardPokedex(props) {
const navigate = useNavigate()

const detalhesPokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`,{})
  


    return (
        <CardContainer>
          <CardFather>
            
            <>
            <h1>{props.pokemon && (
                  <>{props.pokemon.toUpperCase()}</>
                )}</h1>
            </>
    
            <>
            {detalhesPokemon.sprites && (
            <img src={detalhesPokemon.sprites.front_default} alt={detalhesPokemon.name} />
          )}
              
            </>
            
            <button onClick={()=>props.removeFromPokedex(props.pokemon)}>Remover Pokemon</button>
            <button onClick={() => goToDetails(navigate, props.pokemon)}>
              VER DETALHES
            </button>
          </CardFather>
        </CardContainer>
      );
  }
  export default CardPokedex