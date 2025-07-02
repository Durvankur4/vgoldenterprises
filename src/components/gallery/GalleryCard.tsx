import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Eye } from "lucide-react";

interface GalleryCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    details: string;
  };
  onGetQuote: () => void;
}

const GalleryCard = ({ project, onGetQuote }: GalleryCardProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
              project.category === "flooring" 
                ? "bg-blue-100 text-blue-800" 
                : "bg-teal-100 text-teal-800"
            }`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
        
        <div className="p-3 sm:p-4 md:p-6">
          <h3 className="font-bold text-base sm:text-lg md:text-xl text-blue-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-blue-600 text-sm sm:text-base mb-3 md:mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white text-xs sm:text-sm"
                >
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>
                    <p className="text-blue-600 text-lg">{project.details}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-900">Premium Gym Solutions Features:</h4>
                      <ul className="text-blue-600 space-y-1">
                        <li>• Professional installation by certified technicians</li>
                        <li>• Premium materials with 10-year warranty</li>
                        <li>• Custom design and color coordination</li>
                        <li>• Completed on time and within budget</li>
                      </ul>
                    </div>
                    <Button 
                      onClick={onGetQuote}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                    >
                      Get Similar Premium Solution
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              onClick={onGetQuote}
              size="sm" 
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs sm:text-sm"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default GalleryCard;