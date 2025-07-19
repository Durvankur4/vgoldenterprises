// ProductShowcase.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductDetailsModal from "./ProductDetailsModal";

// Images
import mat1 from "../images/products/crash-mat-1.jpg";
import mat2 from "../images/products/pool-mat-1.jpg";
import mat3 from "../images/products/custom-yoga-mat-1.jpg";
import mat4 from "../images/products/custom-yoga-mat-2.png";
import tile1 from "../images/products/tile-1.jpg";
import roll1 from "../images/products/rubber-roll-tile-2.jpg";
import roller1 from "../images/products/roller-1.webp";

const products = [
  { id: 1, name: "Gym Foam Roller", category: "rolls", image: roller1, description: "High-quality rubber roller for comfort and durability.", specs: ["comfortable", "custom thickness", "easy maintenance"] },
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring.", specs: ["sound insulation", "impact protection", "multi-thickness"] },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints.", specs: ["eco-friendly", "non-slip", "printable"] },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics.", specs: ["high density foam", "shock absorption"] },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas.", specs: ["waterproof", "anti-fungal", "non-slip"] },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors.", specs: ["easy to install", "shock resistant", "custom colors"] },
  { id: 7, name: "Custom Yoga Mat 2X4", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes.", specs: ["durable", "custom sizes", "non-slip"] }
];

export default function ProductShowcase() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  const openModal = (product) => {
    setSelected(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 300); // optional: delay to allow animation
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 mb-8">
          {["all", "rolls", "mats", "tiles"].map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              className="capitalize transition-transform hover:scale-105"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex space-x-6 w-max">
            {filtered.map(prod => (
              <Card
                key={prod.id}
                className="min-w-[260px] max-w-[260px] flex-shrink-0 group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
                onClick={() => openModal(prod)}
              >
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">{prod.name}</h3>
                    <p className="text-blue-600 text-sm mb-4">{prod.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {prod.specs.map((s, i) => (
                        <Badge key={i} variant="outline" className="capitalize">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(prod);
                        }}
                        size="sm"
                        className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                      >
                        View Details
                      </Button>
                      <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(prod => (
            <Card
              key={prod.id}
              className="group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              onClick={() => openModal(prod)}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-blue-900 mb-2">{prod.name}</h3>
                  <p className="text-blue-600 text-sm mb-4">{prod.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prod.specs.map((s, i) => (
                      <Badge key={i} variant="outline" className="capitalize">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(prod);
                      }}
                      size="sm"
                      className="w-full lg:w-1/2 bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      View Details
                    </Button>
                    <Link to="/contact" onClick={(e) => e.stopPropagation()} className="w-full lg:w-1/2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal is always rendered; visibility controlled by `isOpen` */}
      <ProductDetailsModal
        isOpen={isOpen}
        onClose={closeModal}
        product={selected}
      />
    </section>
  );
}
