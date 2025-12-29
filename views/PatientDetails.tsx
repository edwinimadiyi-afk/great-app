
import React from 'react';
import { Patient } from '../types';

interface PatientDetailsProps {
  patient: Patient | null;
  onBack: () => void;
  onNewConsult: () => void;
  onViewNote: (noteId: string) => void;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient, onBack, onNewConsult, onViewNote }) => {
  if (!patient) return null;

  return (
    <div className="flex flex-col flex-1 pb-24 fade-in">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <button onClick={onBack} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer">
          <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Patient Details</h2>
        <div className="flex w-10 items-center justify-end">
          <p className="text-primary text-base font-semibold cursor-pointer hover:opacity-80">Edit</p>
        </div>
      </header>

      <main className="flex flex-col p-4 gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            {patient.avatarUrl ? (
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 border-4 border-white dark:border-slate-800 shadow-md" 
                style={{ backgroundImage: `url("${patient.avatarUrl}")` }} 
              />
            ) : (
              <div className="flex items-center justify-center h-28 w-28 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-4xl font-bold border-4 border-white dark:border-slate-800">
                {patient.initials}
              </div>
            )}
            <div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white dark:border-slate-800 h-5 w-5 rounded-full"></div>
          </div>
          <div className="text-center">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">{patient.name}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">{patient.age}y | {patient.gender} | MRN: {patient.mrn}</p>
          </div>
          <div className="flex w-full max-w-sm gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-11 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-11 px-4 bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span>Message</span>
            </button>
          </div>
        </div>

        <section className="grid grid-cols-2 gap-3">
          {[
            { label: 'BP', val: '120/80', unit: 'mmHg', icon: 'favorite', color: 'text-red-600 bg-red-100 dark:bg-red-900/30' },
            { label: 'Rate', val: '72', unit: 'bpm', icon: 'ecg_heart', color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30' },
            { label: 'Temp', val: '98.6°F', unit: '', icon: 'device_thermostat', color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30' },
            { label: 'Weight', val: '145', unit: 'lbs', icon: 'monitor_weight', color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30' }
          ].map((v, i) => (
            <div key={i} className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <div className={`p-1.5 rounded-full ${v.color}`}>
                  <span className="material-symbols-outlined text-[16px]">{v.icon}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">{v.label}</p>
              </div>
              <p className="text-slate-900 dark:text-white text-xl font-bold">{v.val} <span className="text-sm font-normal text-slate-500">{v.unit}</span></p>
            </div>
          ))}
        </section>

        <section className="flex items-start gap-3 rounded-lg bg-red-50 dark:bg-red-900/20 p-3 border border-red-100 dark:border-red-900/30">
          <span className="material-symbols-outlined text-red-600 dark:text-red-400 mt-0.5" style={{ fontSize: '20px' }}>warning</span>
          <div className="flex flex-col">
            <p className="text-xs font-bold text-red-800 dark:text-red-300 uppercase tracking-wide">Allergies</p>
            <p className="text-sm text-red-700 dark:text-red-200 font-medium">Penicillin (Severe), Latex</p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Consultation Timeline</h3>
            <span className="text-primary text-sm font-semibold cursor-pointer">View All</span>
          </div>
          <div className="relative flex flex-col gap-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
            <div className="relative bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm ml-4">
              <div className="absolute -left-[29px] top-6 h-4 w-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark shadow-sm"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-base">Oct 12, 2023</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Telehealth • Dr. Smith</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 text-[10px] uppercase font-bold px-2 py-1 rounded">Recent</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-700 dark:to-slate-750 p-3 rounded-lg border border-indigo-100 dark:border-slate-600 mt-2">
                <div className="flex items-center gap-1.5 mb-1.5 text-indigo-600 dark:text-indigo-300">
                  <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                  <span className="text-xs font-bold uppercase tracking-wide">AI Summary</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Patient reported recurring headaches. Prescribed Sumatriptan. Recommended follow-up in 2 weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Recent Notes</h3>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 'n1', date: 'Oct 05, 2023', excerpt: 'Follow-up on hypertension. Patient reporting improved sleep patterns and reduced stress levels over the past 3 weeks. Vital signs within normal range.' },
              { id: 'n2', date: 'Sep 20, 2023', excerpt: 'Initial consultation regarding intermittent chest tightness. ECG performed with normal results. Patient advised on dietary changes and prescribed further tests.' }
            ].map((note) => (
              <div key={note.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">{note.date}</span>
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[18px]">description</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {note.excerpt}
                </p>
                <button 
                  onClick={() => onViewNote(note.id)}
                  className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white text-xs font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 group-hover:border-primary/30"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  View Note
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={onNewConsult}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white rounded-full h-14 pl-4 pr-6 shadow-xl shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[28px]">add_circle</span>
          <span className="font-bold text-base">New Consult</span>
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
