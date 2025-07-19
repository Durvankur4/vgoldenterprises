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

const products: Product[] = [
  { id: 1, name: "Gym Foam Roller", category: "rolls", image: roller1, description: "High-quality rubber roller for comfort and durability.", specs: ["comfortable", "custom thickness", "easy maintenance"] },
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring.", specs: ["sound insulation", "impact protection", "multi-thickness"] },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints.", specs: ["eco-friendly", "non-slip", "printable"] },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics.", specs: ["high density foam", "shock absorption"] },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas.", specs: ["waterproof", "anti-fungal", "non-slip"] },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors.", specs: ["easy to install", "shock resistant", "custom colors"] },
  { id: 7, name: "Custom Yoga Mat 2X4", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes.", specs: ["durable", "custom sizes", "non-slip"] }
];

export default function ProductShowcase(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const openPopup = (product: Product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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

        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => openPopup(product)}
              className="group max-w-[95%] sm:max-w-sm w-full hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Button
                    className="bg-teal-600 text-white hover:bg-teal-700 w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup(product);
                    }}>
                    View Details
                  </Button>
                  <Button variant="ghost" className="w-full border" onClick={(e) => {
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

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
               onClick={closePopup}>
            <div
              className="relative bg-white rounded-xl w-full max-w-xl md:max-w-4xl h-[90vh] md:h-auto overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-3 right-4 text-gray-600 text-2xl hover:text-black z-10"
              >
                &times;
              </button>

              {/* Image */}
              <div
                onClick={() => setZoomed(true)}
                className="relative w-full md:w-1/2 h-64 md:h-full group cursor-pointer"
              >
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
              <div className="w-full md:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-3">{selectedProduct.name}</h4>
                  <p className="text-gray-700 mb-3 text-sm sm:text-base">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {selectedProduct.specs.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button onClick={closePopup} className="bg-teal-600 text-white hover:bg-teal-700 w-full sm:w-auto">
                    Close
                  </Button>
                  <Button onClick={handleContactScroll} className="bg-black text-white hover:bg-gray-900 w-full sm:w-auto">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zoomed View */}
        {zoomed && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4" onClick={() => setZoomed(false)}>
            <div className="relative w-auto max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setZoomed(false)}
                className="absolute top-3 right-3 text-white text-2xl z-10 p-1 bg-black bg-opacity-60 rounded-full"
              >
                &times;
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[80vh] w-auto object-contain rounded-md"
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
