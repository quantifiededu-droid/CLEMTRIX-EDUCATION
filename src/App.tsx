import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, BookOpen, Users, LayoutDashboard, Calendar, 
  CheckCircle2, Play, ChevronRight, Twitter, Linkedin, 
  Youtube, Facebook, ShieldCheck, Globe, Zap, ArrowRight,
  LogOut, Settings, Bell, Search, Plus, GraduationCap,
  MessageSquare, BarChart3, Clock, MoreHorizontal
} from 'lucide-react';

// --- Components ---

import { Logo } from './components/Branding';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (isDashboard) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1628]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/">
            <Logo className="invert brightness-0" />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link to="/features" className="text-sm font-bold text-white/70 hover:text-highlight transition-colors uppercase tracking-wider">Features</Link>
            <Link to="/pricing" className="text-sm font-bold text-white/70 hover:text-highlight transition-colors uppercase tracking-wider">Pricing</Link>
            <Link to="/about" className="text-sm font-bold text-white/70 hover:text-highlight transition-colors uppercase tracking-wider">About</Link>
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="px-5 py-2 font-black text-white hover:text-highlight">Login</Link>
              <Link to="/signup" className="px-6 py-2.5 bg-white text-primary rounded-full text-sm font-black hover:bg-light transition-all">Start Free Trial</Link>
            </div>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary/5"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link to="/features" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Features</Link>
              <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Pricing</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">About</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">Get Started Free</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/dashboard')) return null;

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="invert brightness-0" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering schools with futuristic tools to manage students, deliver live knowledge, and track academic excellence globally.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-white/40 hover:text-highlight cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/40 hover:text-highlight cursor-pointer" />
              <Youtube className="w-5 h-5 text-white/40 hover:text-highlight cursor-pointer" />
              <Facebook className="w-5 h-5 text-white/40 hover:text-highlight cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Admin Dashboard</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Learning Hub</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-6">Trust & Reliability</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <ShieldCheck className="w-4 h-4 text-highlight" />
                <span>SSL Secured & Encrypted</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <Globe className="w-4 h-4 text-highlight" />
                <span>GDPR Compliant Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <Zap className="w-4 h-4 text-highlight" />
                <span>99.9% Platform Uptime</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2024 Clemtrix Education. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---
// These will be defined in another file for cleanliness if they get too big, 
// but for this MVP I'll define them below and then move them if needed.

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
