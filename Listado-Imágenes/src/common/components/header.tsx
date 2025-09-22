import { Link } from "react-router-dom";

export const HeaderLayout = () => {
  return (
    <header>
      <nav style={{ display: "flex", gap: "1rem", margin:"2rem" }}>
        <Link to="/">Kitties</Link>
        <Link to="/puppies">Puppies</Link>
      </nav>
    </header>
  );
};
