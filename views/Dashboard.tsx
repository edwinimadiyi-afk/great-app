
import React from 'react';
import { View } from '../types';
import StatCard from '../components/StatCard';
import BottomNav from '../components/BottomNav';
import StatusIndicator from '../components/StatusIndicator';

interface DashboardProps {
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 pb-24 fade-in">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="flex items-center p-4 justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr6nNWmvLUZv1tV1f3z8wSJEZqePN8VAo8mynzNEuD9yFxg_-aZsJ8LthDy93hWOskZ6DXtW2xomBTsGHSViidIum2Tf6o_76cJnvqJPqfuabnIgeVFMOC4VtxrN_K5y788256rwW16im51LmPnmU7WSWdVD6JOF8_1fHCLfJ-eZJgUkmONPb0oRAeKqx5QleBw8PK2qSSjOumoGj49a4da_WTi4UbGsdCc44kK567YSU6JMU0LqHHwxFVt4IqSMeJ0g4gcSdNapjh")' }}
              />
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-light dark:border-background-dark"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h2 className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-none">Good Morning,</h2>
                <StatusIndicator showLabel={false} />
              </div>
              <h1 className="text-base font-bold leading-none tracking-tight">Dr. Shepherd</h1>
            </div>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors relative">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6 p-4 w-full">
        {/* Quick Actions */}
        <section className="grid grid-cols-1 gap-3">
          <button 
            onClick={() => onNavigate(View.NEW_CONSULTATION)}
            className="relative overflow-hidden group flex items-center justify-between p-4 h-20 rounded-xl bg-gradient-to-r from-primary to-[#3b9eff] shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3 z-10 text-left">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                <span className="material-symbols-outlined">mic</span>
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-tight">New Consultation</span>
                <span className="block text-blue-100 text-xs font-medium">AI Listening Mode Ready</span>
              </div>
            </div>
            <div className="z-10 bg-white/20 rounded-full p-1">
              <span className="material-symbols-outlined text-white">arrow_forward</span>
            </div>
            <div className="absolute -right-6 -bottom-10 size-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => onNavigate(View.PATIENT_LIST)}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-xl">group</span>
              Patient List
            </button>
            <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
              Schedule
            </button>
          </div>
        </section>

        {/* Overview Stats */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Overview</h3>
            <span className="text-xs text-primary font-medium cursor-pointer">Weekly Report</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 snap-x">
            <StatCard 
              icon="schedule" 
              label="Time Saved" 
              value="2h 15m" 
              trend="+15% vs last week" 
              trendColor="text-green-500" 
              iconBg="bg-green-500/10 text-green-500"
            />
            <StatCard 
              icon="pending_actions" 
              label="Pending Notes" 
              value="3" 
              trend="Needs Review" 
              trendColor="text-orange-500" 
              iconBg="bg-orange-500/10 text-orange-500"
            />
            <StatCard 
              icon="personal_injury" 
              label="Patients Today" 
              value="12" 
              trend="4 Remaining" 
              trendColor="text-gray-500" 
              iconBg="bg-blue-500/10 text-primary"
            />
          </div>
        </section>

        {/* Action Required */}
        <section>
          <div className="flex items-center justify-between px-1 mb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Action Required</h3>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">edit_document</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">James Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Post-Op Checkup • Draft</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate(View.NOTE_EDITOR)}
                className="bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Review
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">sync_problem</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Sarah Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">General Consultation • Ready</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                Sync
              </button>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex items-center justify-between px-1 mb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Recent Activity</h3>
            <button onClick={() => onNavigate(View.PATIENT_LIST)} className="text-primary text-xs font-medium">View All</button>
          </div>
          <div className="flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 overflow-hidden">
            {[
              { name: 'Michael Brown', task: 'Cardiology Follow-up', time: '10:30 AM', initials: 'MB', status: 'Synced', color: 'text-green-500 bg-green-500/10' },
              { name: 'Emily White', task: 'Routine Check', time: '09:45 AM', initials: 'EW', status: 'Processing AI', color: 'text-primary bg-primary/10', processing: true },
              { name: 'Robert Johnson', task: 'Vaccination', time: '09:15 AM', initials: 'RJ', status: 'Synced', color: 'text-green-500 bg-green-500/10' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors last:border-0">
                <div className="relative shrink-0">
                  <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 font-bold text-sm">
                    {item.initials}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-background-light dark:bg-surface-dark rounded-full flex items-center justify-center">
                    {item.processing ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                      </span>
                    ) : (
                      <div className="size-2.5 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{item.name}</p>
                    <span className="text-[10px] text-gray-400 font-medium">{item.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-0.5">
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.task}</p>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${item.color}`}>{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav activeView={View.DASHBOARD} onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
