import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Définit des props par défaut
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: "N/A",
  age: "N/A",
  image: "https://via.placeholder.com/150",
};

export default Player;
