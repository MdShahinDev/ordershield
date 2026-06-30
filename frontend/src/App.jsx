import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Features from './components/Features';
import Timeline from './components/Timeline';
import AdminControls from './components/AdminControls';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DocsHub from './components/DocsHub';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const [activeView, setActiveView] = useState('product');
  return (
  <div
    className="min-h-screen bg-[#070B14] text-paragraph selection:bg-accent-primary/30 selection:text-white font-sans antialiased relative overflow-x-hidden"
    style={{ background: 'radial-gradient(circle at 70% 30%, #0F1725 0%, #070B14 100%)' }}
  >
    <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-accent-primary/[0.03] via-transparent to-transparent pointer-events-none" />

    <Navbar />

    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          <>
            <main>
              <Hero />
              <TrustStats />
              <Features />
              <Timeline />
              <AdminControls />
              <Comparison />
              <FAQ />
              <Contact />
              <FinalCTA />
            </main>

            <Footer />
          </>
        }
      />

      {/* Docs */}
      <Route
        path="/docs"
        element={
          <>
            <DocsHub />
            <Footer />
          </>
        }
      />

    </Routes>
  </div>
);
}

export default App
