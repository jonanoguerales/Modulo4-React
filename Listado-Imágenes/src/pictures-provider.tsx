import React,{ createContext, FC, PropsWithChildren } from "react";
import { cat1, cat2, cat3, cat4, dog1, dog2, dog3, dog4 } from "./common/assets";

interface PictureInfo {
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
}

const mocksPictureInfo: PictureInfo[] = [
  {
    id: 1,
    title: "Cool cat A",
    category: "kitty",
    picUrl: cat1,
    selected: false,
  },
  {
    id: 2,
    title: "Cool cat B",
    category: "kitty",
    picUrl: cat2,
    selected: false,
  },
  {
    id: 3,
    title: "Cool cat C",
    category: "kitty",
    picUrl: cat3,
    selected: false,
  },
  {
    id: 4,
    title: "Cool cat D",
    category: "kitty",
    picUrl: cat4,
    selected: false,
  },
  {
    id: 5,
    title: "Cool dog A",
    category: "Puppies",
    picUrl: dog1,
    selected: false,
  },
  {
    id: 6,
    title: "Cool dog B",
    category: "Puppies",
    picUrl: dog2,
    selected: false,
  },
  {
    id: 7,
    title: "Cool dog C",
    category: "Puppies",
    picUrl: dog3,
    selected: false,
  },
  {
    id: 8,
    title: "Cool dog D",
    category: "Puppies",
    picUrl: dog4,
    selected: false,
  },

];

export const PicturesContext = createContext<PictureInfoContextType>({
  pictures: [],
  selectedPictures: [],
  handlePicture: () => {},
});

export const PicturesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [pictures, setBuyKitty] = React.useState<PictureInfo[]>(mocksPictureInfo);

  const handlePicture = (id: number) => {
    const newPicture = pictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, selected: !picture.selected };
      }
      return picture;
    });
    setBuyKitty(newPicture);
  };

  const selectedPictures = pictures.filter((picture) => picture.selected);

  return (
    <PicturesContext.Provider
      value={{ pictures, handlePicture, selectedPictures }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
