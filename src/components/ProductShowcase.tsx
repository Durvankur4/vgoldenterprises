import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Images (adjust paths if needed)
import mat1 from "../images/products/crash-mat-1.jpg";
import mat2 from "../images/products/pool-mat-1.jpg";
import mat3 from "../images/products/custom-yoga-mat-1.jpg";
import mat4 from "../images/products/custom-yoga-mat-2.png";
import tile1 from "../images/products/tile-1.jpg";
import roll1 from "../images/products/rubber-roll-tile-2.jpg";
import roller1 from "../images/products/roller-1.webp";

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

const products: Product[] = [
  { id: 1, name: "Gym Foam Roller", category: "rolls", image: roller1, description: "High-quality rubber roller for comfort and durability.", specs: ["comfortable", "custom thickness", "easy maintenance"] },
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring.", specs: ["sound insulation", "impact protection", "multi-thickness"] },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints.", specs: ["eco-friendly", "non-slip", "printable"] },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics.", specs: ["high density foam", "shock absorption"] },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas.", specs: ["waterproof", "anti-fungal", "non-slip"] },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors.", specs: ["easy to install", "shock resistant", "custom colors"] },
  { id: 7, name: "Custom Yoga Mat 2X4", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes.", specs: ["durable", "custom sizes", "non-slip"] }
];

const categories = [
  { key: "all", label: "All" },
  { key: "tiles", label: "Tiles" },
  { key: "mats", label: "Mats" },
  { key: "rolls", label: "Rolls" }
];

// Helper to get the index of a product
const getIndexById = (id: number, list: Product[]) => list.findIndex((p) => p.id === id);

export default function ProductShowcase(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const currentIndex = selectedProduct
    ? getIndexById(selectedProduct.id, filteredProducts)
    : -1;

  // Next/Prev navigation
  const goPrev = () => {
    if (currentIndex > 0) setSelectedProduct(filteredProducts[currentIndex - 1]);
  };
  const goNext = () => {
    if (currentIndex < filteredProducts.length - 1) setSelectedProduct(filteredProducts[currentIndex + 1]);
  };

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* FILTER */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filter === cat.key
                  ? "bg-white text-teal-600 shadow"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Title */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>
        {/* Product Grid/Carousel */}
        {/* Mobile: horizontal scroll, snap. Desktop: grid */}
        <div>
          <div className="block md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
               style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}>
            <div className="flex gap-5 w-max">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="min-w-[80vw] max-w-xs bg-white rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer snap-center"
                  style={{ scrollSnapAlign: 'center'}}
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((s, i) => (
                        <span
                          key={i}
                          className="bg-teal-600 text-white text-xs px-2 py-1 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-white rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer"
              >
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((s, i) => (
                      <span
                        key={i}
                        className="bg-teal-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Modal Pop-up */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-1"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Left Arrow */}
            <button
              className="hidden md:flex absolute left-[2vw] top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 bg-white bg-opacity-60 hover:bg-teal-600 hover:text-white text-3xl text-gray-700 rounded-full shadow-lg z-50 transition-all border border-gray-200"
              style={{ outline: 'none', boxShadow: '0 1px 8px rgba(0,0,0,0.12)' }}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              disabled={currentIndex <= 0}
              aria-label="Previous Product"
            >
              <span>‹</span>
            </button>
            {/* Right Arrow */}
            <button
              className="hidden md:flex absolute right-[2vw] top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 bg-white bg-opacity-60 hover:bg-teal-600 hover:text-white text-3xl text-gray-700 rounded-full shadow-lg z-50 transition-all border border-gray-200"
              style={{ outline: 'none', boxShadow: '0 1px 8px rgba(0,0,0,0.12)' }}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              disabled={currentIndex >= filteredProducts.length - 1}
              aria-label="Next Product"
            >
              <span>›</span>
            </button>
            <div
              className="relative w-full max-w-md sm:max-w-2xl md:max-w-[60vw] lg:max-w-[45vw] bg-white h-auto max-h-[90vh] rounded-lg shadow-lg mx-auto flex flex-col md:flex-row overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl z-10 bg-white bg-opacity-80 rounded-full p-1 shadow"
                aria-label="Close"
              >
                &times;
              </button>
              {/* Image */}
              <div
                className="relative group w-full md:w-1/2 h-56 md:h-auto cursor-pointer bg-black flex items-center justify-center"
                style={{ minHeight: '240px', maxHeight: '440px'}}
                onClick={() => setZoomed(true)}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full md:h-[430px] object-contain md:object-cover"
                  loading="lazy"
                  style={{ background: '#eee', maxHeight: 440, borderRadius: '0.75rem 0.75rem 0 0' }}
                />
                <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <span className="text-base font-medium">View Image</span>
                </div>
              </div>
              {/* Details */}
              <div className="w-full md:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3">{selectedProduct.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside mb-6">
                    {selectedProduct.specs.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="bg-black text-white w-full hover:bg-gray-900"
                  onClick={handleContactScroll}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* Zoomed Image */}
        {zoomed && selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
            onClick={() => setZoomed(false)}
          >
            <div
              className="relative w-auto max-h-[95vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomed(false)}
                className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-60 rounded-full h-11 w-11 flex items-center justify-center"
                aria-label="Close Zoom"
              >
                &times;
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[80vh] w-auto object-contain rounded-md"
                loading="lazy"
              />
              <h4 className="text-white text-lg text-center font-medium mt-4">
                {selectedProduct.name}
              </h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Hide scrollbars utility (Tailwind: scrollbar-hide)
// Add this to your global CSS if not using a utility plugin
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
