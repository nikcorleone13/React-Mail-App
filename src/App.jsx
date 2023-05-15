import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { MainNav } from "./components/MainNav";
import { Home } from "./pages/Home";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { MailPage } from "./pages/MailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/mail/:mailId" element={<MailPage />} />
      </Routes>
    </>
  );
}

export default App;
