
import React from 'react';
import { MOCK_INVOICES } from '../constants';

interface BillingHistoryProps {
  onBack: () => void;
}

const BillingHistory: React.FC<BillingHistoryProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col flex-1 pb-10 fade-in">
      <div className="flex items-center justify-between p-4 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <button onClick={onBack} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Billing History</h2>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>help</span>
        </button>
      </div>

      <div className="p-4 pb-2">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-700/50">
          <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Professional Plan</p>
              <p className="text-slate-500 dark:text-[#92adc9] text-sm font-medium leading-normal">
                $49.00/mo • Next billing: <span className="text-slate-900 dark:text-white font-semibold">Nov 01, 2023</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
                Manage
              </button>
              <button className="flex items-center justify-center rounded-lg h-9 px-3 bg-slate-100 dark:bg-[#233648] text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-200 dark:hover:bg-[#2c445a] transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>credit_card</span>
              </button>
            </div>
          </div>
          <div 
            className="w-full md:w-24 h-24 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg flex-none md:flex-1 relative overflow-hidden group" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYwsbPuG0wVJ-GsEv_lo9UfHEbf7VqPVUj7lwsBwDcqNxIdLhsncCwN2jx3fk8QVhP1dDhEbJGermNtfXxo47xDeGODhkMWKuB2jCM5XiL91tsAstx9lM6-4e7VFjqxihw71Sry8iUoMqJYYPhQCXVSUA7CDZPb2wxW2Fr0E6zwnJX_uBVzQfQthzbhBg4epAQQw-9Yg9ymraQQu61_B-h8BChzz-nUcfelsJhXXtV19u46YqYeAMvG5ucaw5O0H1n20iGXaylrmr7")' }}
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 shadow-sm shadow-primary/20 transition-transform active:scale-95 text-white text-sm font-semibold">
          All Invoices
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#233648] px-5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-white text-sm font-medium">
          Paid
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#233648] px-5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-white text-sm font-medium">
          Pending
        </button>
      </div>

      <div className="mt-2">
        <div className="sticky top-[72px] z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 border-b border-slate-100 dark:border-slate-800/50">
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider opacity-80">October 2023</h3>
        </div>
        {MOCK_INVOICES.map((inv) => (
          <div key={inv.id} className={`flex items-center gap-4 px-4 py-4 justify-between border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#15202b] transition-colors cursor-pointer group ${inv.status === 'Failed' ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 border shadow-sm ${inv.status === 'Paid' ? 'text-primary bg-blue-50 dark:bg-[#233648] border-blue-100 dark:border-transparent' : 'text-red-500 bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-transparent'}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{inv.status === 'Paid' ? 'receipt_long' : 'error'}</span>
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">{inv.date}</p>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-[#92adc9] text-xs font-medium leading-normal">{inv.id}</span>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${inv.status === 'Paid' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'}`}>
                    {inv.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1">
              <span className={`text-base font-bold ${inv.status === 'Paid' ? 'text-slate-900 dark:text-white' : 'text-slate-400 line-through'}`}>{inv.amount}</span>
              {inv.status === 'Paid' ? (
                <button className="text-primary hover:text-blue-600 p-1 -mr-2 rounded-full transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
                </button>
              ) : (
                <button className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-1">
                  Retry <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>refresh</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingHistory;
