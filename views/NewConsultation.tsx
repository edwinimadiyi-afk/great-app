
import React, { useState, useEffect } from 'react';

interface NewConsultationProps {
  onBack: () => void;
  onStart: (transcript: string) => void;
}

const NewConsultation: React.FC<NewConsultationProps> = ({ onBack, onStart }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [transcript, setTranscript] = useState<string[]>([]);

  const mockTranscript = [
    "Patient: Good morning doctor, I've been feeling quite short of breath lately.",
    "Doctor: I see. When did this start?",
    "Patient: About three days ago, mostly when I'm walking up stairs.",
    "Doctor: Any chest pain or palpitations associated with the shortness of breath?",
    "Patient: No, just the breathing difficulty. I also have a bit of a cough.",
    "Doctor: Is the cough productive or dry?"
  ];

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
        
        // Add a new line of transcript every 4 seconds
        if (timer > 0 && timer % 4 === 0) {
          const index = Math.floor(timer / 4) - 1;
          if (index < mockTranscript.length) {
            setTranscript((prev) => [...prev, mockTranscript[index]]);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isRecording) {
      // Logic to "process" and navigate to editor
      onStart(transcript.join('\n'));
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col flex-1 pb-24 fade-in bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/80 px-4 py-3 backdrop-blur-xl border-b border-white/5">
        <button onClick={onBack} className="flex items-center justify-center text-primary font-medium text-base transition-colors">
          Cancel
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">
          {isRecording ? 'Recording Session' : 'New Session'}
        </h2>
        <button className="flex items-center justify-center text-slate-400 active:text-white transition-colors p-1 rounded-full">
          <span className="material-symbols-outlined text-[24px]">settings</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-4 pt-4 gap-6 overflow-y-auto">
        {!isRecording ? (
          <>
            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-bold tracking-tight text-slate-100">Patient Details</h3>
                <button className="text-primary hover:text-blue-400 text-sm font-medium flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">history</span>
                  Recent
                </button>
              </div>
              <div className="flex flex-col gap-5 rounded-2xl bg-surface-dark p-5 shadow-sm border border-border-dark">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide ml-1">Patient Name</label>
                  <div className="relative flex items-center group">
                    <input 
                      className="form-input w-full rounded-xl border border-border-dark bg-background-dark h-12 px-4 text-base text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Enter name" 
                      type="text" 
                    />
                    <span className="material-symbols-outlined absolute right-4 text-slate-600 group-focus-within:text-primary transition-colors pointer-events-none">person</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide ml-1">MRN / Patient ID</label>
                  <div className="flex gap-3">
                    <div className="relative flex-1 flex items-center group">
                      <input 
                        className="form-input w-full rounded-xl border border-border-dark bg-background-dark h-12 px-4 text-base text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                        placeholder="ID-123456" 
                        type="text" 
                      />
                    </div>
                    <button className="flex aspect-square h-12 items-center justify-center rounded-xl bg-[#1e2b38] border border-border-dark text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">Visit Context</h3>
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
                <button className="group flex h-10 shrink-0 items-center gap-x-2 rounded-full bg-primary pl-3 pr-4 shadow-lg shadow-primary/25 border border-primary/50 transition-transform active:scale-95">
                  <span className="material-symbols-outlined text-white text-[20px]">stethoscope</span>
                  <span className="text-white text-sm font-medium">General Practice</span>
                </button>
                {['Cardiology', 'SOAP Note', 'Psychiatry'].map((ctx, idx) => (
                  <button key={idx} className="group flex h-10 shrink-0 items-center gap-x-2 rounded-full bg-surface-dark border border-border-dark pl-3 pr-4 transition-all active:scale-95 hover:bg-slate-700">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">{idx === 0 ? 'cardiology' : idx === 1 ? 'edit_note' : 'psychology'}</span>
                    <span className="text-slate-300 text-sm font-medium">{ctx}</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="flex-1 flex flex-col gap-6 py-4 animate-in fade-in">
            {/* Recording Animation Container */}
            <div className="bg-surface-dark rounded-3xl p-8 border border-border-dark shadow-2xl relative overflow-hidden">
               <div className="absolute top-4 right-4 flex items-center gap-2">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <span className="text-white font-mono text-xl font-bold">{formatTime(timer)}</span>
               </div>
               
               <div className="flex flex-col items-center justify-center gap-8 py-4">
                 <div className="flex items-center justify-center gap-1.5 h-24">
                   {[...Array(16)].map((_, i) => (
                     <div 
                       key={i} 
                       className={`w-1.5 bg-primary rounded-full animate-bounce`} 
                       style={{ 
                         height: `${20 + Math.random() * 80}%`,
                         animationDelay: `${i * 0.1}s`,
                         animationDuration: '0.6s'
                       }}
                     />
                   ))}
                 </div>
                 <div className="text-center">
                   <h4 className="text-primary font-bold text-lg mb-1">AI Listening...</h4>
                   <p className="text-slate-400 text-sm">Capturing encounter details in real-time</p>
                 </div>
               </div>
            </div>

            {/* Live Transcript Panel */}
            <div className="flex-1 flex flex-col gap-3 min-h-0">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Live Transcript</h3>
              <div className="flex-1 bg-background-dark border border-border-dark rounded-2xl p-4 overflow-y-auto no-scrollbar flex flex-col gap-4">
                {transcript.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-slate-600 gap-3">
                    <span className="material-symbols-outlined text-4xl animate-pulse">text_fields</span>
                    <p className="text-sm">Speak to see transcription...</p>
                  </div>
                )}
                {transcript.map((line, i) => (
                  <div key={i} className="flex gap-3 animate-in slide-in-from-bottom-2 duration-500">
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${line.startsWith('Doctor') ? 'bg-primary/20 text-primary' : 'bg-slate-700 text-slate-300'}`}>
                      {line.startsWith('Doctor') ? 'MD' : 'PT'}
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed pt-1.5">{line.split(': ')[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!isRecording && (
          <section className="flex-1 flex flex-col items-center justify-center min-h-[200px] relative mt-2 mb-4">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-[80px] animate-pulse"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="relative flex items-center justify-center h-28 w-28">
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-125 animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-150"></div>
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-[#0f6cd0] shadow-[0_0_25px_rgba(19,127,236,0.5)] flex items-center justify-center text-white relative z-20 ring-4 ring-background-dark/80">
                  <span className="material-symbols-outlined text-[40px]">graphic_eq</span>
                </div>
                <div className="absolute -bottom-4 bg-[#1e2b38] border border-border-dark px-3 py-1 rounded-full shadow-xl z-30 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-slate-200">AI Ready</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent z-40 pb-8 pt-8">
        <button 
          onClick={handleStartStop}
          className={`w-full h-14 rounded-xl font-bold text-lg shadow-[0_0_25px_rgba(19,127,236,0.5)] border flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${
            isRecording 
            ? 'bg-red-600 hover:bg-red-700 border-red-500/30' 
            : 'bg-primary hover:bg-blue-600 border-primary/30'
          }`}
        >
          <div className="bg-white/20 p-1 rounded-full backdrop-blur-sm">
            <span className="material-symbols-outlined text-[20px] block">
              {isRecording ? 'stop_circle' : 'mic'}
            </span>
          </div>
          {isRecording ? 'Finish & Generate Note' : 'Start Consultation'}
        </button>
      </footer>
    </div>
  );
};

export default NewConsultation;
