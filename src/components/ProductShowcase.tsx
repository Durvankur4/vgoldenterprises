import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [showZoom, setShowZoom] = useState<boolean>(false);

  const openPopup = (product: Product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);
  const openZoom = () => setShowZoom(true);
  const closeZoom = () => setShowZoom(false);

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>

        {/* Cards */}
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
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup(product);
                    }}
                    className="bg-teal-600 text-white hover:bg-teal-700"
                  >
                    View Details
                  </Button>
                  <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" className="border border-gray-300">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            onClick={closePopup}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden w-[800px] h-[500px] flex mx-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative w-1/2 h-full group cursor-pointer" onClick={openZoom}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  View Image
                </div>
              </div>

              {/* Content */}
              <div className="w-1/2 flex flex-col justify-between p-6 overflow-y-auto">
                <div>
                  <h4 className="text-2xl font-bold text-black mb-4">{selectedProduct.name}</h4>
                  <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {selectedProduct.specs.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-auto pt-4">
                  <Button onClick={closePopup} className="bg-teal-600 text-white hover:bg-teal-700 w-full">
                    Close
                  </Button>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-black text-white hover:bg-gray-900">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zoom Modal */}
        {showZoom && selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeZoom}
          >
            <div className="relative max-w-4xl w-full px-6" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 text-white text-3xl z-50"
              >
                &times;
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
