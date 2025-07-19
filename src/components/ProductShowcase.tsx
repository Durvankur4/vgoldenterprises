import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Image imports
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

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const closeZoom = () => setZoomed(false);

  const openPopup = (product: Product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    closePopup();
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => openPopup(product)}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl text-black">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={(e) => {
                    e.stopPropagation();
                    openPopup(product);
                  }}>
                    View Details
                  </Button>
                  <Button variant="ghost" className="border" onClick={(e) => {
                    e.stopPropagation();
                    handleContactScroll();
                  }}>
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4"
               onClick={closePopup}>
            <div
              className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-[850px] h-screen md:h-[500px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full group cursor-pointer" onClick={() => setZoomed(true)}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  View Image
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:overflow-y-auto">
                <div>
                  <h4 className="text-2xl font-bold mb-4">{selectedProduct.name}</h4>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedProduct.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button onClick={closePopup} className="bg-teal-600 text-white hover:bg-teal-700 w-full sm:w-auto">
                    Close
                  </Button>
                  <Button
                    className="bg-black text-white w-full sm:w-auto hover:bg-gray-900"
                    onClick={handleContactScroll}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zoom Image Fullscreen */}
        {zoomed && selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4"
    onClick={closeZoom}
  >
    <div className="relative w-auto max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
      
      {/* Close (X) Button */}
      <button
        onClick={closeZoom}
        className="absolute top-3 right-3 text-white text-2xl z-10 p-1 bg-black bg-opacity-50 rounded-full"
      >
        &times;
      </button>
      
      {/* Zoomed Image */}
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="max-h-[80vh] w-auto object-contain rounded-lg"
      />

      {/* Title below image */}
      <h4 className="text-white text-center text-xl font-semibold mt-4">
        {selectedProduct.name}
      </h4>
    </div>
  </div>
)}

      </div>
    </section>
  );
}
