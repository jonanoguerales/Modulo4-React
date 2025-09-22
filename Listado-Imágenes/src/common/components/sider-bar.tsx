import { useContext } from "react";
import { CartIcon } from "../assets";
import { PicturesContext } from "../../pictures-provider";
import { DeleteIcon } from "../assets";

export const SiderBarLayout = () => {
  const { handlePicture, selectedPictures } = useContext(PicturesContext);
  return (
    <aside style={{ width: "300px", borderLeft: "4px solid black", paddingInline:"1rem", display:"flex", flexDirection:"column", gap:"1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <CartIcon size={32} />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Cart</span>
      </div>
      {selectedPictures.map((kitty) => (
        <div key={kitty.id} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <img src={kitty.picUrl} alt="avatar de cada animal" style={{width:"40px", height: "40px", borderRadius:"50%"}}/>
          <span style={{fontSize:"1.3rem"}}>{kitty.title}</span>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onClick={() => handlePicture(kitty.id)}
          >
            <DeleteIcon width={30} height={30} />
          </button>
        </div>
      ))}
    </aside>
  );
};
