import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 border-t border-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/779d5e4a-03d1-4a98-9be0-4d064fb11fe4.png" 
                alt="V-Gold Enterprises Logo" 
                className="h-8 w-auto mr-3"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">V-Gold Enterprises</h3>
              </div>
            </div>
            <p className="text-blue-200 text-sm">
              Premium gym solutions provider specializing in professional flooring and expert upholstery services for fitness facilities of all sizes across India.
            </p>
            <div className="flex items-center space-x-2 text-blue-200">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">+91 9421015441</span>
            </div>
            <div className="text-blue-200 text-sm">
              <p>Shop No 2, Shiv Classic Building,</p>
              <p>opp. Narpatgiri Police chowk,</p>
              <p>Somwar Peth, Pune, Maharashtra 411011</p>
              <p className="mt-2 text-teal-400 font-semibold">Premium Gym Solutions: All India</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Premium Solutions</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><button onClick={() => scrollToSection("#products")} className="hover:text-white transition-colors text-left">Rubber Roll Flooring</button></li>
              <li><button onClick={() => scrollToSection("#products")} className="hover:text-white transition-colors text-left">Interlocking Tiles</button></li>
              <li><button onClick={() => scrollToSection("#products")} className="hover:text-white transition-colors text-left">Competition Mats</button></li>
              <li><button onClick={() => scrollToSection("#products")} className="hover:text-white transition-colors text-left">Heavy-Duty Solutions</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Premium Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors text-left">Equipment Upholstery</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors text-left">Gym Restoration</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors text-left">Custom Solutions</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors text-left">Installation Services</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><button onClick={() => scrollToSection("#about")} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors text-left">Gallery</Link></li>
              <li><button onClick={() => scrollToSection("#contact")} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><button onClick={() => scrollToSection("#contact")} className="hover:text-white transition-colors text-left">Get Premium Quote</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm text-center md:text-left">
            © {currentYear} V-Gold Enterprises - Premium Gym Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <p className="text-blue-200 text-sm">Premium Support: Mon–Sat, 10 AM – 6 PM</p>
          </div>
        </div>
      </div>
    </footer>
    );
  };
  
  export default Footer;