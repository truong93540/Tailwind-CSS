import Home from "~/pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
