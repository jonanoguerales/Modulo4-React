import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterType } from "./search-context-character";

export const DetailCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterType>();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((json) => setCharacter(json));
  }, []);
  return (
    <>
      <div className="list-character-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Name</span>
        <span className="list-header">Status</span>
        <span className="list-header">Species</span>
        <span className="list-header">Gender</span>
        <img src={character?.image} alt="img perfil personaje"></img>
        <span>{character?.name}</span>
        <span>{character ? character.status : ""}</span>
        <span>{character?.species}</span>
        <span>{character?.gender}</span>
      </div>
      <Link to="/list-rickandmorty">Back to list page</Link>
    </>
  );
};
