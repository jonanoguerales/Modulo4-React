import { createContext, FC, PropsWithChildren, useState } from "react";

interface buttonHiddenType {
  hidden: boolean;
  handleHidden: () => void;
}

export const ButtonHiddenContext = createContext<buttonHiddenType>(undefined);

export const ButtonHiddenProvider: FC<PropsWithChildren> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const handleHidden = () => {
    return setHidden((prev) => !prev);
  };

  return (
    <ButtonHiddenContext.Provider value={{ hidden, handleHidden }}>
      {children}
    </ButtonHiddenContext.Provider>
  );
};
