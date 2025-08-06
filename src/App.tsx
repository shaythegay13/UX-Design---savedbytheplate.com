import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { LocalFoodFinder } from './pages/LocalFoodFinder';
import { Education } from './pages/Education';
import { Marketplace } from './pages/Marketplace';
import { GardenPlanner } from './pages/GardenPlanner';
import { Community } from './pages/Community';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-stone-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/local-food-finder" element={<LocalFoodFinder />} />
            <Route path="/education" element={<Education />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/garden-planner" element={<GardenPlanner />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}