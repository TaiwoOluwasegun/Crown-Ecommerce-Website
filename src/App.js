import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import ShopPage from "./pages/shop/shop.component";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes> 
    </div>
  );
}

export default App;
