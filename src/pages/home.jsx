import React from 'react';
import { products } from '../data/products';
import { ToyCard } from "../components/ToyCard";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8 text-center shadow-md">
        <h1 className="text-3xl font-bold italic">DRIP STORY 🚀</h1>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        {/* Grid que organiza os cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ToyCard key={item.id} foguete={item} /> 
          ))}
        </div>
      </main>
    </div>
  );
}
