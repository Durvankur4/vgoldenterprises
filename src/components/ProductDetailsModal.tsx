import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "./ProductShowcase";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDetailsModal({
  isOpen,
  onClose,
  product
}: ProductDetailsModalProps): JSX.Element | null {
  const [zoom, setZoom] = useState(false);
  if (!product) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40" />
        <DialogContent className="fixed left-1/2 top-1/2 max-w-3xl w-[96vw] md:w-4/5 lg:w-[800px] transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-2xl p-3 md:p-5">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 transition-colors text-2xl"
            aria-label="Close"
          >×</button>

          <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-between">
            {/* Details on left / top on mobile */}
            <div className="w-full md:w-1/2 space-y-5">
              <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900">{product.name}</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.specs.map((s, i) => (
                  <Badge key={i} variant="outline" className="capitalize">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-transform hover:scale-105">
                    Get Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-3 border-blue-600 text-blue-600 hover:bg-gray-100"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
            {/* Image on right / below on mobile */}
            <div className="w-full flex justify-center md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[300px] md:max-w-[350px] h-52 md:h-72 object-contain rounded-md border border-gray-200 shadow-sm transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setZoom(true)}
                style={{ background: "#f6f8fa" }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoom modal */}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-80 z-50" />
        <DialogContent className="fixed left-1/2 top-1/2 max-w-xl w-[90vw] transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-0 z-50">
          <button
            onClick={() => setZoom(false)}
            className="absolute top-2 right-2 text-white text-3xl z-10"
            aria-label="Close"
          >×</button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded"
            style={{ background: "#f6f8fa" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
