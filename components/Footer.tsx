
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'; // Assuming lucide-react is available for simplicity. Creating simple SVG components is an alternative.

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff0070] transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
             <div className="text-4xl font-extrabold tracking-tighter">
              <span className="text-white">1a</span><span className="text-[#ff0070]">99</span>
            </div>
            <p className="text-gray-400 mt-4 text-sm">Sua loja de variedades favorita.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Nossas Lojas</a></li>
              <li><a href="#" className="hover:text-white">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ajuda</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-white">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Minha Conta</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Meus Pedidos</a></li>
              <li><a href="#" className="hover:text-white">Meu Cadastro</a></li>
              <li><a href="#" className="hover:text-white">Meus Favoritos</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
                {/* Fallback text icons for simplicity */}
                <SocialIcon href="#">FB</SocialIcon>
                <SocialIcon href="#">IN</SocialIcon>
                <SocialIcon href="#">TW</SocialIcon>
                <SocialIcon href="#">YT</SocialIcon>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 1a99. Todos os direitos reservados. Este é um clone de UI para fins de estudo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;