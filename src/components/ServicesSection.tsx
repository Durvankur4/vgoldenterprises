import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Layers, Phone } from "lucide-react";
import Gallery from "@/pages/Gallery";
import { Link } from "react-router-dom";
import img1 from "@/images/website/gym-flooring-services.jpg";
import img2 from "@/images/website/upholstery-services.jpg";


export const ServicesSection = () => {
  const [popupContent, setPopupContent] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Complete Gym Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            From flooring installation to equipment refurbishment, we provide comprehensive services to keep your gym at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          <Card onClick={() => openPopup({
            title: 'Premium Flooring Installation',
            img: img1,

            description: 'Professional installation of high-grade rubber flooring, interlocking tiles, and specialized surfaces for all gym zones.',
            features: [
              'Shock-absorbing rubber floors',
              'Anti-slip safety surfaces',
              'Custom color combinations',
              '15-year commercial warranty'
            ]
          })} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-yellow-600 cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Layers className="h-10 w-10 text-yellow-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
              </div>
              <CardTitle className="text-xl text-black">Premium Flooring Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img src={img1} alt="Premium gym flooring installation" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 mb-4">
                Professional installation of high-grade rubber flooring, interlocking tiles, and specialized surfaces for all gym zones.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>• Shock-absorbing rubber floors</li>
                <li>• Anti-slip safety surfaces</li>
                <li>• Custom color combinations</li>
                <li>• 15-year commercial warranty</li>
              </ul>
              <Button onClick={(e) => { e.stopPropagation(); scrollToContact(); }} variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card onClick={() => openPopup({
            title: 'Expert Bench Upholstery',
            img: img2,

            description: 'Complete refurbishment and repair services for all types of gym benches and equipment upholstery.',
            features: [
              'Premium vinyl and leather options',
              'Foam replacement and padding',
              'Tear and wear repair',
              'Quick turnaround time'
            ]
          })} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-yellow-600 cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Wrench className="h-10 w-10 text-yellow-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
              </div>
              <CardTitle className="text-xl text-black">Expert Bench Upholstery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img src={img2} alt="Professional gym bench upholstery" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 mb-4">
                Complete refurbishment and repair services for all types of gym benches and equipment upholstery.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>• Premium vinyl and leather options</li>
                <li>• Foam replacement and padding</li>
                <li>• Tear and wear repair</li>
                <li>• Quick turnaround time</li>
              </ul>
              <Button onClick={(e) => { e.stopPropagation(); scrollToContact(); }} variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black">
                Refresh Your Gym Benches
              </Button>
            </CardContent>
          </Card>

        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-black rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Gym?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Get a free consultation and quote for your gym project. Our experts will help you choose the perfect solutions for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 text-lg font-semibold">
                Get Free Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold" asChild>
                <a href="tel:+919421015441" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {popupContent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6" onClick={closePopup}>
    <div 
      className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row mx-auto shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-48 md:h-auto group">
        <img src={popupContent.img} alt="Popup Image" className="w-full h-full object-cover" />
        <Link to="/gallery">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <span className="text-lg font-semibold">Go to Gallery</span>
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6">
        <h4 className="text-xl sm:text-2xl font-bold mb-4">{popupContent.title}</h4>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">{popupContent.description}</p>
        <ul className="text-sm text-gray-600 mb-4 space-y-1">
          {popupContent.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <Button onClick={() => { closePopup(); scrollToContact(); }} className="bg-yellow-600 hover:bg-yellow-700 text-black w-full">
          Contact Us
        </Button>
      </div>
    </div>
  </div>
)}


      </div>
    </section>
  );
};