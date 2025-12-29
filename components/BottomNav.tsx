
import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const items = [
    { view: View.DASHBOARD, icon: 'grid_view', label: 'Dashboard' },
    { view: View.PATIENT_LIST, icon: 'group', label: 'Patients' },
    { view: View.DASHBOARD, icon: 'calendar_month', label: 'Schedule' }, // Placeholder for now
    { view: View.SETTINGS, icon: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-light/95 dark:bg-[#0f161e]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto w-full px-2">
        {items.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => onNavigate(item.view)}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${activeView === item.view ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
          >
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="h-4 w-full"></div>
    </nav>
  );
};

export default BottomNav;
