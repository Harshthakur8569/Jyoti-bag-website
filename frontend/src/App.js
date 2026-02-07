import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import IndiamartButton from './components/IndiamartButton'; // <-- new import
import Home from './pages/Home';
import Products from './pages/Products';
import Customize from './pages/Customize';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  useEffect(() => {
    // Remove Emergent badge if it exists
    const emergentBadge = document.getElementById("emergent-badge");
    if (emergentBadge) {
      emergentBadge.remove();
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <IndiamartButton />  {/* <-- floating IndiaMART button */}
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;