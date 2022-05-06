import React from "react";
import axios from "axios";
import Header from "./components/Header";
import {Router} from "./routes/Router"


function App() {
  return (
    <>
      <main>
      <Router/>
      </main>
    </>
  );
}

export default App;
