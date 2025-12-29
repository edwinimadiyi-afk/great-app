
import React from 'react';

interface PlanSuccessProps {
  onBackToDashboard: () => void;
  onManage: () => void;
}

const PlanSuccess: React.FC<PlanSuccessProps> = ({ onBackToDashboard, onManage }) => {
  return (
    <div className="w-full max-w-md min-h-screen flex flex-col relative overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-200 items-center justify-center fade-in">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] h-[400px] bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="flex-1 flex flex-col items-center px-6 py-8 w-full relative z-10">
        <div className="h-8"></div>
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-125"></div>
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center relative shadow-xl shadow-primary/30 ring-4 ring-white dark:ring-surface-dark">
            <span className="material-symbols-outlined text-white text-[40px]">check</span>
          </div>
        </div>
        
        <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight text-center mb-3">Plan Updated</h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed text-center max-w-[300px] mb-10">
          You're all set, Dr. Shepherd! Your subscription has been switched to the <span className="text-primary font-semibold">Enterprise Tier</span>.
        </p>

        <div className="w-full bg-white dark:bg-[#192633] border border-slate-200 dark:border-slate-800 rounded-2xl p-0 shadow-lg mb-6 overflow-hidden relative">
          <div className="p-6 pb-5 flex justify-between items-start border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Current Plan</span>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold">Enterprise Tier</h2>
            </div>
            <div className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Active</div>
          </div>
          <div className="p-6 pt-5 bg-slate-50/50 dark:bg-black/20 flex flex-col gap-4">
            <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
              <span className="text-4xl font-extrabold tracking-tight">$99.99</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">/ month</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-background-dark border border-slate-100 dark:border-slate-800 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[18px]">auto_awesome</span></div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">New Feature</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Unlimited AI Scribing Unlocked</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1"></div>
        <div className="w-full flex flex-col gap-3 mt-6">
          <button onClick={onBackToDashboard} className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg shadow-primary/20">Return to Dashboard</button>
          <button onClick={onManage} className="w-full bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-semibold text-base py-4 px-6 rounded-xl">Manage Subscription</button>
        </div>
      </div>
    </div>
  );
};

export default PlanSuccess;
