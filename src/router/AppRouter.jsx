import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AddGame from "../pages/AddGame";


function AppRouter (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-game" element={<AddGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;