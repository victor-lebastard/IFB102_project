import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./pages/App"
import Forecast from "./pages/Forecast"
import Weather from "./pages/Weather";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Forecast" element={<Forecast/>}/>
        <Route path="/Weather" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
 
);
