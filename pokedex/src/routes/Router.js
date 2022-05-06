import React, {useState}from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Pokedex from "../pages/Pokedex/Pokedex";
import Details from "../pages/Details/Details";
import HomePage from "../pages/HomePage/HomePage";
import Error from "../pages/ErrorPage/Error";

export const Router = () => {

  const [pokemonsInPokedex, setPokemonsInPokedex] = useState([])


  const addPokedex = (pokemon) => {
    const newArrayPokedex = [...pokemonsInPokedex, pokemon]
    setPokemonsInPokedex(newArrayPokedex)
    alert('Você adicionou este Pokemón a sua Pokedex')
    
  };



  const removeFromPokedex = (name) => {


    const canDelete = window.confirm("Tem certeza que deseja remover esse Pokemon?")
    if (canDelete) {

      const newArrayPokedex = pokemonsInPokedex.filter((pokemon) => {
        return pokemon !== name
      })
      setPokemonsInPokedex(newArrayPokedex)

    }

  };



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage addPokedex={addPokedex} />} />
        <Route path= "pokedex" element={<Pokedex pokemonsInPokedex={pokemonsInPokedex} removeFromPokedex={removeFromPokedex}/>} />
        <Route path= "/details/:name" element={<Details />} />
        <Route path= "*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};