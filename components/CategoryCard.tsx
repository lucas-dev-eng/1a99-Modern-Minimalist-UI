
import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, icon: Icon } = category;
  return (
    <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
      <div 
        className="w-24 h-24 bg-white flex items-center justify-center 
                   rounded-2xl shadow-[4px_4px_8px_#e0e0e0] 
                   transition-all duration-300 ease-in-out 
                   group-hover:shadow-[6px_6px_12px_#d0d0d0] group-hover:-translate-y-1"
      >
        <Icon className="w-12 h-12 text-gray-700 transition-colors group-hover:text-[#ff0070]" />
      </div>
      <p className="mt-4 font-semibold text-sm text-gray-800">{name}</p>
    </div>
  );
};

export default CategoryCard;