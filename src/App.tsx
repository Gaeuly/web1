import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarfieldBackground from './components/StarfieldBackground';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Shards from './pages/Shards';
import Support from './pages/Support';
import Contact from './pages/Contact';
import InviteBot from './pages/InviteBot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-dark-primary dark:bg-dark-primary text-white relative overflow-x-hidden">
          <StarfieldBackground />
          <CursorGlow />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/shards" element={<Shards />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/invite" element={<InviteBot />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;