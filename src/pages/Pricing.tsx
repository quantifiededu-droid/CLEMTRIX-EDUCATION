import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-primary mb-6">Invest in Your School's Future.</h1>
          <p className="text-xl text-text/60 mb-12 max-w-2xl mx-auto">Flexible plans for every stage of growth. No hidden per-student fees.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-primary' : 'text-text/40'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-primary/10 rounded-full relative p-1 transition-all"
            >
              <div className={`w-6 h-6 bg-accent rounded-full shadow-lg transition-all ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isAnnual ? 'text-primary' : 'text-text/40'}`}>Annually</span>
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">SAVE 20%</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {[
              { 
                name: 'Starter', 
                price: '0', 
                desc: 'Perfect for small tutors or micro-schools testing digital tools.',
                features: ['Up to 50 Students', 'Live Virtual Classroom (40 min)', 'Digital Gradebook', 'Daily Attendance', 'Email Support']
              },
              { 
                name: 'Growth', 
                price: isAnnual ? '39' : '49', 
                popular: true,
                desc: 'The best value for established primary and secondary schools.',
                features: ['Up to 500 Students', 'Unlimited Virtual Classroom', 'Advanced Analytics Dashboard', 'SMS Parent Alerts', 'Custom Student Portals', 'Priority Support']
              },
              { 
                name: 'Enterprise', 
                price: 'Custom', 
                desc: 'Full-scale solution for universities and multi-campus institutions.',
                features: ['Unlimited Students', 'White-labeled Experience', 'API Access & Webhooks', 'Dedicated Account Manager', 'On-site Staff Training', 'SLA Guarantee']
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl text-left transition-all ${plan.popular ? 'bg-primary text-white scale-105 shadow-2xl relative z-10' : 'bg-light border border-primary/5 hover:border-accent/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  {plan.price !== 'Custom' && <span className="text-sm opacity-60">$</span>}
                  <span className="text-5xl font-display font-extrabold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm opacity-60">/ {isAnnual ? 'yr' : 'mo'}</span>}
                </div>
                <p className={`text-sm mb-10 leading-relaxed ${plan.popular ? 'text-white/70' : 'text-text/60'}`}>{plan.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <div className={`p-0.5 rounded-full ${plan.popular ? 'bg-accent text-white' : 'bg-primary text-white'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.popular ? 'text-white/90' : 'text-primary/80'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/signup" 
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${plan.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-primary text-white hover:bg-primary/90'}`}
                >
                  Start with {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Contact */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4 bg-white p-12 rounded-[2rem] shadow-xl border border-primary/5 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-display font-extrabold text-primary mb-4">Need a tailored solution?</h2>
            <p className="text-text/60 mb-8 leading-relaxed">Our enterprise team handles multi-campus deployments and custom integration needs.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-bold text-primary">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Data Sovereignty & Custom SLA
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full space-y-4">
            <input type="text" placeholder="Institution Name" className="w-full px-4 py-3 bg-light rounded-lg border-none focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Work Email" className="w-full px-4 py-3 bg-light rounded-lg border-none focus:ring-2 focus:ring-accent" />
            <textarea placeholder="Tell us about your needs" className="w-full px-4 py-3 bg-light rounded-lg border-none focus:ring-2 focus:ring-accent h-24"></textarea>
            <button className="btn-primary w-full">Request Custom Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
