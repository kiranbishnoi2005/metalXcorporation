import { useState } from 'react';
import { X } from 'lucide-react';

export interface Product {
  name: string;
  description: string;
  image: string;
}

interface ProductGalleryProps {
  products: Product[];
  title: string;
}

export default function ProductGallery({ products, title }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(product)}
              className="group text-left bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
              <p className="text-blue-400 text-xs font-semibold mt-3">Click to view</p>
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full border border-gray-800 overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 rounded-lg overflow-hidden bg-black">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProduct.description}</p>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
