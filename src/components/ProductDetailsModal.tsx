import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

export default function ProductDetailsModal({ isOpen, onClose, product }) {
  const [zoom, setZoom] = useState(false);

  if (!product) return null;

  return (
    <>
      {/* Main Detail Modal (image + info) */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl w-full p-6">
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
              <div className="mt-6 flex gap-4">
                <button className="btn btn-default">Get Quote</button>
                <button className="btn btn-outline">Contact Us</button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoom Lightbox Modal */}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
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
