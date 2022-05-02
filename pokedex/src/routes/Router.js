import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Pokedex from "../pages/Pokedex/Pokedex";
import Details from "../pages/Details/Details";
import HomePage from "../pages/HomePage/HomePage";
import Error from "../pages/ErrorPage/Error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path= "pokedex" element={<Pokedex />} />
        <Route path= "/details/:name" element={<Details />} />
        <Route path= "*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};