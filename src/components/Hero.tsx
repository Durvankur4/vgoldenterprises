import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay using logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-teal-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6 leading-tight">
            Premium Gym Solutions &{" "}
            <span className="text-teal-600">Flooring Excellence in India</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your fitness facility with premium gym solutions including professional rubber flooring, interlocking tiles, and expert upholstery services. 
            Delivering premium gym solutions across India with 15+ years of expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProducts}
              size="lg" 
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-teal-600"
            >
              Explore Premium Solutions
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg bg-white"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Stats with SEO-friendly keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-blue-700 text-sm sm:text-base font-medium">Premium Solutions Delivered</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-blue-700 text-sm sm:text-base font-medium">Years Experience</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">All India</div>
              <div className="text-blue-700 text-sm sm:text-base font-medium">Service Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-600 opacity-70" />
      </div>
    </section>
    );
  };
  
  export default Hero;