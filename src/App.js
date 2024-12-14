import React from "react";
import PlayersList from "./Composant/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Cartes des joueurs FIFA</h1>
      <PlayersList />
    </div>
  );
}

export default App;
