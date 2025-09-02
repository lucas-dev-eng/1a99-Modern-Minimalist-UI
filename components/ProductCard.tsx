
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price, originalPrice } = product;
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col group overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-xl">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex-grow mt-4">
        <h3 className="text-gray-800 font-semibold text-base leading-tight h-10">{name}</h3>
      </div>
      <div className="mt-3">
        {originalPrice && (
          <p className="text-gray-400 line-through text-xs">
            R$ {originalPrice.toFixed(2).replace('.', ',')}
          </p>
        )}
        <p className="text-black font-bold text-2xl">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
      </div>
      <button 
        className="w-full mt-4 py-3 text-sm font-bold text-white bg-[#ff0070] rounded-lg
                   transition-all duration-300 ease-in-out
                   shadow-[2px_2px_5px_#d90060,_-2px_-2px_5px_#ff338f]
                   hover:bg-[#e60065]
                   active:shadow-inner active:bg-[#cc005a] focus:outline-none focus:ring-2 focus:ring-[#ff0070]"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;