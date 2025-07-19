import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

// Add consistent category names for filtering
const products: Product[] = [
  { id: 1, name: "Gym Foam Roller", category: "rolls", image: roller1, description: "High-quality rubber roller for comfort and durability.", specs: ["comfortable", "custom thickness", "easy maintenance"] },
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring.", specs: ["sound insulation", "impact protection", "multi-thickness"] },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints.", specs: ["eco-friendly", "non-slip", "printable"] },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics.", specs: ["high density foam", "shock absorption"] },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas.", specs: ["waterproof", "anti-fungal", "non-slip"] },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors.", specs: ["easy to install", "shock resistant", "custom colors"] },
  { id: 7, name: "Custom Yoga Mat 2X4", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes.", specs: ["durable", "custom sizes", "non-slip"] }
];

const categories: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "tiles", label: "Tiles" },
  { key: "mats", label: "Mats" },
  { key: "rolls", label: "Rolls" }
];

export default function ProductShowcase(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* FILTERS */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={
                "px-6 py-2 rounded-full font-semibold focus:outline-none text-base transition-all duration-150 " +
                (filter === cat.key
                  ? "bg-white text-teal-600 shadow"
                  : "bg-teal-600 text-white hover:bg-teal-700")
              }
              style={{minWidth:100}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Title/intro */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group max-w-[95vw] sm:max-w-xs w-full hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer m-0"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-black my-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i}>• {spec}</li>
                  ))}
                </ul>
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-700 w-full mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* MODAL POPUP */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-2"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="
                relative w-full max-w-md md:max-w-4xl bg-white rounded-xl shadow-lg
                flex flex-col md:flex-row h-[92vh] md:h-[480px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{maxWidth:'98vw'}}
            >
              {/* Image */}
              <div
                onClick={() => setZoomed(true)}
                className="relative w-full md:w-1/2 h-56 md:h-full group cursor-pointer bg-black flex items-center justify-center overflow-hidden"
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain md:object-cover rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl"
                  style={{background:'#111'}}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-45 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  View Image
                </div>
              </div>
              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-6 overflow-auto">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{selectedProduct.name}</h3>
                  <p className="text-gray-700 mb-3">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="bg-black text-white hover:bg-gray-900 mt-2 w-full"
                  onClick={handleContactScroll}
                >
                  Contact Us
                </Button>
              </div>
              {/* Close ('x') */}
              <button
                aria-label="Close"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-3 md:top-3 md:right-4 text-2xl text-gray-600 hover:text-black z-10 w-9 h-9 flex items-center justify-center bg-white bg-opacity-70 rounded-full shadow"
                style={{lineHeight:0}}
              >&times;</button>
            </div>
          </div>
        )}

        {/* ZOOMED IMAGE VIEW */}
        {zoomed && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
            onClick={() => setZoomed(false)}
          >
            <div
              className="relative w-auto max-h-[80vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomed(false)}
                aria-label="Close"
                className="absolute top-2 right-2 text-white text-2xl z-10 p-2 bg-black bg-opacity-60 rounded-full"
              >&times;</button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[80vh] w-auto object-contain rounded-md"
                loading="lazy"
              />
              <h4 className="text-white text-center text-lg font-semibold mt-4">
                {selectedProduct.name}
              </h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
