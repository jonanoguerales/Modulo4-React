import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./login";
import { DetailPage } from "./detail";
import { ListPage } from "./list";
import { SearchProvider } from "./search-context";
import { ListRickAndMorty } from "./list-rickandmorty";
import { DetailCharacter } from "./detail-character";
import { CharacterProvider } from "./search-context-character";

export const App = () => {
  return (
    <SearchProvider>
      <CharacterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/list-rickandmorty" element={<ListRickAndMorty />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/detail-character/:id" element={<DetailCharacter />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CharacterProvider>
    </SearchProvider>
  );
};
