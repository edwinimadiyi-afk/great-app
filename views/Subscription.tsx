
import React from 'react';

interface SubscriptionProps {
  onBack: () => void;
  onUpgrade: () => void;
}

const Subscription: React.FC<SubscriptionProps> = ({ onBack, onUpgrade }) => {
  return (
    <div className="flex flex-col flex-1 pb-10 fade-in">
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0 border-b border-slate-200 dark:border-border-dark">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Subscription</h1>
      </header>

      <main className="flex-1 px-6 pt-4">
        <div className="w-full rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-6 shadow-lg shadow-primary/20 text-white relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Current Plan</p>
                <h2 className="text-2xl font-bold">Provider Pro</h2>
              </div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide border border-white/10">ACTIVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-blue-100 text-sm">/ month</span>
              </div>
              <p className="text-xs text-blue-200">Next billing on Nov 24, 2023</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider opacity-80">Plan Tiers</h3>
          <div className="flex flex-col gap-3">
            <label className="relative flex items-center p-4 rounded-xl border-2 border-primary bg-white dark:bg-surface-dark cursor-pointer transition-all">
              <input checked readOnly className="w-5 h-5 text-primary border-slate-300 focus:ring-primary bg-transparent" type="radio"/>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 dark:text-white">Per-Provider Monthly</span>
                  <span className="text-primary font-bold">$49/mo</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full AI Documentation Suite</p>
              </div>
            </label>
            <label className="relative flex items-center p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer transition-all">
              <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary bg-transparent" type="radio"/>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 dark:text-white">Enterprise Usage-Based</span>
                  <span className="text-slate-500 text-sm font-bold">Custom</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Volume discounts for clinics</p>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-8 mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider opacity-80">Payment Method</h3>
            <button className="text-xs font-medium text-primary hover:text-blue-400">Manage</button>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden divide-y dark:divide-white/5">
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-background-dark flex items-center justify-center text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-[20px]">credit_card</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Visa ending in 4242</p>
                <p className="text-xs text-slate-500">Expires 12/25</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
              </div>
            </div>
          </div>
          <button className="mt-3 w-full py-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-surface-dark/50 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add New Payment Method
          </button>
        </div>
      </main>

      <div className="sticky bottom-0 left-0 w-full p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-border-dark z-20">
        <button 
          onClick={onUpgrade}
          className="w-full h-12 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold text-base rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Subscription;
