import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductDetailsModal = ({ isOpen, onClose, product }) => {
  const [isZoomOpen, setZoomOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 cursor-zoom-in" onClick={() => setZoomOpen(true)}>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-64 object-contain bg-white p-4"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {product.specs.map((spec, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                <Button variant="default">Get Quote</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoomable Image View */}
      <Dialog open={isZoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent className="w-full max-w-5xl p-4 bg-black">
          <img
            src={product.image}
            alt="Zoomed"
            className="w-full h-auto object-contain mx-auto"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetailsModal;
