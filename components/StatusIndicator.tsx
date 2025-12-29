
import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface StatusIndicatorProps {
  showLabel?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ showLabel = true }) => {
  const isOnline = useOnlineStatus();

  return (
    <div className={`flex items-center gap-2 px-2 py-1 rounded-full transition-all duration-300 ${isOnline ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
      <span className="relative flex h-2 w-2">
        {isOnline && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isOnline ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
      </span>
      {showLabel && (
        <span className={`text-[10px] font-bold uppercase tracking-wider ${isOnline ? 'text-emerald-500' : 'text-amber-500'}`}>
          {isOnline ? 'Online' : 'Offline - Local Mode'}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
