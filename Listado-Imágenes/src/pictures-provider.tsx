import React, { createContext, FC, PropsWithChildren } from "react";
import { mocksPictureInfo } from "./common/mocks/mock-pictures";

export interface PictureInfo {
  id: number;
  title: string;
  picUrl: string;
  category: string;
  selected: boolean;
}

interface PictureInfoContextType {
  pictures: PictureInfo[];
  selectedPictures: PictureInfo[];
  handlePicture: (id: number) => void;
  removeAllPictures: () => void;
}

export const PicturesContext = createContext<PictureInfoContextType>({
  pictures: [],
  selectedPictures: [],
  handlePicture: () => {},
  removeAllPictures: () => {},
});

export const PicturesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>(mocksPictureInfo);

  const handlePicture = (id: number) => {
    const newPicture = pictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, selected: !picture.selected };
      }
      return picture;
    });
    setPictures(newPicture);
  };

  const removeAllPictures = () => {
    setPictures((prev) => prev.map((p) => ({ ...p, selected: false })));
  };

  const selectedPictures = pictures.filter((picture) => picture.selected);

  return (
    <PicturesContext.Provider
      value={{ pictures, handlePicture, selectedPictures,removeAllPictures }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
