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

const getIndexById = (id: number, list: Product[]) => list.findIndex((p) => p.id === id);

export default function ProductShowcase(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const currentIndex = selectedProduct
    ? getIndexById(selectedProduct.id, filteredProducts)
    : -1;

  // --- Mobile horizontal scroll and arrows logic ---
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollToCard = (idx: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const card = container.children[idx] as HTMLElement;
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setScrollIndex(idx);
  };

  const goMobilePrev = () => {
    if (scrollIndex > 0) {
      scrollToCard(scrollIndex - 1);
    }
  };
  const goMobileNext = () => {
    if (scrollIndex < filteredProducts.length - 1) {
      scrollToCard(scrollIndex + 1);
    }
  };

  // --- Popup arrows (desktop & mobile) ---
  const goPrev = () => {
    if (selectedProduct && currentIndex > 0) {
      setSelectedProduct(filteredProducts[currentIndex - 1]);
    }
  };
  const goNext = () => {
    if (selectedProduct && currentIndex < filteredProducts.length - 1) {
      setSelectedProduct(filteredProducts[currentIndex + 1]);
    }
  };

  // --- Contact Us ---
  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  // --- Card select/reset logic for grow/active effect ---
  const handleCardSelect = (product: Product, idx: number) => {
    setSelectedProduct(product);
    setSelectedCardId(product.id);
    setScrollIndex(idx);
  };

  // --- Render ---
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* FILTER */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setFilter(cat.key);
                setSelectedCardId(null);
                setScrollIndex(0);
              }}
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
        {/* --- Mobile horizontal scroll with arrows --- */}
        <div className="block md:hidden relative">
          <button
            aria-label="Prev"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-gray-300 ${scrollIndex === 0 ? "opacity-40 pointer-events-none" : ""}`}
            onClick={goMobilePrev}
          >
            <MdArrowBackIosNew size={22} className="text-teal-600" />
          </button>
          <button
            aria-label="Next"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-gray-300 ${scrollIndex === filteredProducts.length - 1 ? "opacity-40 pointer-events-none" : ""}`}
            onClick={goMobileNext}
          >
            <MdArrowForwardIos size={22} className="text-teal-600" />
          </button>
          <div
            className="flex gap-4 w-max overflow-x-auto scroll-smooth px-1 pb-4 snap-x snap-mandatory scrollbar-hide mx-8"
            ref={mobileScrollRef}
            style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
          >
            {filteredProducts.map((product, idx) => (
              <Card
                key={product.id}
                onClick={() => handleCardSelect(product, idx)}
                className={`min-w-[78vw] max-w-xs bg-white rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer snap-center mx-2
                ${selectedCardId === product.id ? "scale-105 ring-2 ring-teal-600 shadow-xl z-20" : "hover:scale-102"}`}
                style={{
                  transition: "transform 0.2s cubic-bezier(.19,1,.22,1), box-shadow 0.15s",
                  zIndex: selectedCardId === product.id ? 2 : 1
                }}
              >
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-44 object-cover transition-all duration-200 ${selectedCardId === product.id ? "rounded-lg" : ""}`}
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
                        className="bg-white text-teal-700 border border-teal-600 text-xs px-2 py-1 rounded shadow-sm"
                      >{s}</span>
                    ))}
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardSelect(product, idx);
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
        {/* --- Desktop grid wrap, center aligned --- */}
        <div className="hidden md:flex flex-wrap justify-center gap-7">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedCardId(product.id);
              }}
              className={`bg-white border border-gray-200 rounded-xl hover:shadow-lg cursor-pointer flex flex-col items-center mb-7 transition-all
                ${selectedCardId === product.id
                  ? "scale-105 ring-2 ring-teal-600 shadow-2xl z-20 w-[350px] min-h-[400px]"
                  : "hover:scale-102 w-[300px] min-h-[320px]"}`}
              style={{
                transition: "transform 0.22s cubic-bezier(.17,.68,.43,.91), box-shadow 0.15s",
                zIndex: selectedCardId === product.id ? 2 : 1,
                margin: "18px"
              }}
            >
              <div className="overflow-hidden rounded-t-xl w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full ${selectedCardId === product.id ? "h-60" : "h-52"} object-cover transition-all duration-200`}
                  loading="lazy"
                  style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                />
              </div>
              <CardContent className="p-4 w-full">
                <h3 className="text-lg font-semibold text-black mb-2 text-center">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">{product.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {product.specs.map((s, i) => (
                    <span
                      key={i}
                      className="bg-white text-teal-700 border border-teal-600 text-xs px-2 py-1 rounded shadow-sm"
                    >{s}</span>
                  ))}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                    setSelectedCardId(product.id);
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-3"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* --- Pop-up Modal (arrows on both views, smooth, well-padded) --- */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-1"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Go Left (all screens) */}
            <button
              aria-label="Prev product"
              className={`absolute left-2 md:left-[6vw] top-1/2 -translate-y-1/2 z-50 p-2 bg-white/80 rounded-full shadow border border-gray-300 hover:bg-teal-600 hover:text-white text-2xl transition-all
              ${currentIndex <= 0 ? "opacity-40 pointer-events-none" : "text-teal-600"}`}
              onClick={e => { e.stopPropagation(); goPrev(); }}
              disabled={currentIndex <= 0}
            >
              <MdArrowBackIosNew size={24} />
            </button>
            {/* Go Right (all screens) */}
            <button
              aria-label="Next product"
              className={`absolute right-2 md:right-[6vw] top-1/2 -translate-y-1/2 z-50 p-2 bg-white/80 rounded-full shadow border border-gray-300 hover:bg-teal-600 hover:text-white text-2xl transition-all
              ${currentIndex >= filteredProducts.length - 1 ? "opacity-40 pointer-events-none" : "text-teal-600"}`}
              onClick={e => { e.stopPropagation(); goNext(); }}
              disabled={currentIndex >= filteredProducts.length - 1}
            >
              <MdArrowForwardIos size={24} />
            </button>
            <div
              className="relative w-full max-w-lg sm:max-w-2xl md:max-w-[70vw] lg:max-w-[52vw] bg-white h-auto max-h-[93vh] rounded-lg shadow-xl mx-auto flex flex-col md:flex-row overflow-hidden"
              onClick={e => e.stopPropagation()}
              style={{margin:"24px"}}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl z-20 bg-white bg-opacity-80 rounded-full p-1 shadow"
                aria-label="Close"
              >&times;</button>
              {/* Image */}
              <div
                className="relative group w-full md:w-1/2 h-56 md:h-auto cursor-pointer flex items-center justify-center bg-black"
                style={{ minHeight: 212, maxHeight: 400}}
                onClick={() => setZoomed(true)}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain md:object-cover"
                  loading="lazy"
                  style={{ borderTopLeftRadius: 12, borderTopRightRadius: 0, borderBottomLeftRadius: 12, borderBottomRightRadius: 0 }}
                />
                <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-45 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <span className="text-base font-medium">View Image</span>
                </div>
              </div>
              {/* Details */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3">{selectedProduct.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside mb-7">
                    {selectedProduct.specs.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="bg-black text-white w-full hover:bg-gray-900 mt-2"
                  onClick={handleContactScroll}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* --- Zoomed Image Modal --- */}
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
                style={{ background: "#222" }}
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

/* 
Add this to your global CSS or tailwind.config.js (if not using a scrollbar-hide utility)
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
*/
