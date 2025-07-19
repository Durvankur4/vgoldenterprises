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
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogContent className="relative mx-auto mt-20 max-w-3xl w-11/12 bg-white rounded-lg p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >×</button>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 cursor-zoom-in" onClick={() => setZoom(true)}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.specs.map((s,i) => (
                  <Badge key={i} variant="secondary" className="capitalize">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Link to="/contact">
                  <Button>Get Quote</Button>
                </Link>
                <Button variant="outline" onClick={onClose}>Close</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoom Lightbox Modal */}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-75" />
        <DialogContent className="relative mx-auto my-20 max-w-xl w-10/12 bg-transparent p-0">
          <button
            onClick={() => setZoom(false)}
            className="absolute top-2 right-2 text-white text-2xl"
          >×</button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}