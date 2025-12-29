
import React from 'react';
import { View } from '../types';

interface SettingsProps {
  onBack: () => void;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack, onNavigate, onLogout }) => {
  return (
    <div className="flex flex-col flex-1 pb-10 fade-in">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b dark:border-white/5 border-black/5">
        <button onClick={onBack} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Settings</h2>
      </header>

      <div className="flex flex-col gap-6 px-4 py-6">
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full h-20 w-20 shrink-0 ring-2 ring-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC1TcCZqsN33JArPDkDfjBBrDYwOjUCqo1Bd2wjA2NFXRj7DpL_JfrtB5KoS1Yl2FYYQuo8xZI-tNL3pdlQk2ABCNJ2bejAAXqlBdsRTRNe6yyV3Y8UMHEieyYcVbREOAPh3JR-PPZBKdoMzPKC6p9BakeiSC3uwMlDsV0ZHi_xNuArJJZ9sImpWytPcQPL34sl8lvQDD_hnl4s9Y5GiYpYOxrKMRceDcaM5EJMsnDHf4v4uz0DjnJZ6PBefWpL4-mcYe7sc66BqsD")' }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Dr. Sarah Chen, MD</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Cardiology • NPI: 1234567890</p>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors w-full">
            Edit Profile
          </button>
        </div>

        <section className="flex flex-col gap-2">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-2">Clinical Integration</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-black/5 dark:border-white/5 divide-y dark:divide-white/5">
            <div className="flex items-center gap-4 px-4 py-4 justify-between cursor-pointer hover:bg-black/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0 size-10">
                  <span className="material-symbols-outlined text-[20px]">link</span>
                </div>
                <div>
                  <p className="font-medium">EMR Connection</p>
                  <p className="text-emerald-500 text-xs font-medium">Epic Systems (Connected)</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-4 justify-between cursor-pointer hover:bg-black/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 shrink-0 size-10">
                  <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                </div>
                <div>
                  <p className="font-medium">AI Scribe Settings</p>
                  <p className="text-slate-500 text-xs">Dictation sensitivity, Summary length</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-2">Billing & Subscription</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-black/5 dark:border-white/5 divide-y dark:divide-white/5">
            <div 
              onClick={() => onNavigate(View.SUBSCRIPTION)}
              className="flex items-center gap-4 px-4 py-4 justify-between cursor-pointer hover:bg-black/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 size-10">
                  <span className="material-symbols-outlined text-[20px]">credit_card</span>
                </div>
                <div>
                  <p className="font-medium">Subscription Management</p>
                  <p className="text-slate-500 text-xs">Provider Pro • $49/mo</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
            </div>
            <div 
              onClick={() => onNavigate(View.BILLING_HISTORY)}
              className="flex items-center gap-4 px-4 py-4 justify-between cursor-pointer hover:bg-black/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-slate-500/20 text-slate-400 shrink-0 size-10">
                  <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                </div>
                <p className="font-medium">Billing History</p>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
            </div>
          </div>
        </section>

        <button 
          onClick={onLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
        >
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>

        <div className="text-center mt-4">
          <p className="text-slate-500 text-sm">Version 2.4.1 (Build 8902)</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
