
import React from 'react';

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  trend: string;
  trendColor: string;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, trend, trendColor, iconBg }) => {
  return (
    <div className="flex-none w-[160px] snap-center flex flex-col gap-3 rounded-xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded-lg ${iconBg}`}>
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p className={`${trendColor} text-xs font-medium flex items-center gap-0.5 mt-1`}>
          {icon === 'schedule' && <span className="material-symbols-outlined text-sm">trending_up</span>}
          {trend}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
