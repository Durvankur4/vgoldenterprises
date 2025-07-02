/**
 * Featured Projects Component
 * 
 * Displays a grid of completed gym flooring projects with images
 * 
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Hover effects with image scaling and card elevation
 * - Individual project cards with descriptions
 * - Call-to-action buttons linking to contact section
 * - Link to complete gallery page
 * 
 * Images:
 * - All images are optimized and stored in /lovable-uploads/
 * - Uses lazy loading for performance
 * - Alt tags for accessibility
 * 
 * Interactions:
 * - Smooth scroll to contact section
 * - Card hover animations
 * - Responsive design for all devices
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
  // Project data configuration
  // Each project includes: id, title, image path, and description
  const projects = [
    {
      id: 1,
      title: "Army Gym Installation",
      image: "/lovable-uploads/db819b7b-b0b5-4a9a-b9d0-1e07290b2e54.png",
      description: "Complete premium gym solutions for military training facility"
    },
    {
      id: 2,
      title: "Boutique Studio Flooring",
      image: "/lovable-uploads/2249759c-2290-4f20-8e83-b3cd4a8f2556.png",
      description: "Premium gym solutions for modern boutique fitness studio"
    },
    {
      id: 3,
      title: "Functional Training Zone",
      image: "/lovable-uploads/b43f6c0e-83d1-4054-b321-fd18638c694d.png",
      description: "Premium gym solutions for functional training area"
    },
    {
      id: 4,
      title: "Commercial Gym Floor",
      image: "/lovable-uploads/bdf497ec-8c0a-4c91-85e2-ff7dc125139f.png",
      description: "Large-scale premium gym solutions installation"
    },
    {
      id: 5,
      title: "Home Gym Installation",
      image: "/lovable-uploads/cbbd563b-d9d8-4cb1-8b9e-894ce227b60a.png",
      description: "Premium gym solutions for residential spaces"
    },
    {
      id: 6,
      title: "Interlocking Tiles Setup",
      image: "/lovable-uploads/997ae27e-3025-4259-9b16-4b03eb7062c4.png",
      description: "Colorful interlocking tiles for versatile training"
    }
  ];

  /**
   * Smooth scroll to contact section
   * Used by project CTA buttons to generate leads
   */
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Our Premium Installations
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Explore our finest work in premium gym solutions across India
          </p>
        </div>

        {/* Projects Grid */}
        {/* Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy" // Performance optimization
                  />
                </div>
                
                {/* Project Information */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">
                    {project.description}
                  </p>
                  
                  {/* Call-to-Action Button */}
                  <Button 
                    onClick={scrollToContact}
                    size="sm" 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Get Similar Solution
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Link to Complete Gallery */}
        <div className="text-center mt-8">
          <a href="/gallery">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View Complete Gallery
            </Button>
          </a>
        </div>
      </div>
    </section>
    );
  };
  
  export default FeaturedProjects;