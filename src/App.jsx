import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Audit from './pages/Audit.jsx';
import Services from './pages/Services.jsx';
import Fundraising from './pages/Fundraising.jsx';
import GrowthSystem from './pages/GrowthSystem.jsx';
import Resources from './pages/Resources.jsx';
import Examples from './pages/Examples.jsx';
import About from './pages/About.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-soft text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-readiness-audit" element={<Audit />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fundraising-accelerator" element={<Fundraising />} />
          <Route path="/ngo-growth-system" element={<GrowthSystem />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/example-ngo-work" element={<Examples />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
