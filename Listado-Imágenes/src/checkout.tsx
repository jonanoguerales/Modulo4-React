import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PicturesContext } from "./pictures-provider";

export const Checkout = () => {
  const { selectedPictures, removeAllPictures } = useContext(PicturesContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Pedido realizado con éxito");
    removeAllPictures();
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Checkout</h2>
      <ul>
        {selectedPictures.map((pic) => (
          <li
            key={pic.id}
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            <img src={pic.picUrl} alt={pic.title} width={50} />
            <span>{pic.title}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Finalizar compra
      </button>
    </div>
  );
};
