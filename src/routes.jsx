import Cabeza from "../src/Components/Header/Cabeza";
import Pie from "../src/Components/Footer/Pie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabeza></Cabeza>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
      <Pie></Pie>
    </BrowserRouter>
  );
}

export default AppRoutes;
