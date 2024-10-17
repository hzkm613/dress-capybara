import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import DressRoomPage from "./pages/DressRoomPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/dressroom" element={<DressRoomPage />} />
    </Routes>
  );
}

export default App;
