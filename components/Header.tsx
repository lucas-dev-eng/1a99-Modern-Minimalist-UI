
import React from 'react';
import SearchBar from './SearchBar';
import IconButton from './IconButton';
import { MenuIcon, UserIcon, HeartIcon, ShoppingCartIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center space-x-4">
            <button className="p-2 md:hidden text-gray-700">
                <MenuIcon className="w-6 h-6" />
            </button>
            <div className="text-3xl font-extrabold tracking-tighter">
              <span className="text-black">1a</span><span className="text-[#ff0070]">99</span>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center px-8">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
                <IconButton icon={UserIcon} label="Minha Conta" />
            </div>
            <div className="hidden md:block">
                <IconButton icon={HeartIcon} label="Favoritos" />
            </div>
            <IconButton icon={ShoppingCartIcon} label="Carrinho" badgeCount={3} />
          </div>
        </div>
        <div className="md:hidden pb-4 px-2">
            <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;