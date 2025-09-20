import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Avatar } from "@mui/material";
import { SearchContext } from "./search-context";

export const ListPage: React.FC = () => {
  const { members, search, handlerSearch, setSearchOrg, nextPage, prevPage } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">Hello from List page</Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/list-rickandmorty")}
        style={{ backgroundColor: "red", margin: "2rem" }}
      >
        Ir a lista Rick and Morty
      </Button>
      <div>
        <TextField
          label="Organización"
          value={search}
          onChange={handlerSearch}
          variant="outlined"
          size="small"
          style={{ marginRight: "10px" }}
        />
        <Button
          variant="contained"
          onClick={() => setSearchOrg((prev) => !prev)}
        >
          Buscar organización
        </Button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <Avatar src={member.avatar_url} alt={member.login} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <div>
        <Button onClick={prevPage} variant="outlined">
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          variant="outlined"
          style={{ marginLeft: "10px" }}
        >
          Siguiente
        </Button>
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
