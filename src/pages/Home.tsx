import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, BookOpen, Calendar, BarChart3, 
  ShieldCheck, ArrowRight, Play, CheckCircle2,
  ChevronDown, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center bg-[#0A1628] text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[160px] opacity-20"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[140px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[#06B6D4] text-xs font-bold tracking-widest uppercase">
                Institutional Grade Platform
              </div>
              <h1 className="text-6xl lg:text-[100px] leading-[0.9] font-black tracking-tighter">
                THE SMART <br/>WAY <span className="text-[#2563EB]">SCHOOLS</span> <br/>TEACH ONLINE.
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md font-medium">
                The future of classroom management is here. Empower your teachers, engage your students, and track real-time progress with one unified platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/signup" className="btn-primary flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary">
                  <Play className="w-5 h-5 fill-current text-highlight" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-[#14233C] rounded-2xl border border-white/10 shadow-2xl p-6 overflow-hidden relative">
                {/* Dashboard Mockup Preview */}
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">School Overview</div>
                    <div className="text-lg font-bold">St. Andrews Academy</div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-[#14233C] bg-slate-500"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#14233C] bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#14233C] bg-cyan-500"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-[#1E2E4A] rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Active Students</div>
                    <div className="text-2xl font-bold text-white">1,284</div>
                  </div>
                  <div className="p-4 bg-[#1E2E4A] rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Live Lessons</div>
                    <div className="text-2xl font-bold text-[#06B6D4]">42</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Weekly Attendance</div>
                  <div className="flex items-end justify-between h-20 px-2 pt-2">
                    <div className="w-6 bg-[#2563EB] rounded-t-sm h-[60%]"></div>
                    <div className="w-6 bg-[#2563EB] rounded-t-sm h-[85%]"></div>
                    <div className="w-6 bg-[#2563EB] h-[75%] rounded-t-sm"></div>
                    <div className="w-6 bg-[#06B6D4] h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
                    <div className="w-6 bg-[#2563EB] h-[40%] rounded-t-sm opacity-50"></div>
                  </div>
                  <div className="h-[1px] bg-white/10 w-full"></div>
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold">Live: Advanced Physics II</span>
                    </div>
                    <button className="px-3 py-1 bg-[#2563EB] text-[10px] font-bold rounded uppercase">Join Class</button>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-2 -left-2 bg-white text-primary p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-float">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter leading-none">Attendance</div>
                    <div className="text-sm font-black">99.4% Today</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="h-24 bg-[#081120] border-t border-white/5 flex items-center justify-around px-10 relative z-10 transition-colors">
        {[
          { label: 'Schools Joined', value: '500+' },
          { label: 'Active Students', value: '50,000+' },
          { label: 'Lessons Delivered', value: '1.2M' },
          { label: 'User Happiness', value: '98%' },
        ].map((stat, i) => (
          <React.Fragment key={i}>
            <div className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
            </div>
            {i < 3 && <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>}
          </React.Fragment>
        ))}
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Powerful Features</h2>
            <p className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-6">Designed for the Next Generation of Learning</p>
            <p className="text-lg text-text/60">Everything you need to run a world-class school, from live instruction to complex grade analysis.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Live Classes', desc: 'Secure video broadcasting with interactive whiteboard and student hand-raising.', icon: Play },
              { title: 'Assignment Grading', desc: 'Distribute tasks and grade with custom rubrics. Feedback loops built-in.', icon: CheckCircle2 },
              { title: 'Attendance Tracking', desc: 'One-click attendance with automated monthly reports and absence alerts.', icon: Clock },
              { title: 'Student Management', desc: 'Centralized profiles for every student with behavior and academic logs.', icon: Users },
              { title: 'Progress Reports', desc: 'Visual analytics showing student growth trends and predicted outcomes.', icon: BarChart3 },
              { title: 'School Dashboard', desc: 'An eagle-eye view for admins. Manage staff, billing, and system settings.', icon: ShieldCheck },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-primary/5 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all group"
              >
                <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-text/60 leading-relaxed mb-6">{feature.desc}</p>
                <Link to="/features" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-extrabold text-primary mb-4">Start Teaching in Minutes</h2>
            <p className="text-text/60 text-lg">The easiest onboarding flow for educational institutions.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-light -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: '01', title: 'School Signs Up', desc: 'Create your school profile and choose your custom learning URL.' },
                { step: '02', title: 'Add Users', desc: 'Import teachers and students via CSV or invite them via email links.' },
                { step: '03', title: 'Start Classes', desc: 'Students log in, join live sessions, and start their learning journey.' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-accent text-white font-display text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent/20 border-8 border-white">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                  <p className="text-text/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING PREVIEW --- */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/60">Choose the plan that fits your school's size.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: '$0', popular: false, features: ['Up to 50 Students', 'Live Classes (Limited)', 'Gradebook', 'Attendance'] },
              { name: 'Growth', price: '$49', popular: true, features: ['Up to 500 Students', 'Unlimited Classes', 'Advanced Analytics', 'SMS Alerts'] },
              { name: 'Enterprise', price: 'Custom', popular: false, features: ['Unlimited Students', 'Dedicated Support', 'White-labeling', 'API Access'] },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border ${plan.popular ? 'bg-white text-primary border-accent shadow-2xl scale-105 z-10' : 'bg-white/5 text-white border-white/10'}`}
              >
                {plan.popular && <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-4">MOST POPULAR</span>}
                <p className="text-lg font-bold mb-2 uppercase tracking-widest opacity-60">{plan.name}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-display font-extrabold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm opacity-60">/month</span>}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${plan.popular ? 'text-accent' : 'text-highlight'}`} />
                      <span className={plan.popular ? 'text-text/80' : 'text-white/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/signup" 
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-accent text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/pricing" className="text-highlight font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
              See full comparison <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-extrabold text-primary text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is Clemtrix fully secure for student data?", a: "Yes, we are GDPR and COPPA compliant. All data is encrypted at rest and in transit." },
              { q: "Can teachers use their own lesson materials?", a: "Absolutely. Teachers can upload PDFs, videos, and interactive files to any class session." },
              { q: "Do students need special hardware?", a: "No. Clemtrix works in any modern web browser on tablets, laptops, or desktops." },
              { q: "How long does it take to set up a school?", a: "Small schools can be ready in under 30 minutes. Enterprise setups usually take 24-48 hours." }
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl bg-light transition-all cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-primary list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-text/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-accent rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">Ready to Transform Your School?</h2>
            <p className="text-xl text-white/80 mb-12">Join 500+ schools already using Clemtrix to deliver modern education.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your school email" 
                className="w-full sm:w-80 px-6 py-4 bg-white text-primary rounded-xl focus:outline-none focus:ring-4 focus:ring-highlight/50 shadow-inner"
              />
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
