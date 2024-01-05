import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import VisitDetailsPage from "./pages/VisitDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/visits/:visitId" element={<VisitDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
