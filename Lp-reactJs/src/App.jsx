import { useState } from "react";
import "./App.scss";
import Main from "./Components/Main";
import Conteudo from "./Components/Conteudo";
function App() {
  return (
    <div className="App">
      <Main />
      <Conteudo />
    </div>
  );
}

export default App;
