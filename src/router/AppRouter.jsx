import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AddGame from "../pages/AddGame";
import Deseados from "../pages/Deseados";


function AppRouter (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-game" element={<AddGame />} />
                <Route path="/deseados" element={<Deseados />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;