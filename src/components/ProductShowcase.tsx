import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
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
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring.", specs: ["sound insulation", "impact protection", "multi-thickness (2,4,5,6,8,10,12 mm)"] },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints.", specs: ["eco-friendly", "non-slip", "custom"] },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics.", specs: ["high density foam", "shock absorption"] },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas.", specs: ["waterproof", "anti-fungal", "non-slip"] },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors.", specs: ["easy to install", "shock resistant", "custom colors"] },
  { id: 7, name: "Custom Foldable Yoga Mat 2X6", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes.", specs: ["durable", "custom sizes", "foldable"] }
];

const categories = [
  { key: "all", label: "All" },
  { key: "tiles", label: "Tiles" },
  { key: "mats", label: "Mats" },
  { key: "rolls", label: "Rolls" }
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState(false);
  const [filter, setFilter] = useState("all");
  const [zoomFadeOut, setZoomFadeOut] = useState(false);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const currentIndex = selectedProduct
    ? filteredProducts.findIndex((p) => p.id === selectedProduct.id)
    : -1;

  // For smooth horizontal scrolling on mobile, set scroll behavior directly on effect:
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

  // Smooth scroll to contact by using native smooth behavior
  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setSelectedProduct(null);
      setZoomedImage(false);
    }, 300); // allow scroll to finish, then close modal
  };

  // For smooth fade out on zoom close
  const handleZoomClose = () => {
    setZoomFadeOut(true);
    setTimeout(() => {
      setZoomedImage(false);
      setZoomFadeOut(false);
    }, 210); // match transition duration
  };

  return (
    <section id="products" className="relative bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Gym Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
          {/* Filters */}
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
                    ? "bg-white text-teal-600 shadow"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile - Horizontal Scroll with smooth behavior */}
        <div className="block md:hidden overflow-x-auto pb-4" style={{ scrollBehavior: "smooth" }}>
          <div className="flex gap-2 px-2 w-max" ref={mobileScrollRef}>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="w-[260px] h-[380px] rounded-xl shadow-sm border border-gray-200 flex-shrink-0 relative"
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-xl" />
                <CardContent className="p-4 pb-20 text-left">
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                  <div className="flex flex-wrap gap-3 my-3">
                    {product.specs.map((s, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-black/60 text-white opacity-90 text-sm font-bold px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      className="w-full bg-teal-600 text-white hover:bg-teal-700"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop - Gridless Wrap */}
        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="w-[260px] h-[380px] rounded-xl shadow-sm border border-gray-200 relative"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-xl" />
              <CardContent className="p-4 pb-20 text-left">
                <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                <div className="flex flex-wrap gap-3 my-3">
                  {product.specs.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-black/60 text-white opacity-90 text-sm font-bold px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Button
                    className="w-full bg-teal-600 text-white hover:bg-teal-700"
                    onClick={() => setSelectedProduct(product)}
                  >
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
          className={"fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 transition-opacity duration-200"}
          style={{ opacity: 1, pointerEvents: 'auto' }}
          onClick={() => setSelectedProduct(null)}
        >
          {currentIndex > 0 && (
            <button
              aria-label="Prev"
              onClick={e => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full text-teal-600 shadow hover:bg-teal-600 hover:text-white"
            >
              <MdArrowBackIosNew size={22} />
            </button>
          )}
          {currentIndex < filteredProducts.length - 1 && (
            <button
              aria-label="Next"
              onClick={e => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full text-teal-600 shadow hover:bg-teal-600 hover:text-white"
            >
              <MdArrowForwardIos size={22} />
            </button>
          )}
          <div
            className="bg-white rounded-xl shadow-xl max-w-[90vw] w-full md:w-[800px] max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative transition-all duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute top-4 right-4 z-20 text-2xl bg-white hover:bg-gray-100 rounded-full px-2 shadow"
              onClick={() => setSelectedProduct(null)}
            >×</button>
            <div
              className="w-full md:w-1/2 relative group cursor-pointer bg-black"
              onClick={() => setZoomedImage(true)}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain max-h-[400px] bg-white"
              />
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-50 transition-all">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 font-medium">
                  View Image
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">{selectedProduct.name}</h2>
                <p className="text-sm text-gray-700 mb-3">{selectedProduct.description}</p>
                <ul className="text-sm list-disc list-inside text-gray-600 space-y-1 mb-5">
                  {selectedProduct.specs.map((spec, index) => (
                    <li key={index} className="font-bold text-black opacity-60">{spec}</li>
                  ))}
                </ul>
              </div>
              <Button
                className="bg-black text-white w-full mt-2 hover:bg-gray-900"
                onClick={handleContactScroll}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Zoom Modal */}
          {zoomedImage && (
            <div
              className={`fixed inset-0 z-[100] bg-black bg-opacity-90 flex justify-center items-center p-4 transition-opacity duration-200 ${
                zoomFadeOut ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handleZoomClose}
            >
              <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                <button
                  className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-70 rounded-full p-2 z-30"
                  onClick={e => {e.stopPropagation(); handleZoomClose();}}
                  aria-label="Close Zoom"
                >
                  &times;
                </button>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                  style={{ background: "#fff" }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
