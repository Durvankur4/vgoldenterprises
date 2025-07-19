// ProductDetailsModal.jsx
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetailsModal({ isOpen, onClose, product }) {
  const [zoom, setZoom] = useState(false);
  if (!product) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        <DialogContent className="relative mx-auto mt-24 max-w-4xl w-11/12 bg-white rounded-xl p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors text-2xl"
          >×</button>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 cursor-pointer" onClick={() => setZoom(true)}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-contain rounded-lg border border-gray-200"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-extrabold text-blue-900">{product.name}</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-3">
                {product.specs.map((s,i) => (
                  <Badge key={i} variant="outline" className="capitalize">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-col lg:flex-row gap-4">
                <Link to="/contact">
                  <Button className="w-full lg:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-transform hover:scale-105">
                    Get Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full lg:w-auto px-6 py-3 border-blue-600 text-blue-600 hover:bg-gray-100"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-80" />
        <DialogContent className="relative mx-auto my-16 max-w-3xl w-10/12 bg-transparent p-0">
          <button
            onClick={() => setZoom(false)}
            className="absolute top-2 right-2 text-white text-3xl z-10"
          >×</button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
