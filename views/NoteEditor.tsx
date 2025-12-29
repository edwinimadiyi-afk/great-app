
import React, { useState, useEffect } from 'react';
import StatusIndicator from '../components/StatusIndicator';

interface NoteEditorProps {
  onBack: () => void;
  onSync: () => void;
  transcript?: string;
}

type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';

const NoteEditor: React.FC<NoteEditorProps> = ({ onBack, onSync, transcript }) => {
  const [activeTab, setActiveTab] = useState('Subjective');
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [showAiInsights, setShowAiInsights] = useState(false);
  
  const tabs = ['Subjective', 'Objective', 'Assessment', 'Plan'];

  const [noteData, setNoteData] = useState({
    subjective: "Patient presents with a 3-day history of productive cough and fever. States that symptoms began after visiting family. Denies shortness of breath but reports mild chest tightness. Fever peaked at 101.2°F last night.",
    objective: "BP: 120/80 mmHg, HR: 78 bpm, RR: 16, Temp: 99.1°F.\nGen: Alert and oriented x3.\nHEENT: Pharynx is slightly erythematous without exudates.\nLungs: Clear to auscultation bilaterally."
  });

  useEffect(() => {
    if (transcript) {
      setNoteData({
        ...noteData,
        subjective: `Auto-generated from transcript:\n${transcript}\n\nPatient reports shortness of breath on exertion. Denies chest pain.`
      });
    }
  }, [transcript]);

  const handleSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setSyncStatus('success');
        setTimeout(() => onSync(), 1200);
      } else {
        setSyncStatus('error');
      }
    }, 2000);
  };

  const generateAiInsights = () => {
    setIsAiProcessing(true);
    setTimeout(() => {
      setIsAiProcessing(false);
      setShowAiInsights(true);
    }, 1500);
  };

  const config = {
    syncing: { text: 'Syncing to EMR...', icon: 'sync', iconClass: 'animate-spin', btnClass: 'bg-primary/70' },
    success: { text: 'Synced Successfully', icon: 'check_circle', iconClass: 'animate-bounce', btnClass: 'bg-emerald-500 shadow-emerald-500/30' },
    error: { text: 'Sync Failed - Retry?', icon: 'error', iconClass: '', btnClass: 'bg-red-500 hover:bg-red-600' },
    idle: { text: 'Approve & Sync to EMR', icon: 'sync', iconClass: '', btnClass: 'bg-primary shadow-primary/25 hover:bg-primary/90' }
  }[syncStatus] || { text: 'Approve & Sync to EMR', icon: 'sync', iconClass: '', btnClass: 'bg-primary' };

  return (
    <div className="flex flex-col flex-1 pb-32 fade-in">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <button onClick={onBack} disabled={syncStatus === 'syncing'} className="flex size-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">Note Editor</h2>
          <StatusIndicator />
        </div>
        <button onClick={generateAiInsights} disabled={isAiProcessing} className="flex items-center gap-1.5 text-primary dark:text-primary font-bold text-sm bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-all">
          <span className={`material-symbols-outlined text-[18px] ${isAiProcessing ? 'animate-spin' : ''}`}>magic_button</span>
          {isAiProcessing ? 'Thinking...' : 'AI Insights'}
        </button>
      </header>

      {/* Patient Header */}
      <div className="flex items-center gap-4 px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
        <div className="h-12 w-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold border border-primary/20">JD</div>
        <div className="flex flex-col">
          <p className="text-base font-bold text-slate-900 dark:text-white leading-none mb-1">John Doe</p>
          <p className="text-slate-500 text-xs">MRN: 849302 • Visit: Oct 24, 2023</p>
        </div>
      </div>

      <div className="sticky top-[61px] z-10 w-full bg-background-light dark:bg-background-dark pt-4 pb-2">
        <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`group flex h-9 shrink-0 items-center px-5 rounded-full transition-all ${activeTab === tab ? 'bg-primary text-white shadow-lg' : 'bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'}`}>
              <span className="text-sm font-medium">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="flex flex-col gap-6 px-4 py-2">
        {showAiInsights && (
          <div className="animate-in slide-in-from-top duration-500 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-850 p-4 rounded-2xl border border-primary/20 shadow-sm">
             <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2 text-primary">
                 <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                 <h3 className="text-sm font-bold uppercase tracking-wider">Clinical Suggestions</h3>
               </div>
               <button onClick={() => setShowAiInsights(false)} className="text-slate-400 hover:text-slate-600">
                 <span className="material-symbols-outlined text-[18px]">close</span>
               </button>
             </div>
             <div className="flex flex-col gap-3">
               <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Suggested ICD-10</p>
                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-white dark:bg-slate-700 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-600">R06.02 (Shortness of breath)</span>
                   <span className="px-2 py-1 bg-white dark:bg-slate-700 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-600">J06.9 (Upper respiratory infection)</span>
                 </div>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Next Steps / Considerations</p>
                 <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 ml-4 list-disc">
                   <li>Order Chest X-Ray to rule out pneumonia</li>
                   <li>Pulse oximetry at rest and during ambulation</li>
                   <li>Rule out exacerbation of underlying asthma</li>
                 </ul>
               </div>
             </div>
          </div>
        )}

        <section>
          <div className="flex items-center justify-between py-2">
            <h3 className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">person</span>
              {activeTab}
            </h3>
            <div className="flex gap-2">
              <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">mic</span></button>
              <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">history</span></button>
            </div>
          </div>
          <textarea 
            className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-4 text-base leading-relaxed text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm min-h-[160px]" 
            value={activeTab === 'Subjective' ? noteData.subjective : activeTab === 'Objective' ? noteData.objective : ""}
            onChange={(e) => {
              if (activeTab === 'Subjective') setNoteData({...noteData, subjective: e.target.value});
              if (activeTab === 'Objective') setNoteData({...noteData, objective: e.target.value});
            }}
          />
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-4 pb-6">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button disabled={syncStatus === 'syncing'} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white hover:bg-slate-200 transition-colors disabled:opacity-50">
            <span className="material-symbols-outlined">keyboard_voice</span>
          </button>
          <button 
            onClick={handleSync}
            disabled={syncStatus === 'syncing' || syncStatus === 'success'}
            className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-white shadow-lg transition-all duration-300 ${config.btnClass}`}
          >
            <span className="font-bold text-base">{config.text}</span>
            <span className={`material-symbols-outlined text-[20px] ${config.iconClass}`}>{config.icon}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
