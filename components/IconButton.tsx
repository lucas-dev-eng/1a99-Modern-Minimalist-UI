
import React from 'react';

interface IconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  badgeCount?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, label, className, badgeCount }) => {
  return (
    <button
      aria-label={label}
      className={`relative p-3 bg-white rounded-lg text-gray-700 transition-all duration-200 ease-in-out
                  hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,_-4px_-4px_8px_#ffffff]
                  active:shadow-inner active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff0070] focus:ring-opacity-50
                  ${className}`}
    >
      <Icon className="w-6 h-6" />
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff0070] text-xs font-bold text-white">
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export default IconButton;