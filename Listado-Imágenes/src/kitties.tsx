import React, { useContext } from "react";
import { PicturesContext } from "./pictures-provider";

export const Kitties: React.FC = () => {
  const {pictures,handlePicture,} = useContext(PicturesContext)
  
  const onlyKitties = pictures.filter((picture) => picture.category === "kitty");

  return (
    <>
      {onlyKitties.map((kitty) => (
        <article key={kitty.id}>
          <img src={kitty.picUrl} alt="Imagen de gato" />
          <div>
            <label>{kitty.title}</label>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
            >
              <input
                type="checkbox"
                checked={kitty.selected}
                onChange={() => handlePicture(kitty.id)}
                style={{ margin: "0" }}
              />
              <span>Buy</span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
