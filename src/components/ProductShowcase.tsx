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

function getIndexById(id: number, list: Product[]) {
  return list.findIndex((p) => p.id === id);
}

export default function ProductShowcase(): JSX.Element {
  const [selectedCardIdx, setSelectedCardIdx] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  // Find product index in filteredProducts for prev/next
  const currentIndex = selectedProduct ? getIndexById(selectedProduct.id, filteredProducts) : -1;

  // --- Mobile carousel logic ---
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (idx: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const target = container.children[idx] as HTMLElement;
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const goMobilePrev = () => {
    if (selectedCardIdx !== null && selectedCardIdx > 0) {
      setSelectedCardIdx(selectedCardIdx - 1);
      scrollToCard(selectedCardIdx - 1);
    }
  };
  const goMobileNext = () => {
    if (selectedCardIdx !== null && selectedCardIdx < filteredProducts.length - 1) {
      setSelectedCardIdx(selectedCardIdx + 1);
      scrollToCard(selectedCardIdx + 1);
    }
  };

  // --- Contact Us ---
  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  // --- Card select logic (activate, popup, etc.) ---
  const handleCardSelect = (product: Product, idx: number) => {
    setSelectedCardIdx(idx);
    setSelectedProduct(product);
    scrollToCard(idx);
  };

  // --- Modal navigation (desktop & mobile) ---
  const goPrev = () => {
    if (selectedProduct && currentIndex > 0) {
      setSelectedProduct(filteredProducts[currentIndex - 1]);
      setSelectedCardIdx(currentIndex - 1);
      scrollToCard(currentIndex - 1);
    }
  };
  const goNext = () => {
    if (selectedProduct && currentIndex < filteredProducts.length - 1) {
      setSelectedProduct(filteredProducts[currentIndex + 1]);
      setSelectedCardIdx(currentIndex + 1);
      scrollToCard(currentIndex + 1);
    }
  };

  // --- UI ---
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-32">
        {/* FILTER */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setFilter(cat.key);
                setSelectedCardIdx(null);
                setSelectedProduct(null);
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

        {/* --- Mobile horizontal scroll with arrows (only when a card is selected) --- */}
        <div className="block md:hidden relative">
          {selectedCardIdx !== null && selectedCardIdx > 0 && (
            <button
              aria-label="Prev"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-gray-300"
              onClick={goMobilePrev}
            >
              <MdArrowBackIosNew size={22} className="text-teal-600" />
            </button>
          )}
          {selectedCardIdx !== null && selectedCardIdx < filteredProducts.length - 1 && (
            <button
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-gray-300"
              onClick={goMobileNext}
            >
              <MdArrowForwardIos size={22} className="text-teal-600" />
            </button>
          )}
          <div
            className="flex gap-4 w-max overflow-x-auto scroll-smooth px-1 pb-4 snap-x snap-mandatory mx-8 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            ref={mobileScrollRef}
          >
            {filteredProducts.map((product, idx) => {
              const selected = selectedCardIdx === idx;
              return (
                <Card
                  key={product.id}
                  onClick={() => handleCardSelect(product, idx)}
                  className={`min-w-[80vw] max-w-xs bg-white rounded-xl border border-gray-200 transition cursor-pointer snap-center mx-2
                  ${selected ? "scale-105 ring-2 ring-teal-600 shadow-xl z-20" : ""}`}
                  style={{
                    transition: "transform 0.23s cubic-bezier(.19,1,.22,1), box-shadow 0.2s",
                    zIndex: selected ? 2 : 1,
                    alignItems: "flex-start"
                  }}
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-44 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4 text-left">
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
                        setSelectedProduct(product);
                      }}
                      className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* --- Desktop: grid wrap, centered, small gap, left-aligned content --- */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {filteredProducts.map((product, idx) => {
            const selected = selectedCardIdx === idx;
            return (
              <Card
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedCardIdx(idx);
                }}
                className={`bg-white border border-gray-200 rounded-xl hover:shadow-lg cursor-pointer flex flex-col items-start transition-all
                  ${selected ? "scale-105 ring-2 ring-teal-600 shadow-2xl z-20 w-[345px] min-h-[380px]" : "hover:scale-102 w-[285px] min-h-[295px]"}`}
                style={{
                  transition: "transform 0.22s cubic-bezier(.17,.68,.43,.91), box-shadow 0.15s",
                  zIndex: selected ? 3 : 1,
                  margin: "12px"
                }}
              >
                <div className="overflow-hidden rounded-t-xl w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full ${selected ? "h-56" : "h-44"} object-cover rounded-t-xl`}
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 w-full text-left">
                  <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
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
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-3"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* --- Pop-up Modal (arrows on both views, smooth, well-padded) --- */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-1"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Go Left */}
            {currentIndex > 0 && (
              <button
                aria-label="Prev product"
                className="absolute left-2 md:left-[6vw] top-1/2 -translate-y-1/2 z-50 p-2 bg-white/80 rounded-full shadow border border-gray-300 hover:bg-teal-600 hover:text-white text-2xl transition-all"
                onClick={e => { e.stopPropagation(); goPrev(); }}
              >
                <MdArrowBackIosNew size={24} />
              </button>
            )}
            {/* Go Right */}
            {currentIndex < filteredProducts.length - 1 && (
              <button
                aria-label="Next product"
                className="absolute right-2 md:right-[6vw] top-1/2 -translate-y-1/2 z-50 p-2 bg-white/80 rounded-full shadow border border-gray-300 hover:bg-teal-600 hover:text-white text-2xl transition-all"
                onClick={e => { e.stopPropagation(); goNext(); }}
              >
                <MdArrowForwardIos size={24} />
              </button>
            )}
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
                style={{ minHeight: 212, maxHeight: 400 }}
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
