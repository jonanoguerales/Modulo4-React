import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "./search-context-character";

export const ListRickAndMorty = () => {
  const { character, search, setSearch } = useContext(CharacterContext);
  return (
    <>
      <div style={{ display: "flex", gap:"0.5rem", marginBlock:"1rem" }}>
        <label>Buscar personaje</label>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        ></input>
      </div>
      <div className="list-characters-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Name</span>
        <span className="list-header">Gender</span>
        <span className="list-header">Datail</span>
        {character.length > 0 ? (
          character.map((character) => (
            <Fragment key={character.id}>
              <img src={character.image} alt="img perfil personaje"></img>
              <span>{character.name}</span>
              <span>{character.gender}</span>
              <Link to={`/detail-character/${character.id}`}>detail</Link>
            </Fragment>
          ))
        ) : (
          <p>No hay personajes</p>
        )}
      </div>
    </>
  );
};
