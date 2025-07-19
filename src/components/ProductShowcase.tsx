'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

// Images
import mat1 from '../images/products/crash-mat-1.jpg';
import mat2 from '../images/products/pool-mat-1.jpg';
import mat3 from '../images/products/custom-yoga-mat-1.jpg';
import mat4 from '../images/products/custom-yoga-mat-2.png';
import tile1 from '../images/products/tile-1.jpg';
import roll1 from '../images/products/rubber-roll-tile-2.jpg';
import roller1 from '../images/products/roller-1.webp';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

const products: Product[] = [
  { id: 1, name: 'Gym Foam Roller', category: 'rolls', image: roller1, description: 'High-quality rubber roller for comfort and durability.', specs: ['comfortable', 'custom thickness', 'easy maintenance'] },
  { id: 2, name: 'Rubber Roll Tile', category: 'rolls', image: roll1, description: 'Heavy-duty anti-slip roll tile for gym and industrial flooring.', specs: ['sound insulation', 'impact protection', 'multi-thickness (2,4,5,6,8,10,12mm)'] },
  { id: 3, name: 'Custom Yoga Mat 2X6', category: 'mats', image: mat3, description: 'Eco-friendly non-slip yoga mat with custom prints.', specs: ['eco-friendly', 'non-slip', 'custom'] },
  { id: 4, name: 'Crash Mat', category: 'mats', image: mat1, description: 'High-density crash mat for functional training and gymnastics.', specs: ['high density foam', 'shock absorption'] },
  { id: 5, name: 'Poolside Mat', category: 'mats', image: mat2, description: 'Waterproof anti-fungal mat for wet areas.', specs: ['waterproof', 'anti-fungal', 'non-slip'] },
  { id: 6, name: 'Interlock Tile Mat', category: 'tiles', image: tile1, description: 'Easy-install interlocking tiles in custom colors.', specs: ['easy to install', 'shock resistant', 'custom colors'] },
  { id: 7, name: 'Custom Foldable Yoga Mat 2X6', category: 'mats', image: mat4, description: 'Durable yoga mat in custom sizes.', specs: ['durable', 'custom sizes', 'foldable'] }
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'tiles', label: 'Tiles' },
  { key: 'mats', label: 'Mats' },
  { key: 'rolls', label: 'Rolls' }
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' ? products : products.filter((p) => p.category === filter);
  const currentIndex = selectedProduct ? filteredProducts.findIndex((p) => p.id === selectedProduct.id) : -1;

  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const goNext = () => {
    if (currentIndex < filteredProducts.length - 1) {
      setSelectedProduct(filteredProducts[currentIndex + 1]);
    }
  };
  const goPrev = () => {
    if (currentIndex > 0) {
      setSelectedProduct(filteredProducts[currentIndex - 1]);
    }
  };

  const handleContactScroll = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setSelectedProduct(null);
      setZoomedImage(false);
    }, 300);
  };

  const handleZoomClose = () => setZoomedImage(false);

  return (
    <section id="products" className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Explore Our Gym Products</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setFilter(cat.key);
                  setSelectedProduct(null);
                  setZoomedImage(false);
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                  filter === cat.key
                    ? 'bg-white text-teal-600 shadow'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden overflow-x-auto pb-4" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-3 px-2 w-max" ref={mobileScrollRef}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="w-[260px] h-[380px] border rounded-xl shadow-sm flex-shrink-0 relative">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-xl" />
                <CardContent className="p-4 pb-20 text-left">
                  <h3 className="text-lg font-bold mb-2 text-black">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex flex-wrap mb-3">
                    {product.specs.map((s, i) => (
                      <span key={i} className="text-sm mr-[5px] mb-2">{s}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button className="w-full bg-teal-600 text-white hover:bg-teal-700" onClick={() => setSelectedProduct(product)}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="w-[260px] h-[380px] border rounded-xl shadow-sm flex-shrink-0 relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-xl" />
              <CardContent className="p-4 pb-20 text-left">
                <h3 className="text-lg font-bold mb-2 text-black">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex flex-wrap mb-3">
                  {product.specs.map((s, i) => (
                    <span key={i} className="text-sm mr-[5px] mb-2">{s}</span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Button className="w-full bg-teal-600 text-white hover:bg-teal-700" onClick={() => setSelectedProduct(product)}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={e => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow text-teal-600 hover:bg-teal-600 hover:text-white"
            >
              <MdArrowBackIosNew size={22} />
            </button>
          )}
          {currentIndex < filteredProducts.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow text-teal-600 hover:bg-teal-600 hover:text-white"
            >
              <MdArrowForwardIos size={22} />
            </button>
          )}

          {/* Modal box */}
          <div onClick={e => e.stopPropagation()} className="bg-white rounded-xl shadow-xl max-w-[90vw] w-full md:w-[800px] max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative">
            <button
              className="absolute top-4 right-4 bg-white text-black text-2xl px-2 rounded-full hover:bg-gray-100 shadow"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="w-full md:w-1/2 bg-black flex items-center justify-center cursor-pointer relative" onClick={() => setZoomedImage(true)}>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-[400px] object-contain p-4" />
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">{selectedProduct.name}</h2>
                <p className="text-sm text-gray-700 mb-3">{selectedProduct.description}</p>
                <div className="flex flex-wrap mb-5">
                  {selectedProduct.specs.map((s, i) => (
                    <span key={i} className="text-sm mr-[5px] mb-2">{s}</span>
                  ))}
                </div>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-900" onClick={handleContactScroll}>
                Contact Us
              </Button>
            </div>
          </div>

          {/* Zoom Image Modal */}
          {zoomedImage && (
            <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex justify-center items-center p-4" onClick={handleZoomClose}>
              <div className="relative max-w-[90vw] max-h-[90vh] w-full">
                <button className="absolute top-4 right-4 z-50 bg-black bg-opacity-70 text-white text-3xl rounded-full px-3 py-1" onClick={handleZoomClose}>
                  ×
                </button>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="object-contain w-full h-auto max-h-[90vh]" />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
