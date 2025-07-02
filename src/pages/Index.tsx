
/**
 * Index Page - Main Homepage Component (Static Version)
 * 
 * This is the primary landing page for V-Gold Enterprises website.
 * This version is entirely static with no database connections or backend dependencies.
 * 
 * Page Structure:
 * 1. SEO Head - Meta tags and SEO optimization
 * 2. Header - Fixed navigation with responsive design
 * 3. Hero - Main banner with call-to-action
 * 4. ProductShowcase - Display of gym flooring products
 * 5. ServicesSection - Company services overview
 * 6. FeaturedProjects - Portfolio of completed projects
 * 7. AboutSection - Company information and story
 * 8. ContactSection - Contact form (redirects to Google Forms)
 * 9. Footer - Site links and company details
 * 
 * Design System:
 * - Color scheme: Blue primary, Teal accent
 * - Background: Light blue (bg-blue-50)
 * - Responsive design with mobile-first approach
 * - Uses Tailwind CSS for styling
 * - Components from shadcn/ui library
 * 
 * Static Features:
 * - All content hardcoded in components
 * - No API calls or database connections
 * - Static images stored in /public/lovable-uploads/
 * - Contact form redirects to Google Forms
 * - Can be deployed to any static hosting service
 * 
 * Deployment Ready For:
 * - Netlify, Vercel, GitHub Pages
 * - Any static file hosting service
 * - CDN distributions
 */

import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* SEO Meta Tags - Improves search engine visibility */}
      <SEOHead />
      
      {/* Fixed Header Navigation - Responsive with hamburger menu */}
      <Header />
      
      {/* Main Hero Section - First impression with CTA */}
      <Hero />
      
      {/* Product Showcase - Display gym flooring options */}
      <ProductShowcase />
      
      {/* Services Overview - What the company offers */}
      <ServicesSection />
      
      {/* Featured Projects - Portfolio showcase with static data */}
      <FeaturedProjects />
      
      {/* About Section - Company story and values */}
      <AboutSection />
      
      {/* Contact Section - Google Forms integration for static deployment */}
      <ContactSection />
      
      {/* Footer - Additional links and information */}
      <Footer />
    </div>
  );
};

export default Index;
