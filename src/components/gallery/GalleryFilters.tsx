
interface GalleryFiltersProps {
  categories: Array<{ id: string; name: string }>;
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const GalleryFilters = ({ categories, selectedCategory, onCategoryChange }: GalleryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
            selectedCategory === category.id
              ? "bg-teal-600 text-white shadow-lg"
              : "bg-white text-blue-700 hover:bg-blue-100 border border-blue-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;