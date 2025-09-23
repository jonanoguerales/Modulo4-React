import { Link } from "react-router-dom";
import { useContext } from "react";
import { ButtonHiddenContext } from "../../button-hidden-provider";
import { MenuFoldIcon, MenuUnfoldIcon } from "../assets";

export const HeaderLayout = () => {
  const { hidden, handleHidden } = useContext(ButtonHiddenContext);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        margin: "2rem",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Kitties</Link>
        <Link to="/puppies">Puppies</Link>
      </nav>
      <button
        onClick={handleHidden}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        title={`${hidden? "Ocultar menu" : "Ver menu"}`}
      >
        {hidden ? <MenuUnfoldIcon width={32} /> : <MenuFoldIcon width={32} /> }
      </button>
    </header>
  );
};
