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

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState(false);

  const filteredProducts = products; // currently showing all
  const currentIndex = selectedProduct ? filteredProducts.findIndex(p => p.id === selectedProduct.id) : -1;

  const goNext = () => {
    if (selectedProduct && currentIndex < filteredProducts.length - 1) {
      setSelectedProduct(filteredProducts[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (selectedProduct && currentIndex > 0) {
      setSelectedProduct(filteredProducts[currentIndex - 1]);
    }
  };

  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="relative bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Gym Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>

        {/* Horizontal scroll only on mobile */}
        <div className="block md:hidden relative">
          <div className="overflow-x-auto flex-nowrap snap-x snap-mandatory flex gap-4 pb-6 pl-4 pr-1 -mx-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="min-w-[85vw] relative snap-center flex-shrink-0 bg-white rounded-xl border border-gray-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <CardContent className="p-4 text-left pb-20">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((s, i) => (
                      <span
                        key={i}
                        className="bg-white text-teal-600 border border-teal-600 text-xs px-2 py-1 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <div className="absolute bottom-4 left-4 right-4">
                  <Button
                    className="w-full bg-teal-600 text-white hover:bg-teal-700"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop cards in loose wrap */}
        <div className="hidden md:flex md:flex-wrap md:justify-center gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-[270px] relative bg-white rounded-xl border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <CardContent className="p-4 text-left pb-20">
                <h3 className="text-lg font-semibold text-black mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((s, i) => (
                    <span
                      key={i}
                      className="bg-white text-teal-600 border border-teal-600 text-xs px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  className="w-full bg-teal-600 text-white hover:bg-teal-700"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Go Left Button */}
          {currentIndex > 0 && (
            <button
              aria-label="Prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full text-teal-600 shadow hover:bg-teal-600 hover:text-white"
            >
              <MdArrowBackIosNew size={22} />
            </button>
          )}

          {/* Go Right Button */}
          {currentIndex < products.length - 1 && (
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-full text-teal-600 shadow hover:bg-teal-600 hover:text-white"
            >
              <MdArrowForwardIos size={22} />
            </button>
          )}

          {/* Modal Content */}
          <div
            className="bg-white rounded-xl shadow-xl max-w-[90vw] w-full md:w-[800px] max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
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
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 font-medium">View Image</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">{selectedProduct.name}</h2>
                <p className="text-sm text-gray-700 mb-3">{selectedProduct.description}</p>
                <ul className="text-sm list-disc list-inside text-gray-600 space-y-1 mb-5">
                  {selectedProduct.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
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
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      {zoomedImage && selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex justify-center items-center p-4"
          onClick={() => setZoomedImage(false)}
        >
          <div className="relative max-w-[90vw] w-full max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-white bg-opacity-20 rounded-full p-2"
              onClick={() => setZoomedImage(false)}
              aria-label="Close Zoom"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
