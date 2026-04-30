import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, GraduationCap, Building2, Users, MapPin, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = React.useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);
  const handleFinal = () => {
    setStep(4);
    setTimeout(() => navigate('/dashboard'), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light pt-20 pb-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-primary/5">
        
        {/* Progress Bar */}
        {step < 4 && (
          <div className="bg-primary p-4 h-2">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        <div className="p-10 md:p-16">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h1 className="text-3xl font-display font-extrabold text-primary mb-2">School Profile</h1>
                  <p className="text-text/60">Tell us about your educational institution.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-primary mb-2 block">School Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                      <input type="text" placeholder="e.g. Clemtrix Academy" className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Country</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                        <select className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none appearance-none font-medium">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">School Type</label>
                      <select className="w-full px-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none appearance-none font-medium">
                        <option>Secondary School</option>
                        <option>Primary School</option>
                        <option>University</option>
                        <option>Language Center</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-primary mb-2 block">Expected Students</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                      <select className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none appearance-none font-medium">
                        <option>Under 100</option>
                        <option>100 - 500</option>
                        <option>500 - 1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button onClick={handleNext} className="btn-primary w-full py-4 text-lg">
                  Next Step
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h1 className="text-3xl font-display font-extrabold text-primary mb-2">Admin Account</h1>
                  <p className="text-text/60">This will be the master account for your school.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-primary mb-2 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-primary mb-2 block">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                      <input type="email" placeholder="admin@school.com" className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/30" />
                        <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Confirm Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-4 bg-light rounded-xl focus:ring-2 focus:ring-accent outline-none font-medium" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="px-6 py-4 bg-light text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">Back</button>
                  <button onClick={handleNext} className="btn-primary flex-grow py-4 text-lg">Continue to Plans</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h1 className="text-3xl font-display font-extrabold text-primary mb-2">Choose Your Plan</h1>
                  <p className="text-text/60">Select a tier to begin your setup.</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Starter', price: '$0', desc: 'Up to 50 students' },
                    { name: 'Growth', price: '$49/mo', desc: 'Up to 500 students', check: true },
                    { name: 'Enterprise', price: 'Custom', desc: 'Unlimited scale' }
                  ].map((p, i) => (
                    <div 
                      key={i} 
                      className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center ${p.check ? 'border-accent bg-accent/5' : 'border-primary/10 hover:border-accent/50'}`}
                    >
                      <div>
                        <p className="font-bold text-primary">{p.name}</p>
                        <p className="text-sm text-text/60">{p.desc}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-display font-extrabold text-primary">{p.price}</p>
                        {p.check && <CheckCircle2 className="w-5 h-5 text-accent ml-auto mt-2" />}
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={handleFinal} className="btn-primary w-full py-5 text-xl">
                  Create My School Account
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-10"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-16 h-16 text-green-600 animate-pulse" />
                </div>
                <h1 className="text-4xl font-display font-extrabold text-primary">🎉 Welcome to Clemtrix!</h1>
                <p className="text-xl text-text/60 max-w-sm mx-auto">Your school account is being set up. You will be redirected to your dashboard shortly.</p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.1s]"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.3s]"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Signup;
