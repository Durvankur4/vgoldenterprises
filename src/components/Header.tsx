import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import img1 from "@/images/website/logo.jpg"; // Import logo image directly

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "#home", isExternal: false },
    { name: "Products", href: "#products", isExternal: false },
    { name: "Services", href: "#services", isExternal: false },
    { name: "Gallery", href: "/gallery", isExternal: true },
    { name: "About", href: "#about", isExternal: false },
    { name: "Contact", href: "#contact", isExternal: false },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleGetQuote = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#contact";
      return;
    }
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-blue-200 shadow-sm overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={img1}
              alt="V-Gold Enterprises - Premium Gym Flooring Solutions"
              className="h-10 w-auto mr-3"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-blue-900">V-Gold Enterprises</h1>
              <p className="text-xs text-blue-600 hidden sm:block">Premium Gym Flooring</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" role="navigation" aria-label="Main navigation">
            <div className="flex items-center space-x-6">
              {navigation.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-blue-800 hover:text-teal-600 px-3 py-2 text-sm font-medium hover:bg-blue-50 rounded-md relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-blue-800 hover:text-teal-600 px-3 py-2 text-sm font-medium hover:bg-blue-50 rounded-md relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}
            </div>
          </nav>

          {/* Desktop Call-to-Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+919421015441"
              className="flex items-center text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </a>
            <Button
              onClick={handleGetQuote}
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-sm"
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6 text-blue-900" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-white w-64 max-w-full">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) =>
                    item.isExternal ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-blue-800 hover:text-teal-600 px-3 py-2 text-lg font-medium text-left"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-blue-800 hover:text-teal-600 px-3 py-2 text-lg font-medium text-left"
                      >
                        {item.name}
                      </button>
                    )
                  )}

                  <a
                    href="tel:+919421015441"
                    className="mt-4 text-blue-900 flex items-center gap-2 text-base font-medium"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <Button
                    onClick={() => {
                      handleGetQuote();
                      setIsOpen(false);
                    }}
                    className="mt-2 bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Free Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export { Header };
