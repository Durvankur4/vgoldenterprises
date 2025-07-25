import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ✅ Import images
import img1 from "@/images/website/army-gym-installation.jpg";
import img2 from "@/images/website/boutique-studio-flooring.jpg";
import img3 from "@/images/website/functional-training-zone-install.jpg";
import img4 from "@/images/website/commercial-gym-floor-upgrade.jpg";
import img5 from "@/images/website/home-gym-premium-installation.jpg";
import img6 from "@/images/website/interlocking-tiles-installation-colored.jpg";
import img7 from "@/images/website/playground-EPDM-flooring.jpg";
import img8 from "@/images/website/tennis-court.jpg";

const projects = [
  {
    id: 1,
    title: "Army Gym Installation",
    image: img1,
    description: "Complete premium gym solutions for military training facility",
  },
  {
    id: 2,
    title: "Boutique Studio Flooring",
    image: img2,
    description: "Premium gym solutions for modern boutique fitness studio",
  },
  {
    id: 3,
    title: "Functional Training Zone",
    image: img3,
    description: "Premium gym solutions for functional training area",
  },
  {
    id: 4,
    title: "Commercial Gym Floor",
    image: img4,
    description: "Large-scale premium gym solutions installation",
  },
  {
    id: 5,
    title: "Home Gym Installation",
    image: img5,
    description: "Premium gym solutions for residential spaces",
  },
  {
    id: 6,
    title: "Interlocking Tiles Setup",
    image: img6,
    description: "Colorful interlocking tiles for versatile training",
  },
  {
    id: 7,
    title: "EPDM Flooring Installation",
    image: img7,
    description: "High-quality EPDM flooring for outdoor playground areas",
  },
  {
    id: 8,
    title: "Tennis Court Construction",
    image: img8,
    description: "Premium gym solutions for professional tennis courts",
  }
];

const FeaturedProjects = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Our Premium Installations
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Explore our finest work in premium gym solutions across India
          </p>
        </div>

        {/* Mobile/Tablet Scrollable Cards */}
        <div className="block lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex space-x-4 w-max">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="min-w-[260px] max-w-[260px] flex-shrink-0 group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={scrollToContact}
                        size="sm"
                        className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                      >
                        Get Similar Solution
                      </Button>
                      <Link to="/gallery" className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                        >
                          Go to Gallery
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <Button
                      onClick={scrollToContact}
                      size="sm"
                      className="w-full lg:w-1/2 bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Get Similar Solution
                    </Button>
                    <Link to="/gallery" className="w-full lg:w-1/2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                      >
                        Go to Gallery
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA Button */}
        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              View Complete Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
