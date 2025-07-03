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
        detailedDescription: "Our premium rubber roll flooring is engineered for high-performance fitness environments...",
        dimensions: "4ft x 25ft rolls (100 sq ft per roll)",
        thickness: "6mm, 10mm, or 20mm options",
        material: "100% recycled rubber",
        installation: "Adhesive recommended",
        warranty: "5-year warranty"
      },
      "Interlocking Tiles": {
        detailedDescription: "Versatile interlocking rubber tiles offering flexibility and durability.",
        dimensions: "24\" x 24\" tiles",
        thickness: "8mm, 12mm, or 15mm",
        material: "High-density rubber",
        installation: "No adhesive required",
        warranty: "3-year warranty"
      },
    };

    return details[product.name as keyof typeof details] || {
      detailedDescription: product.description,
      dimensions: "Contact for specifications",
      thickness: "Multiple options available",
      material: "Premium materials",
      installation: "Professional installation available",
      warranty: "Standard warranty"
    };
  };

  const details = getProductDetails(product);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md sm:max-w-lg lg:max-w-3xl mx-auto rounded-2xl p-0 overflow-hidden bg-white"
      >
        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 text-center">
              {product.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

            {/* Product Image and Badges */}
            <div className="space-y-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 sm:h-64 object-cover rounded-lg shadow"
              />
              <div className="flex justify-between items-center">
                <Badge className="bg-teal-600 text-white text-sm px-3 py-1">
                  {product.price}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {product.category.toUpperCase()}
                </Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Description</h3>
                <p className="text-gray-600">{details.detailedDescription}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                <div><strong>Dimensions:</strong> {details.dimensions}</div>
                <div><strong>Thickness:</strong> {details.thickness}</div>
                <div><strong>Material:</strong> {details.material}</div>
                <div><strong>Installation:</strong> {details.installation}</div>
                <div><strong>Warranty:</strong> {details.warranty}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                  onClick={handleScrollToContact}
                >
                  Get Quote
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300"
                  onClick={handleScrollToContact}
                >
                  Contact Us
                </Button>
              </div>

            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
