
import React from 'react';
import { View, Patient } from '../types';
import { MOCK_PATIENTS } from '../constants';
import BottomNav from '../components/BottomNav';

interface PatientListProps {
  onNavigate: (view: View, patient?: Patient) => void;
  onBack: () => void;
}

const PatientList: React.FC<PatientListProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col flex-1 pb-24 fade-in">
      <header className="sticky top-0 z-30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-9 border-2 border-white dark:border-gray-700 shadow-sm" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-w4F0NoP52Ye1qHPy0tmqLQX77R1SMS9cKsgXatJjJx0524D9r7m2fKympzC8S6H3Jm6kLHSh8ohoss1u6LkdJgUn0Ep3oKY03ftqiWT4zTK2PAVAudpZQv98NAg2AIzAPdkQ5btcfKiPgNpMXLgBWIUx5g-VkwIh1MP3td-lSFf75n8pU1O99RrLIHoc7zx8C9HDfvdMpw1TzwSFlMX1sG29CYivhAixkUbpKxOBOJ7TSFNWlAbnnO_Ua3ccR8SCP2lO4oAcHOZK")' }}
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-background-dark"></span>
            </div>
            <h1 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight tracking-tight">My Patients</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center size-10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[24px]">visibility_off</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-[24px]">person_add</span>
            </button>
          </div>
        </div>
        
        <div className="px-4 pb-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">search</span>
            </div>
            <input 
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-xl bg-white dark:bg-[#212b36] dark:border-transparent dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none shadow-sm transition-all" 
              placeholder="Search name, MRN, or DOB..." 
              type="text" 
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 hover:text-primary transition-colors text-[20px]">mic</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          <button className="flex shrink-0 items-center justify-center h-8 px-4 rounded-full bg-primary text-white text-xs font-medium shadow-sm transition-transform active:scale-95">
            Scheduled Today
          </button>
          <button className="flex shrink-0 items-center justify-center h-8 px-4 rounded-full bg-white dark:bg-[#212b36] border border-gray-200 dark:border-transparent text-gray-600 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
            Drafts <span className="ml-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/10 text-[10px] text-orange-600 font-bold">3</span>
          </button>
          <button className="flex shrink-0 items-center justify-center h-8 px-4 rounded-full bg-white dark:bg-[#212b36] border border-gray-200 dark:border-transparent text-gray-600 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
            Recent
          </button>
          <button className="flex shrink-0 items-center justify-center h-8 px-4 rounded-full bg-white dark:bg-[#212b36] border border-gray-200 dark:border-transparent text-gray-600 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
            Inpatient
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-2 px-4 space-y-3 no-scrollbar">
        <div className="flex items-center py-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">09:00 AM - Morning Rounds</h3>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4"></div>
        </div>

        {MOCK_PATIENTS.map((p) => (
          <div 
            key={p.id}
            onClick={() => onNavigate(View.PATIENT_DETAILS, p)}
            className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-transparent dark:border-gray-800 active:scale-[0.99] transition-all duration-200 cursor-pointer hover:shadow-md"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="relative shrink-0">
                {p.avatarUrl ? (
                  <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 ring-2 ring-gray-100 dark:ring-gray-700/50" style={{ backgroundImage: `url("${p.avatarUrl}")` }} />
                ) : (
                  <div className="relative shrink-0 flex items-center justify-center size-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-lg font-bold">
                    {p.initials}
                  </div>
                )}
                {p.status === 'Lab Alert' && (
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark">
                    <span className="material-symbols-outlined text-white text-[10px] font-bold">priority_high</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-1 flex-col min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h3 className="text-gray-900 dark:text-gray-100 text-base font-bold truncate">{p.name}</h3>
                  {p.status === 'Synced' && (
                    <span className="flex items-center text-emerald-600 dark:text-emerald-400 text-xs font-medium bg-emerald-100/60 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[14px] mr-1">check_circle</span>
                      Synced
                    </span>
                  )}
                  {p.status === 'Draft' && (
                    <span className="flex items-center text-orange-600 dark:text-orange-400 text-xs font-medium bg-orange-100/60 dark:bg-orange-400/10 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[14px] mr-1">edit_note</span>
                      Draft
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1.5">{p.age}{p.gender[0]} • MRN: {p.mrn}</p>
                <div className="flex items-center gap-2">
                  {p.condition && (
                    <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                      {p.condition}
                    </span>
                  )}
                  {p.status === 'Lab Alert' && (
                    <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-900/20 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-300 ring-1 ring-inset ring-red-600/10">
                      Lab Alert
                    </span>
                  )}
                  <span className="text-xs text-gray-400 dark:text-gray-500">Last Note: {p.lastNoteDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <button className="absolute bottom-24 right-5 z-40 flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:bg-blue-600 active:scale-95 transition-all duration-200 group border border-white/10">
        <span className="material-symbols-outlined text-[28px]">mic</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
        </span>
      </button>

      <BottomNav activeView={View.PATIENT_LIST} onNavigate={onNavigate} />
    </div>
  );
};

export default PatientList;
