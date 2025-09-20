import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

export interface CharacterType {
  id: number;
  name: string;
  status?: string;
  species?: string;
  gender?: string;
  image?:string;
}

interface CharacterTypeContext {
  character: CharacterType[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const CharacterContext = createContext<CharacterTypeContext>({
  character: [],
  search: "",
  setSearch: () => {},
});

export const CharacterProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [character, setCharacter] = useState<CharacterType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500)

 useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
    .then(async (res) => {
      const data = await res.json();

      if (!res.ok || data.error) {
        setCharacter([]);
        return;
      }

      setCharacter(data.results);
    })
    .catch((err) => {
      console.error("Error en fetch:", err);
      setCharacter([]);
    });
}, [value]);

  return (
    <CharacterContext.Provider value={{ character, search, setSearch }}>
      {children}
    </CharacterContext.Provider>
  );
};
