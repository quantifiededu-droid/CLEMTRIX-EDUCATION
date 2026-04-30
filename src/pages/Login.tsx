import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, ChevronLeft, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent opacity-10 blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight opacity-10 blur-[120px] translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-md w-full relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary font-bold mb-8 transition-colors group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 border border-primary/5">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl font-display font-extrabold text-primary mb-2">Welcome Back</h1>
            <p className="text-text/60">Log in to your school portal</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                <input 
                  type="email" 
                  placeholder="admin@school.com" 
                  className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-primary">Password</label>
                <Link to="#" className="text-xs font-bold text-accent hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" 
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-accent" />
              <label htmlFor="remember" className="text-sm text-text/60 select-none">Remember me for 30 days</label>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
              Sign In
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-primary/5 text-center">
            <p className="text-sm text-text/60">
              Don't have an account? <Link to="/signup" className="text-accent font-bold hover:underline">Register your school</Link>
            </p>
          </div>
        </div>

        {/* Social Login UI Only */}
        <div className="mt-6 flex items-center justify-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/5">
          <span className="text-xs font-bold text-primary opacity-40 uppercase tracking-widest">Or continue with</span>
          <button className="p-2 hover:bg-white rounded-lg transition-colors flex items-center gap-2 font-bold text-sm text-primary/60">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5 grayscale opacity-50" />
            Google Workspace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
