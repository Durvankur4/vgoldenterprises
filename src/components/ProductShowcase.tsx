import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// Images
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

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState("all");
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const filteredProducts = filter === "all"
    ? products
    : products.filter(p => p.category === filter);
  const currentIndex = selectedProduct
    ? filteredProducts.findIndex((p) => p.id === selectedProduct.id)
    : -1;
  
  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedCardId(product.id);
  };

  const goNext = () => {
    if (selectedProduct && currentIndex < filteredProducts.length - 1) {
      const next = filteredProducts[currentIndex + 1];
      setSelectedProduct(next);
      setSelectedCardId(next.id);
    }
  };

  const goPrev = () => {
    if (selectedProduct && currentIndex > 0) {
      const prev = filteredProducts[currentIndex - 1];
      setSelectedProduct(prev);
      setSelectedCardId(prev.id);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "products-container") {
      setSelectedCardId(null);
      setSelectedProduct(null);
    }
  };

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100" onClick={handleBackgroundClick}>
      <div className="container mx-auto px-6 sm:px-12 lg:px-32">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>

          {/* Filters below the paragraph */}
          <div className="flex justify-center flex-wrap gap-2 mb-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => {
                  setFilter(cat.key);
                  setSelectedCardId(null);
                  setSelectedProduct(null);
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all 
                  ${filter === cat.key
                  ? "bg-white text-teal-600 shadow"
                  : "bg-teal-600 text-white hover:bg-teal-700"}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div id="products-container" className="flex flex-wrap justify-center gap-4 sm:gap-4 -mx-2">
          {filteredProducts.map((product) => {
            const selected = selectedCardId === product.id;
            return (
              <div
                key={product.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(product);
                }}
                className={`transition-all duration-300 cursor-pointer rounded-xl border border-gray-200 bg-white 
                  ${selected ? "w-[350px] shadow-xl scale-105 ring-2 ring-teal-600" : "w-[260px]"} 
                  hover:shadow-md`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 md:h-48 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <CardContent className="p-4 text-left">
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-white border border-teal-600 text-teal-700 text-xs px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                    View Details
                  </Button>
                </CardContent>
              </div>
            );
          })}
        </div>

        {/* Arrows Only When Modal Is Open */}
        {selectedProduct && (
          <>
            {/* Left Arrow */}
            {currentIndex > 0 && (
              <button
                aria-label="Prev product"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white bg-opacity-80 rounded-full shadow border hover:bg-teal-600 hover:text-white text-2xl transition-all"
              >
                <MdArrowBackIosNew />
              </button>
            )}
            {/* Right Arrow */}
            {currentIndex < filteredProducts.length - 1 && (
              <button
                aria-label="Next product"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white bg-opacity-80 rounded-full shadow border hover:bg-teal-600 hover:text-white text-2xl transition-all"
              >
                <MdArrowForwardIos />
              </button>
            )}
            {/* Modal */}
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
              onClick={() => setSelectedProduct(null)}
            >
              <div
                className="relative w-full max-w-lg md:max-w-3xl bg-white rounded-lg overflow-hidden flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 text-gray-700 bg-white bg-opacity-80 rounded-full shadow-md p-1 text-xl"
                  aria-label="Close"
                >
                  &times;
                </button>

                {/* Image */}
                <div className="md:w-1/2 bg-black flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain max-h-[350px]"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {selectedProduct.description}
                    </p>
                    <ul className="text-sm list-disc pl-4 text-gray-600 space-y-1 mb-6">
                      {selectedProduct.specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={handleContactScroll} className="w-full bg-black text-white hover:bg-gray-900">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
