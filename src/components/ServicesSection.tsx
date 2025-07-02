import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Layers, Phone } from "lucide-react";

export const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Complete Gym Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            From flooring installation to equipment refurbishment, we provide 
            comprehensive services to keep your gym at peak performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Gym Flooring Installation */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-yellow-600 cursor-pointer"
                onClick={scrollToContact}>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Layers className="h-10 w-10 text-yellow-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
              </div>
              <CardTitle className="text-xl text-black">Premium Flooring Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium gym flooring installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Professional installation of high-grade rubber flooring, interlocking tiles, 
                and specialized surfaces for all gym zones.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>• Shock-absorbing rubber floors</li>
                <li>• Anti-slip safety surfaces</li>
                <li>• Custom color combinations</li>
                <li>• 15-year commercial warranty</li>
              </ul>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                variant="outline" 
                className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Bench Upholstery */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-yellow-600 cursor-pointer"
                onClick={scrollToContact}>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Wrench className="h-10 w-10 text-yellow-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
              </div>
              <CardTitle className="text-xl text-black">Expert Bench Upholstery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional gym bench upholstery"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Complete refurbishment and repair services for all types of gym benches 
                and equipment upholstery.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>• Premium vinyl and leather options</li>
                <li>• Foam replacement and padding</li>
                <li>• Tear and wear repair</li>
                <li>• Quick turnaround time</li>
              </ul>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                variant="outline" 
                className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black"
              >
                Refresh Your Gym Benches
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-black rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Gym?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Get a free consultation and quote for your gym project. Our experts 
              will help you choose the perfect solutions for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 text-lg font-semibold"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="tel:+919421015441" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};