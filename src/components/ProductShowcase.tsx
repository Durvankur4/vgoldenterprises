import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layers } from "lucide-react";

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

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our Gym Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            High-performance flooring, mats, and accessories tailored to every workout space.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => openPopup(product)}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-yellow-600 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Layers className="h-10 w-10 text-yellow-600" />
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                </div>
                <CardTitle className="text-xl text-black">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPopup(product);
                  }}
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6"
            onClick={closePopup}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row mx-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image on Left */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details on Right */}
              <div className="w-full md:w-1/2 p-4 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-4">{selectedProduct.name}</h4>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {selectedProduct.specs.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    onClick={closePopup}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black w-full sm:w-1/2"
                  >
                    Close
                  </Button>
                  <Link to="/contact" className="w-full sm:w-1/2">
                    <Button className="w-full bg-black text-white hover:bg-gray-900">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
