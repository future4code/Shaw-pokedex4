import React,{ useEffect, useState }  from "react";
import axios from "axios";
import styled from "styled-components";
import { goToPokedex } from "../../routes/Coordinator";
import { useNavigate} from "react-router-dom";
import { goToDetails } from "../../routes/Coordinator";
import CardPokemon from "../../components/CardPokemon";
import Details from "../Details/Details";





export default function HomePage() {

    const navigate = useNavigate()
    const [pokemonList, setpokemonList] = useState([])

   const  getAllPokeName  =()=> {
  
    axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then((res)=>{
      setpokemonList(res.data.results)
      console.log(res.data.results)
    })
    .catch((err)=>{
        alert("[ERRO]")
    })
   };

   useEffect(()=>{

    getAllPokeName()

   },[]);

   const mapPokemons = pokemonList && pokemonList.map((pokemon)=>{

    return <>
    <CardPokemon nome={pokemon.name}/>
    
    </>

    
   })

   const mapDetalhes = pokemonList && pokemonList.map((pokemon)=>{
    return <Details nome={pokemon.name}/>

    

   })

  return (
    <>
   <h1>HOME PAGE</h1>
    {mapPokemons}


   <button onClick={() => goToDetails(navigate)}>Detalhes</button>
   <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
    </>
  );
}