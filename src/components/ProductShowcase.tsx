import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductShowcase = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
     {
      id: 1,
      name: "Rubber Roll Flooring",
      category: "rolls",
      price: "/sq ft",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Shock Absorption", "Noise Reduction", "Easy Maintenance"],
      description: "Premium gym solutions featuring professional rubber flooring perfect for weightlifting areas and cardio zones."
    },
    {
      id: 2,
      name: "Interlocking Tiles",
      category: "tiles",
      price: "/sq ft",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Easy Installation", "Modular Design", "Slip-Resistant"],
      description: "Premium gym solutions with versatile interlocking tiles for custom gym layouts and easy replacement."
    },
    {
      id: 3,
      name: "Competition Mats",
      category: "mats",
      price: "/each",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Competition Grade", "High Density", "Non-Slip Base"],
      description: "Premium gym solutions including professional-grade mats designed for serious training and competitions."
    },
    {
      id: 4,
      name: "Heavy-Duty Rolls",
      category: "rolls",
      price: "/sq ft",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Ultra Durable", "Commercial Grade", "10-Year Warranty"],
      description: "Premium gym solutions featuring heavy-duty flooring for high-traffic commercial fitness centers."
    },
    {
      id: 5,
      name: "Puzzle Floor Tiles",
      category: "tiles",
      price: "/sq ft",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Quick Assembly", "Lightweight", "Color Options"],
      description: "Premium gym solutions with affordable puzzle tiles perfect for home gyms and small spaces."
    },
    {
      id: 6,
      name: "Yoga & Stretching Mats",
      category: "mats",
      price: "₹/each",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["Extra Thick", "Non-Toxic", "Easy Clean"],
      description: "Premium gym solutions including cushioned mats designed for yoga, stretching, and floor exercises."
    }
  ];
  

  const categories = [
    { id: "all", name: "All Premium Solutions" },
    { id: "rolls", name: "Rubber Rolls" },
    { id: "tiles", name: "Tiles" },
    { id: "mats", name: "Mats" }
  ];

  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleGetQuote = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Premium Gym Solutions & Flooring
          </h2>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            Discover our complete range of premium gym solutions featuring high-performance flooring 
            designed for every type of fitness facility.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`transition-all duration-300 ${
                filter === category.id 
                  ? "bg-teal-600 hover:bg-teal-700 text-white" 
                  : "border-blue-300 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0 space-y-0">

          {/* Mobile + Tablet: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex space-x-4 w-max">
              {filteredProducts.map(product => (
                <Card key={product.id} className="w-72 flex-shrink-0 bg-white border border-blue-200 rounded-lg shadow-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-teal-600 text-white text-xs">{product.price}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-900">{product.name}</CardTitle>
                    <p className="text-sm text-blue-600">{product.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.specs.map((spec, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800 text-xs">{spec}</Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleViewDetails(product)} className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          {filteredProducts.map(product => (
            <Card key={product.id} className="hidden md:block bg-white border border-blue-200 rounded-lg shadow-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-teal-600 text-white">{product.price}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">{product.name}</CardTitle>
                <p className="text-blue-600">{product.description}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.specs.map((spec, idx) => (
                    <Badge key={idx} className="bg-blue-100 text-blue-800 text-xs">{spec}</Badge>
                  ))}
                </div>
                <Button onClick={() => handleViewDetails(product)} className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call To Action */}
        <div className="text-center mt-12">
          <Button 
  onClick={handleGetQuote}
  size="lg"
  className="bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold shadow-lg px-6 py-3 sm:px-8 sm:py-4"
>
  Get Custom Premium Solution Quote
</Button>

        </div>
      </div>

      {/* Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProductShowcase;
