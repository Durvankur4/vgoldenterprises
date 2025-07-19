// ProductShowcase.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  { id: 1, name: "Gym Foam Roller", category: "rolls", image: roller1, description: "High-quality rubber roller for comfort and durability." },
  { id: 2, name: "Rubber Roll Tile", category: "rolls", image: roll1, description: "Heavy-duty anti-slip roll tile for gym and industrial flooring." },
  { id: 3, name: "Custom Yoga Mat 2X6", category: "mats", image: mat3, description: "Eco-friendly non-slip yoga mat with custom prints." },
  { id: 4, name: "Crash Mat", category: "mats", image: mat1, description: "High-density crash mat for functional training and gymnastics." },
  { id: 5, name: "Poolside Mat", category: "mats", image: mat2, description: "Waterproof anti-fungal mat for wet areas." },
  { id: 6, name: "Interlock Tile Mat", category: "tiles", image: tile1, description: "Easy-install interlocking tiles in custom colors." },
  { id: 7, name: "Custom Yoga Mat 2X4", category: "mats", image: mat4, description: "Durable yoga mat in custom sizes." }
];

export default function ProductShowcase() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  const open = product => {
    setSelected(product);
    setIsOpen(true);
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-center gap-4 mb-8">
        {["all","rolls","mats","tiles"].map(cat => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >{cat.charAt(0).toUpperCase() + cat.slice(1)}</Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(prod => (
          <Card
            key={prod.id}
            className="cursor-pointer hover:shadow-xl transition p-0"
            onClick={() => open(prod)}
          >
            <div className="flex justify-center bg-white p-4 rounded-t-lg">
              <img src={prod.image} alt={prod.name} className="h-40 object-contain" />
            </div>
            <CardHeader>
              <CardTitle className="text-center text-lg font-medium">
                {prod.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                {prod.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <ProductDetailsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          product={selected}
        />
      )}
    </div>
  );
}