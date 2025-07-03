import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-blue-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="src/images/website/logo.jpg"
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
            <div className="flex items-center space-x-8">
              {navigation.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-blue-800 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md relative group"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-blue-800 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md relative group"
                    aria-label={`Navigate to ${item.name} section`}
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
              aria-label="Call V-Gold Enterprises at +91 9421015441"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </a>
            <Button
              onClick={handleGetQuote}
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-sm"
              aria-label="Get free quote for gym flooring"
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

  {/* ✅ Use 'body' prop instead of children */}
  <SheetContent
    side="right"
    body={
      <nav className="flex flex-col gap-2 mt-6">
        {navigation.map((item) =>
          item.isExternal ? (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="text-blue-800 hover:text-teal-600 px-3 py-2 text-lg font-medium transition-colors text-left"
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
            </Link>
          ) : (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-blue-800 hover:text-teal-600 px-3 py-2 text-lg font-medium transition-colors text-left"
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
            </button>
          )
        )}
      </nav>
    }
  />
</Sheet>

          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
