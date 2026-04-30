import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Mission */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8">Redefining Education for the <span className="gradient-text">21st Century.</span></h1>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Our mission is to democratize high-quality schooling tools, ensuring every institution can provide a world-class digital experience to their students, regardless of location or size.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Founded</p>
                <p className="text-3xl font-display font-extrabold">2020</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Campus Served</p>
                <p className="text-3xl font-display font-extrabold">500+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-extrabold text-primary text-center mb-20">Our core values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', desc: 'Pushing the boundaries of what virtual classrooms can achieve.', icon: Sparkles },
              { title: 'Accessibility', desc: 'Ensuring learning tools work on every device, everywhere.', icon: Target },
              { title: 'Excellence', desc: 'Crafting every button and feature with academic precision.', icon: Shield },
              { title: 'Community', desc: 'Building bridges between teachers, students, and parents.', icon: Heart },
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-light hover:bg-white hover:shadow-xl hover:scale-105 transition-all text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 shadow-sm">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-sm text-text/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-display font-extrabold text-primary text-center mb-20">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: '2020', title: 'The Genesis', desc: 'Clemtrix was founded in response to the global shift towards remote learning.' },
              { year: '2022', title: 'The Expansion', desc: 'Reached 100+ schools and launched our proprietary Live Classroom engine.' },
              { year: '2023', title: 'AI Integration', desc: 'Introduced predictive grade analytics and automated attendance tracking.' },
              { year: '2024', title: 'Global Reach', desc: 'Now serving institutions across 35 countries with 99.9% uptime.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-primary text-white font-display font-extrabold rounded-2xl group-hover:bg-accent transition-colors">
                    {item.year}
                  </div>
                  <div className="flex-grow w-1 bg-primary/10 mt-4 rounded-full"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-text/60 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholders) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-extrabold text-primary text-center mb-20">Driven by Educators & Engineers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Clement', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'James Trixon', role: 'CTO', img: 'https://i.pravatar.cc/150?u=james' },
              { name: 'Elena Vance', role: 'Head of Learning Design', img: 'https://i.pravatar.cc/150?u=elena' },
              { name: 'Marcus Chen', role: 'Operations Lead', img: 'https://i.pravatar.cc/150?u=marcus' },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-light rounded-full mx-auto mb-6 overflow-hidden border-4 border-transparent group-hover:border-accent transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                <p className="text-sm text-text/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
