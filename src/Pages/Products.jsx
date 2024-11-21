import React, { useState } from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Products({products,setIndex}) {
  let Navigate = useNavigate();
  
  return (
    <div className="bg-black min-h-screen text-white">
     
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product,index) => (
            <div onClick={()=>{
              Navigate("/ProductDetails")
              setIndex(index);


          }}
              key={product.id} 
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">${product.price.toLocaleString()}</span>
                  <div className="flex space-x-2">
                  
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Same as Home page */}
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
}