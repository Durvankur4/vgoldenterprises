import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  specs: string[];
  description: string;
  detailedDescription?: string;
  dimensions?: string;
  thickness?: string;
  material?: string;
  installation?: string;
  warranty?: string;
}

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal = ({ product, isOpen, onClose }: ProductDetailsModalProps) => {
  if (!product) return null;

  const getProductDetails = (product: Product) => {
    const details = {
      "Rubber Roll Flooring": {
        detailedDescription: "Our premium rubber roll flooring is engineered for high-performance fitness environments. Made from 100% recycled rubber, it provides exceptional durability and comfort for weightlifting, cardio, and functional training areas.",
        dimensions: "4ft x 25ft rolls (100 sq ft per roll)",
        thickness: "6mm, 8mm, or 10mm options",
        material: "100% recycled rubber with vulcanized surface",
        installation: "Adhesive installation recommended for permanent setup",
        warranty: "5-year commercial warranty"
      },
      "Interlocking Tiles": {
        detailedDescription: "Versatile interlocking rubber tiles that offer the perfect balance of durability and ease of installation. Ideal for home gyms and commercial facilities that need flexible flooring solutions.",
        dimensions: "24\" x 24\" tiles (4 sq ft per tile)",
        thickness: "8mm, 12mm, or 15mm options",
        material: "High-density rubber with interlocking edges",
        installation: "No adhesive required - simple interlocking system",
        warranty: "3-year residential, 2-year commercial warranty"
      },
      "Competition Mats": {
        detailedDescription: "Professional-grade mats designed to meet international competition standards. Perfect for weightlifting platforms, powerlifting areas, and serious training environments.",
        dimensions: "8ft x 8ft platform mats",
        thickness: "15mm high-density core",
        material: "Virgin rubber with non-slip textured surface",
        installation: "Temporary placement or permanent adhesive installation",
        warranty: "10-year competition grade warranty"
      },
      "Heavy-Duty Rolls": {
        detailedDescription: "Industrial-strength rubber flooring designed for the most demanding commercial gym environments. Built to withstand heavy equipment and high-traffic areas.",
        dimensions: "6ft x 50ft rolls (300 sq ft per roll)",
        thickness: "12mm or 15mm ultra-heavy duty",
        material: "Premium virgin rubber with reinforced backing",
        installation: "Professional installation recommended",
        warranty: "10-year commercial warranty"
      },
      "Puzzle Floor Tiles": {
        detailedDescription: "Budget-friendly EVA foam tiles that provide comfort and protection for light to moderate exercise routines. Perfect for yoga, pilates, and home workout spaces.",
        dimensions: "24\" x 24\" tiles (4 sq ft per tile)",
        thickness: "12mm EVA foam",
        material: "High-quality EVA foam with puzzle-edge design",
        installation: "Easy DIY installation - no tools required",
        warranty: "1-year residential warranty"
      },
      "Yoga & Stretching Mats": {
        detailedDescription: "Extra-thick exercise mats designed for floor-based workouts, yoga, pilates, and stretching routines. Provides superior cushioning and joint protection.",
        dimensions: "6ft x 4ft individual mats",
        thickness: "20mm extra-thick cushioning",
        material: "Non-toxic NBR foam with easy-clean surface",
        installation: "Portable - no installation required",
        warranty: "2-year warranty against defects"
      }
    };

    return details[product.name as keyof typeof details] || {
      detailedDescription: product.description,
      dimensions: "Contact for specifications",
      thickness: "Multiple options available",
      material: "Premium gym-grade materials",
      installation: "Professional installation available",
      warranty: "Standard warranty included"
    };
  };

  const details = getProductDetails(product);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex justify-between items-center">
              <Badge className="bg-red-600 text-white text-lg px-3 py-1">
                {product.price}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Category: {product.category}
              </Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
              <p className="text-gray-600">{details.detailedDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 text-sm">
              <div>
                <span className="font-semibold text-slate-900">Dimensions:</span>
                <span className="text-gray-600 ml-2">{details.dimensions}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Thickness:</span>
                <span className="text-gray-600 ml-2">{details.thickness}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Material:</span>
                <span className="text-gray-600 ml-2">{details.material}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Installation:</span>
                <span className="text-gray-600 ml-2">{details.installation}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Warranty:</span>
                <span className="text-gray-600 ml-2">{details.warranty}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                Get Quote
              </Button>
              <Button variant="outline" className="flex-1">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    );
  };
  
  export default ProductDetailsModal;