import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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

const ProductShowcase = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const products = [
    {
      id: 1,
      name: "Gym Foam Roller",
      category: "rolls",
      price: "/each",
      image: roller1,
      specs: ["Comfortable", "Custom Thickness", "Easy Maintenance"],
      description:
        "High-quality rubber roller designed for comfort and durability, perfect for various gym applications."
    },
    {
      id: 2,
      name: "Rubber Roll Tile – Heavy Duty Flooring",
      category: "rolls",
      price: "/each",
      image: roll1,
      specs: ["Sound insulation", "Impact protection", "2,4,5,6,10,12 mm thickness"],
      description:
        "Heavy-duty black rubber roll tile with anti-slip surface, ideal for gym and industrial flooring."
    },
    {
      id: 3,
      name: "Custom Yoga Mat 2X6",
      category: "mats",
      price: "/each",
      image: mat3,
      specs: ["Eco-friendly", "Non-slip", "Custom print"],
      description:
        "High-quality yoga mat made with eco-friendly materials, available in customizable prints and sizes."
    },
    {
      id: 4,
      name: "Crash Mat",
      category: "mats",
      price: "/each",
      image: mat1,
      specs: ["High density foam", "Shock absorption"],
      description:
        "Crash mats perfect for functional training zones, gymnastics or high-impact workouts."
    },
    {
      id: 5,
      name: "Poolside Mat",
      category: "mats",
      price: "/each",
      image: mat2,
      specs: ["Waterproof", "Anti-fungal", "Non-slip"],
      description:
        "Durable poolside mats with water-resistant and anti-fungal features, suitable for wet areas."
    },
    {
      id: 6,
      name: "Interlock Tile Mat",
      category: "tiles",
      price: "/sqft",
      image: tile1,
      specs: ["Easy to install", "Shock resistant", "Custom color options"],
      description:
        "Interlocking gym tiles offering easy installation, available in custom colors and textures."
    },
    {
      id: 7,
      name: "Custom Yoga Mat 2X4",
      category: "mats",
      price: "/each",
      image: mat4,
      specs: ["Eco-friendly", "Non-slip", "Custom Material"],
      description:
        "High-quality yoga mat made with durable materials, available in customizable sizes."
    }
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {["all", "rolls", "mats", "tiles"].map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-xl transition duration-300">
            <button
              onClick={() => handleViewDetails(product)}
              className="overflow-hidden rounded-t-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              />
            </button>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-2 capitalize">
                {product.category}
              </Badge>
              <p className="text-sm text-muted-foreground mb-2">
                {product.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductShowcase;
