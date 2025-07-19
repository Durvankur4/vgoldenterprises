// ProductShowcase.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <section className="px-6 py-12 bg-white">
      <div className="flex justify-center gap-4 mb-10">
        { ["all","rolls","mats","tiles"].map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              className="capitalize transition-transform hover:scale-105"
              onClick={() => setFilter(cat)}
            >{cat}</Button>
        )) }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        { filtered.map(prod => (
          <Card
            key={prod.id}
            className="max-w-sm mx-auto h-full space-y-4 transition-transform hover:shadow-2xl hover:-translate-y-2"
            onClick={() => openModal(prod)}
          >
            <div className="flex justify-center bg-gray-100 p-6 rounded-t-lg">
              <img
                src={prod.image}
                alt={prod.name}
                className="h-56 object-contain"
              />
            </div>
            <CardHeader className="pt-2">
              <CardTitle className="text-center text-xl font-bold text-gray-800">
                {prod.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-gray-600 mb-4">
                {prod.description}
              </p>
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                { prod.specs.map((s,i) => (
                    <Badge key={i} variant="outline" className="capitalize">
                      {s}
                    </Badge>
                )) }
              </div>
              <div className="flex justify-center gap-4">
                <Button size="sm" variant="ghost" className="px-4 py-2 transition-all hover:bg-accent hover:text-white" onClick={(e) => { e.stopPropagation(); openModal(prod); }}>
                  View Details
                </Button>
                <Link to="/contact" onClick={e => e.stopPropagation()}>
                  <Button size="sm" className="px-4 py-2 bg-accent text-white transition-colors hover:bg-accent-dark">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )) }
      </div>

      { selected && (
        <ProductDetailsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          product={selected}
        />
      ) }
    </section>
  );
}