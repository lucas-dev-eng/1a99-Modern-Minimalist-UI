
import React from 'react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import type { Category, Product } from './types';
import { HomeIcon, PackageIcon, ToyIcon, PartyIcon, PetIcon, ChevronRightIcon } from './components/icons';

const categories: Category[] = [
  { name: 'Casa e Decoração', icon: HomeIcon },
  { name: 'Embalagens', icon: PackageIcon },
  { name: 'Brinquedos', icon: ToyIcon },
  { name: 'Artigos de Festa', icon: PartyIcon },
  { name: 'Pet Shop', icon: PetIcon },
];

const featuredProducts: Product[] = [
    { id: 1, name: 'Fone de Ouvido Bluetooth Sem Fio I12 TWS', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/227599025/fone-de-ouvido-bluetooth-sem-fio-i12-tws-sensivel-ao-toque-1a99-kwpwu2z5p9.jpg', price: 19.99, originalPrice: 24.99 },
    { id: 2, name: 'Varal De Teto Ou Parede Retrátil Para Secar Roupa 4,10m', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/217985444/varal-de-teto-ou-parede-retratil-para-secar-roupa-com-4-cordas-de-4-10m-automatico-1a99-o0h6b3a9ol.jpg', price: 24.99, originalPrice: 29.99 },
    { id: 3, name: 'Kit 10 Potes Herméticos De Vidro Com Tampa De Bambu', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/234509789/pote-de-vidro-hermetico-com-tampa-de-bambu-quadrado-1a99-ylwzsmk6u4.jpg', price: 89.99, originalPrice: 119.99 },
    { id: 4, name: 'Panela De Pressão 4,5l Antiaderente Com Visor De Vidro', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/221379963/panela-de-pressao-4-5-litros-antiaderente-com-visor-de-vidro-na-tampa-marflon-1a99-7x56llmgnq.jpg', price: 89.99, originalPrice: 119.99 },
];

const newArrivals: Product[] = [
    { id: 5, name: 'Lousa Mágica Infantil Tela Lcd De Escrever E Desenhar 8,5', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/211750244/lousa-magica-tablet-infantil-tela-lcd-de-escrever-e-desenhar-8-5-polegadas-1a99-bivh5wn99p.jpg', price: 14.99, originalPrice: 19.99 },
    { id: 6, name: 'Frigideira Antiaderente Com 4 Divisórias Para Ovos e Hambúrguer', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/217332219/frigideira-antiaderente-com-4-divisorias-para-ovos-e-hamburguer-omeleteira-egg-pancake-1a99-p03y10u2x9.jpg', price: 34.99, originalPrice: 44.99 },
    { id: 7, name: 'Chaleira Elétrica Inox 1,8 Litros Desligamento Automático', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/207036682/chaleira-eletrica-inox-1-8-litros-desligamento-automatico-110v-220v-jarra-eletrica-1a99-yemq7t4y3k.jpg', price: 49.99, originalPrice: 59.99 },
    { id: 8, name: 'Mini Processador Triturador De Alimentos Elétrico Usb', imageUrl: 'https://cdn.awsli.com.br/300x300/1095/1095715/produto/206979679/mini-processador-e-triturador-de-alimentos-eletrico-usb-alho-cebola-legumes-e-verduras-1a99-t2tdq8w14x.jpg', price: 24.99, originalPrice: 34.99 },
]

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
        <a href="#" className="flex items-center text-sm font-semibold text-[#ff0070] hover:text-[#cc005a] transition-colors">
            Ver todos <ChevronRightIcon className="w-4 h-4 ml-1" />
        </a>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#ff0070] to-[#e10098] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              OFERTAS DA SEMANA
            </h1>
            <p className="mt-4 text-white text-lg max-w-md drop-shadow">
              Produtos com preços imperdíveis para você e sua casa.
            </p>
            <button className="mt-8 px-8 py-3 bg-black text-white font-bold rounded-full transition-transform hover:scale-105 shadow-md">
              Conferir Ofertas
            </button>
          </div>
          <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
             <img src="https://cdn.awsli.com.br/800x800/1095/1095715/produto/242279185/conjunto-de-panelas-antiaderente-5-pecas-com-tampa-de-vidro-cereja-marflon-1a99-hft2f1u85r.jpg" alt="Promo illustration" className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl" />
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-16">
          <SectionHeader title="Navegue por Categorias" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mt-16">
          <SectionHeader title="Ofertas em Destaque" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mt-16">
            <SectionHeader title="Novidades" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;