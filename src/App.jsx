import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
