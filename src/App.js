import './App.css';
import Questions from './Components/Questions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ThankYou from './Components/Thankyou';

function App() {
    return (
        <BrowserRouter>
            <div className="App w-[100%] h-screen bg-gray-100">
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="questions" element={<Questions />} />
                    <Route path="thankyou" element={<ThankYou />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
