import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">Last updated: December 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Vgold Enterprises' services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Services Description</h2>
              <p>
                Vgold Enterprises provides professional gym flooring installation, equipment upholstery, 
                and related fitness facility services across India. Our services include:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Premium rubber flooring installation</li>
                <li>Interlocking tile systems</li>
                <li>Bench and equipment upholstery</li>
                <li>Custom gym solutions</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Warranty and Quality</h2>
              <p>
                We provide a 15-year warranty on commercial flooring installations and stand behind 
                the quality of our work. Warranty terms may vary based on:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Type of installation and materials used</li>
                <li>Usage patterns and maintenance</li>
                <li>Environmental conditions</li>
                <li>Compliance with recommended care instructions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6">
                <li>Quotes are valid for 30 days from issue date</li>
                <li>Payment schedules will be agreed upon before project commencement</li>
                <li>Final payment is due upon project completion and acceptance</li>
                <li>Additional work outside original scope requires separate approval</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Customer Responsibilities</h2>
              <ul className="list-disc pl-6">
                <li>Provide accurate site measurements and requirements</li>
                <li>Ensure site accessibility for installation teams</li>
                <li>Follow recommended maintenance procedures</li>
                <li>Report any issues within the warranty period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
              <p>
                Vgold Enterprises' liability shall not exceed the total amount paid for the specific 
                service. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Service Areas</h2>
              <p>
                We provide services across India. Service availability and pricing may vary by location. 
                Remote areas may incur additional travel and logistics charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Vgold Enterprises</strong></p>
                <p>Shop No 2, Shiv Classic Building</p>
                <p>opp. Narpatgiri Police chowk</p>
                <p>Somwar Peth, Pune, Maharashtra 411011</p>
                <p>Phone: +91 9421015441</p>
                <p>Service Hours: Monday–Saturday, 10 AM – 6 PM</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
