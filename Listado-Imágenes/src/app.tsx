import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SceneListKitties } from "./scenes/list-kitties.scene";
import { SceneListPuppies } from "./scenes/list-puppies.scene";
import { PicturesProvider } from "./pictures-provider";
import { ButtonHiddenProvider } from "./button-hidden-provider";
import { Checkout } from "./checkout";
export const App = () => {
  return (
    <>
      <ButtonHiddenProvider>
        <PicturesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SceneListKitties />} />
              <Route path="/puppies" element={<SceneListPuppies />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </PicturesProvider>
      </ButtonHiddenProvider>
    </>
  );
};
