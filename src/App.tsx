import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Docs from './pages/Docs';
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
