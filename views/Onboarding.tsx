
import React from 'react';

interface OnboardingProps {
  onNext: () => void;
  onSkip: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onNext, onSkip }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden fade-in">
      <div className="flex px-4 py-6 justify-end z-10">
        <button onClick={onSkip} className="group flex items-center justify-center rounded-lg h-10 px-4 text-slate-500 dark:text-slate-400 text-sm font-semibold leading-normal hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="truncate">Skip</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-10">
        <div className="w-full max-w-xs aspect-square relative flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
          <div 
            className="relative w-full h-full bg-center bg-no-repeat bg-contain rounded-2xl overflow-hidden" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWZIqq2u1B_3wh5sdn4yZnMK2ERtrkuL-9Rr1klOiazgaWPS1diRAEfUlqM2taM_A59WTySF1zZQZ3mH_RgWxtn8jvn9jdjSxG4nk6ajH9J07aTiwe1dCKaSKolf-ANsKOVp08uYbxeMlGG028SyW2Mku8yc0isZOauuKJ7n-cEfQFl0NNx_pWpRlcIU_7XhAAnWz5XH8nXqoP0SQNP9KV5CfxcO8GP32aTN5ISz70JFg5l9sMyAczne520JYX42ABc1FNmNSv2w8x")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/20"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-md mx-auto text-center z-10">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">
            Focus on Patients, <br/>Not Paperwork
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
            Seamlessly capture patient encounters. Our AI transcribes audio and syncs structured notes directly to your EMR in seconds.
          </p>
        </div>
      </div>

      <div className="w-full px-6 pb-10 pt-4 flex flex-col items-center gap-8 z-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>
        <button 
          onClick={onNext}
          className="w-full max-w-md bg-primary hover:bg-blue-600 text-white font-bold h-14 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-primary/25"
        >
          <span className="text-base">Next</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
