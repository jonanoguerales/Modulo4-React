import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Pedido} from '../pods/pedido';

export const AppRouter = () => {
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Pedido />}></Route>
      </Routes>
    </Router>
    )
}