import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">Last updated: December 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
              <p>
                At Vgold Enterprises, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-black mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Business information and project details</li>
                <li>Location and pincode information</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-black mb-2">Usage Information</h3>
              <ul className="list-disc pl-6">
                <li>Website usage data and analytics</li>
                <li>Device information and IP address</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send you relevant information about our products</li>
                <li>To comply with legal obligations</li>
                <li>To analyze and improve our website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
              <ul className="list-disc pl-6">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Vgold Enterprises</strong></p>
                <p>Shop No 2, Shiv Classic Building</p>
                <p>opp. Narpatgiri Police chowk</p>
                <p>Somwar Peth, Pune, Maharashtra 411011</p>
                <p>Phone: +91 9421015441</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
