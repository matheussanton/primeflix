import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favorites from "./pages/Favorites";

import Erro from "./pages/Error";

import Header from "./components/Header";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/filme/:id" element={<Filme />}></Route>
                <Route path="/favorites" element={<Favorites />}></Route>

                <Route path="*" element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
