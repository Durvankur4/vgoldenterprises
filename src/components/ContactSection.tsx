import ContactForm from "@/components/contact/ContactForm";
import { QuickContact } from "@/components/contact/QuickContact";
import ServiceAreas from "@/components/contact/ServiceAreas";
import WhyChooseUs from "@/components/contact/WhyChooseUs";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to transform your gym? Contact us today for a personalized quote 
            and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <QuickContact />
            <ServiceAreas />
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default ContactSection;