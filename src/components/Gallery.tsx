import { useState } from "react";
import GalleryHeader from "./gallery/GalleryHeader";
import GalleryFilters from "./gallery/GalleryFilters";
import GalleryCard from "./gallery/GalleryCard";
import { galleryProjects, galleryCategories } from "./gallery/galleryData";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === selectedCategory);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryHeader />
        
        <GalleryFilters 
          categories={galleryCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <GalleryCard 
              key={project.id}
              project={project}
              onGetQuote={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
    );
  }