import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "@/images/gallery/1.jpg";
import img2 from "@/images/gallery/2.jpg";
import img3 from "@/images/gallery/3.jpg";
import img4 from "@/images/gallery/4.jpg";
import img5 from "@/images/gallery/5.jpg"; 
import img6 from "@/images/gallery/6.jpg";
import img7 from "@/images/gallery/7.jpg";
import img8 from "@/images/gallery/8.jpg";
import img9 from "@/images/gallery/9.jpg";
import img10 from "@/images/gallery/10.jpg";
import img11 from "@/images/gallery/11.jpg";
import img12 from "@/images/gallery/12.jpg";  
import img13 from "@/images/gallery/13.jpg";
import img14 from "@/images/gallery/14.jpg";
import img15 from "@/images/gallery/15.jpg";
import seat1 from "@/images/gallery/seat-1.jpg";


const images = {

  img2,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  seat1,
  img15,
  img1,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
   // Placeholder for additional images
};

export const Gallery = () => {
  const galleryImages = Object.keys(images).map((key) => images[key as keyof typeof images]);

  return (
    <div className="min-h-screen bg-blue-50">
      <SEOHead />
      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 md:mb-4">
                Premium Gym Solutions Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto mb-6 md:mb-8">
                Explore our premium gym installations and solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
                <Link to="/#contact" className="w-full sm:w-auto">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 text-base">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+919421015441" className="w-full sm:w-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 text-base">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Gallery Grid with extra padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {galleryImages.map((imgSrc, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group relative overflow-hidden rounded-lg md:rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-white">
                    <div className="relative">
                      <img
                        src={imgSrc}
                        alt=""
                        className="w-full h-auto max-h-[90vh] object-contain"
                        loading="lazy"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 lg:mt-16 bg-white rounded-lg md:rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                Ready to Transform Your Gym?
              </h2>
              <p className="text-blue-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
                <Link to="/#contact" className="w-full sm:w-auto">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3">
                    Get Your Free Quote
                  </Button>
                </Link>
                <a href="tel:+919421015441" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +91 9421015441
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
