import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-black/50" />
    
        <div className="relative text-center">
          <h1 className="text-5xl font-bold mb-4">Shop.Io</h1>
          <p className="text-xl mb-8">Discover our latest collection</p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img 
                src={`https://placehold.co/600x400`} 
                alt={`Product ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">$99.99</span>
                  <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop.io</h3>
            <p>Your one-stop destination for all things trendy and fashionable.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;