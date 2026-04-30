import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, Users, BookOpen, Calendar, 
  Settings, LogOut, Bell, Search, Plus,
  GraduationCap, MessageSquare, Clock, 
  MoreHorizontal, CheckCircle2, X, ChevronRight,
  Filter, Download, Menu
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Branding';

// --- Types & Data ---

const ATTENDANCE_DATA = [
  { name: 'Mon', value: 92 },
  { name: 'Tue', value: 95 },
  { name: 'Wed', value: 88 },
  { name: 'Thu', value: 94 },
  { name: 'Fri', value: 90 },
];

const RECENT_ASSIGNMENTS = [
  { subject: 'Advanced Physics', teacher: 'Dr. Sarah', due: '24 May', subs: '42/45', status: 'Graded' },
  { subject: 'World History', teacher: 'Prof. James', due: '26 May', subs: '38/45', status: 'Pending' },
  { subject: 'Mathematics III', teacher: 'Ms. Elena', due: '28 May', subs: '12/45', status: 'In Progress' },
  { subject: 'English Lit', teacher: 'Mr. Marcus', due: '30 May', subs: '0/45', status: 'Upcoming' },
];

// --- Sub-components ---

const DashboardHome = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Total Students', value: '1,284', grow: '+12%', icon: Users, color: 'text-accent' },
        { label: 'Active Classes', value: '42', grow: 'Stable', icon: BookOpen, color: 'text-green-600' },
        { label: 'Assignments Due', value: '18', grow: '+5 today', icon: Clock, color: 'text-orange-500' },
        { label: 'Avg. Grade', value: '84.2%', grow: '+2.4%', icon: BarChart3, color: 'text-highlight' },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 bg-light rounded-xl ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold px-2 py-1 bg-green-50 text-green-700 rounded-lg">{stat.grow}</span>
          </div>
          <p className="text-2xl font-display font-extrabold text-primary">{stat.value}</p>
          <p className="text-sm text-text/40 font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-display font-bold text-lg text-primary">Attendance Overview</h3>
          <select className="text-xs font-bold bg-light border-none rounded-lg px-3 py-2 outline-none">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
        <div className="h-64 aspect-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ATTENDANCE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
              <Tooltip 
                cursor={{fill: '#F1F5F9'}} 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '12px'}}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {ATTENDANCE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 1 ? '#2563EB' : '#06B6D4'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display font-bold text-lg text-primary">Live Classes</h3>
          <Link to="/dashboard/classes" className="text-xs font-bold text-accent">View All</Link>
        </div>
        <div className="space-y-4">
          {[
            { subject: 'Physics 101', teacher: 'Dr. Sarah', time: '10:00 AM', active: true },
            { subject: 'Math Advanced', teacher: 'Ms. Elena', time: '11:30 AM', active: false },
            { subject: 'Literature', teacher: 'Mr. Marcus', time: '01:00 PM', active: false },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border transition-all ${item.active ? 'bg-accent/5 border-accent' : 'bg-light border-transparent hover:border-primary/10'}`}>
              <div className="flex justify-between items-center mb-3">
                <p className="font-bold text-primary">{item.subject}</p>
                {item.active && <span className="flex items-center gap-1 text-[10px] font-bold text-accent"><div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> LIVE</span>}
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs text-text/40 font-medium">
                  <p>{item.teacher}</p>
                  <p className="flex items-center gap-1 mt-1"><Clock className="w-3 h-3" /> {item.time}</p>
                </div>
                {item.active && <button className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg shadow-lg shadow-accent/20">Join Session</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display font-bold text-lg text-primary">Recent Assignments</h3>
        <button className="p-2 hover:bg-light rounded-lg transition-colors"><MoreHorizontal className="w-5 h-5 text-text/30" /></button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-primary/5 text-xs font-bold text-text/30 uppercase tracking-widest">
              <th className="pb-4 px-4">Subject</th>
              <th className="pb-4 px-4">Teacher</th>
              <th className="pb-4 px-4">Due Date</th>
              <th className="pb-4 px-4">Submissions</th>
              <th className="pb-4 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {RECENT_ASSIGNMENTS.map((row, i) => (
              <tr key={i} className="group hover:bg-light transition-colors">
                <td className="py-4 px-4 font-bold text-primary">{row.subject}</td>
                <td className="py-4 px-4 text-sm text-text/60">{row.teacher}</td>
                <td className="py-4 px-4 text-sm text-text/60">{row.due}</td>
                <td className="py-4 px-4 text-sm font-bold text-primary">{row.subs}</td>
                <td className="py-4 px-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                    row.status === 'Graded' ? 'bg-green-50 text-green-700' : 
                    row.status === 'Pending' ? 'bg-orange-50 text-orange-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AttendancePanel = () => {
  const [showModal, setShowModal] = React.useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-extrabold text-primary">Attendance Registry</h2>
        <div className="flex gap-2">
          <button className="btn-secondary py-2 px-4 text-sm"><Download className="w-4 h-4" /> Export Report</button>
          <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2"><Plus className="w-4 h-4" /> New Record</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {['Mon 24', 'Tue 25', 'Wed 26', 'Thu 27', 'Fri 28', 'Sat 29', 'Sun 30'].map((day, i) => (
          <div key={i} className="text-center p-4 bg-white border border-primary/5 rounded-2xl">
            <p className="text-xs font-bold text-text/30 mb-4">{day}</p>
            <div className="space-y-2">
              <div className="p-2 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-[10px] font-bold text-accent">Physics</p>
                <button onClick={() => setShowModal(true)} className="text-[10px] font-bold mt-1 text-primary hover:underline">Mark</button>
              </div>
              <div className="p-2 bg-highlight/5 border border-highlight/20 rounded-xl">
                <p className="text-[10px] font-bold text-highlight">Math</p>
                <button onClick={() => setShowModal(true)} className="text-[10px] font-bold mt-1 text-primary hover:underline">Mark</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
            <motion.div 
              initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.9, opacity: 0}}
              className="bg-white rounded-[2.5rem] w-full max-w-xl relative z-10 overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-primary/5 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-extrabold text-xl">Mark Attendance</h3>
                  <p className="text-xs text-text/40 font-medium">Physics 101 • Dr. Sarah • 24 May 2024</p>
                </div>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-light rounded-full transition-colors"><X/></button>
              </div>
              <div className="p-8 max-h-[400px] overflow-y-auto space-y-4">
                {[
                  'Alex Johnson', 'Beatriz Silva', 'Charlie Davis', 'Dianne Russell', 'Ethan Hunt',
                  'Fiona Gallagher', 'George Miller', 'Hannah Baker'
                ].map((name, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-light rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent">{name[0]}</div>
                      <p className="font-bold text-primary">{name}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-100 text-green-700 text-xs font-bold rounded-xl border border-green-200">Present</button>
                      <button className="px-4 py-2 bg-white text-text/40 text-xs font-bold rounded-xl border border-primary/5 hover:bg-red-50 hover:text-red-600 hover:border-red-200">Absent</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-light flex gap-4">
                <button onClick={() => setShowModal(false)} className="btn-primary w-full py-4">Save Registry</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

const GradesPanel = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-display font-extrabold text-primary">Academic Gradebook</h2>
      <div className="flex gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/30" />
          <input type="text" placeholder="Search student..." className="pl-9 pr-4 py-2 bg-white border border-primary/5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <button className="p-2 bg-white border border-primary/5 rounded-xl hover:bg-light transition-colors"><Filter className="w-5 h-5 text-text/60" /></button>
      </div>
    </div>

    <div className="bg-white rounded-3xl border border-primary/5 shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-primary/5 text-xs font-bold text-text/30 uppercase tracking-widest bg-light/50">
            <th className="p-6">Student Name</th>
            <th className="p-6">Physics</th>
            <th className="p-6">History</th>
            <th className="p-6">Math III</th>
            <th className="p-6">Lit</th>
            <th className="p-6">Average</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/5">
          {[
            { name: 'Alex Johnson', p: 88, h: 92, m: 76, l: 94 },
            { name: 'Beatriz Silva', p: 95, h: 88, m: 92, l: 86 },
            { name: 'Charlie Davis', p: 72, h: 68, m: 54, l: 78 },
            { name: 'Dianne Russell', p: 84, h: 86, m: 88, l: 90 },
            { name: 'Ethan Hunt', p: 91, h: 94, m: 96, l: 88 },
          ].map((student, i) => {
            const avg = (student.p + student.h + student.m + student.l) / 4;
            return (
              <tr key={i} className="hover:bg-light transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">{student.name[0]}</div>
                    <span className="font-bold text-primary">{student.name}</span>
                  </div>
                </td>
                {[student.p, student.h, student.m, student.l].map((score, j) => (
                  <td key={j} className="p-6">
                    <span className={`font-mono font-bold ${score < 60 ? 'text-red-500' : 'text-primary'}`}>{score}%</span>
                  </td>
                ))}
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="flex-grow w-16 h-1.5 bg-light rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{width: `${avg}%`}}></div>
                    </div>
                    <span className="font-extrabold text-accent">{avg}%</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main Layout ---

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'assignments', label: 'Assignments', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'grades', label: 'Grades', icon: GraduationCap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <aside className={`bg-primary text-white transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-20 flex items-center px-6 border-b border-white/5 overflow-hidden whitespace-nowrap">
          <Logo className={`invert brightness-0 ${!isSidebarOpen && 'scale-[0.6] -translate-x-4'}`} />
        </div>

        <nav className="flex-grow py-8 px-4 space-y-2">
          {menu.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span className="font-semibold text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link to="/" className="w-full flex items-center gap-4 p-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="font-semibold text-sm">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-x-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-primary/5 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-light rounded-lg transition-colors md:hidden">
              <Menu className="text-primary" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-text/40">
              <span>Clemtrix Academy</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/30" />
              <input type="text" placeholder="Quick search..." className="pl-9 pr-4 py-2 bg-light border-none rounded-xl text-xs outline-none focus:ring-2 focus:ring-accent w-64" />
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-text/60 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-primary/5">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-primary">Dr. Sarah Clement</p>
                <p className="text-[10px] font-bold text-text/30 uppercase tracking-widest">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-light rounded-xl overflow-hidden border border-primary/5">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Area */}
        <div className="p-8 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <DashboardHome />}
              {activeTab === 'attendance' && <AttendancePanel />}
              {activeTab === 'grades' && <GradesPanel />}
              {['classes', 'students', 'assignments', 'settings'].includes(activeTab) && (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-6">
                  <div className="w-24 h-24 bg-accent/5 rounded-full flex items-center justify-center">
                    <Construction className="w-12 h-12 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-extrabold text-primary">Component Under Development</h2>
                    <p className="text-text/60 max-w-xs mx-auto">We're finalizing the {activeTab} module to ensure the best academic experience.</p>
                  </div>
                  <button onClick={() => setActiveTab('dashboard')} className="btn-secondary">Return to Overview</button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// Simple Fallback Icon
const Construction = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export default Dashboard;
