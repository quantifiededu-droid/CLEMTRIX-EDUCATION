import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, FileText, ClipboardCheck, GraduationCap, 
  Settings, ShieldCheck, CheckCircle2, Layout,
  ArrowRight, Users, Clock, BookOpen
} from 'lucide-react';

const Features = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary pt-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8"
          >
            A Feature-Rich Digital <br />
            <span className="gradient-text">Learning Campus.</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Everything your school needs to excel in the digital age. Built for speed, security, and simplicity.
          </p>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {[
            {
              title: "Live Virtual Classroom",
              desc: "Experience zero-lag video instruction with integrated whiteboard technology. Teachers can toggle student audio, share screens with precision, and use hand-raising queues for orderly debate.",
              bullets: ["HD Video Streaming", "Interactive Whiteboard", "Hand-Raise Queue", "Session Recording"],
              img: "https://images.unsplash.com/photo-1588674593136-a3163cf9922e?auto=format&fit=crop&w=800",
              icon: Video,
              reverse: false
            },
            {
              title: "Advanced Assignment Manager",
              desc: "Deploy academic tasks at scale. Our rubrics engine allows for granular grading, while student submissions are automatically time-stamped and organized by class and subject.",
              bullets: ["Custom Grading Rubrics", "Automated Deadline Alerts", "File Upload System", "Plagiarism Checks"],
              img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800",
              icon: FileText,
              reverse: true
            },
            {
              title: "Automated Attendance Engine",
              desc: "Stop wasting time with paper rolls. Attendance is taken with one click during live sessions. System generates weekly/monthly exports and alerts parents for chronic absenteeism.",
              bullets: ["One-Click Marking", "Absence SMS Alerts", "Detailed Trend Reports", "Parent Integration"],
              img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800",
              icon: ClipboardCheck,
              reverse: false
            },
            {
              title: "Student Growth Portal",
              desc: "Every student receives a personalized dashboard showing their class schedule, upcoming assignments, and performance trends. Empower students to take ownership of their education.",
              bullets: ["Personalized Schedule", "Grade History", "Peer Interaction Tabs", "Goal Setting Modules"],
              img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800",
              icon: GraduationCap,
              reverse: true
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-display font-extrabold text-primary">{feature.title}</h2>
                <p className="text-lg text-text/60 leading-relaxed">{feature.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {feature.bullets.map((bullet, j) => (
                    <div key={j} className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 scale-[1.02] group-hover:rotate-1 transition-transform"></div>
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-video"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-display font-extrabold text-primary text-center mb-16">Compare Clemtrix</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/5">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 text-lg">Feature</th>
                  <th className="p-6 text-lg">Clemtrix</th>
                  <th className="p-6 text-lg">Legacy LMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {[
                  { f: 'Live Video latency', c: 'Under 100ms', o: '500-1500ms' },
                  { f: 'User Onboarding', c: 'Instant (CSV)', o: 'Manual Entry' },
                  { f: 'Analytics', c: 'Real-time AI', o: 'Static Exports' },
                  { f: 'Accessibility', c: '100% Mobile Ready', o: 'Limited Mobile' },
                  { f: 'Pricing', c: 'Per School Flat', o: 'Per Student (Hidden Fees)' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-light transition-colors">
                    <td className="p-6 font-bold text-primary">{row.f}</td>
                    <td className="p-6 text-accent font-bold">{row.c}</td>
                    <td className="p-6 text-text/40">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
