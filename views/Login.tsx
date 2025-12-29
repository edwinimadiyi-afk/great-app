
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col flex-1 px-6 pt-12 pb-6 z-10 fade-in">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="flex flex-col items-center gap-4 mb-10 z-10">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-[40px]">medical_services</span>
        </div>
        <div className="text-center">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight">MediSync AI</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-normal pt-1">Secure Provider Access</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full z-10">
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-white text-sm font-semibold leading-normal">Work Email</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
            <input 
              className="form-input flex w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 text-base placeholder:text-slate-400 text-slate-900 dark:text-white transition-colors" 
              placeholder="dr.name@hospital.org" 
              type="email" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-white text-sm font-semibold leading-normal">Password</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400 material-symbols-outlined text-[20px]">lock</span>
            <input 
              className="form-input flex w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-12 text-base placeholder:text-slate-400 text-slate-900 dark:text-white transition-colors" 
              placeholder="••••••••" 
              type="password" 
            />
            <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-slate-400 hover:text-primary transition-colors focus:outline-none">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-sm font-medium text-primary hover:text-blue-400 transition-colors">Forgot Password?</button>
        </div>

        <button 
          onClick={onLogin}
          className="w-full h-14 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
        >
          <span>Log In</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute left-0 w-full h-px bg-slate-200 dark:bg-border-dark"></div>
          <span className="relative bg-background-light dark:bg-background-dark px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Or Login With</span>
        </div>

        <button 
          onClick={onLogin}
          className="w-full h-14 border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-[#233040] text-slate-900 dark:text-white font-semibold text-base rounded-xl transition-colors flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined text-[24px] text-primary">face</span>
          <span>Face ID</span>
        </button>
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center gap-4">
        <button className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium">
          Need Help? Contact IT Support
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="material-symbols-outlined text-[16px] text-emerald-500">verified_user</span>
          <span className="text-xs font-semibold text-emerald-500 tracking-wide uppercase">HIPAA Compliant</span>
        </div>
        <p className="text-[10px] text-slate-600 dark:text-slate-500">v2.4.0</p>
      </div>
    </div>
  );
};

export default Login;
