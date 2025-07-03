import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";

/**
 * Static Contact Form Component
 * 
 * This component provides a static contact form that redirects to Google Forms
 * for form submission. This keeps the website entirely static with no backend
 * dependencies or database connections.
 * 
 * Features:
 * - Static form display with company branding
 * - Direct redirect to Google Forms for submission
 * - No client-side validation or processing
 * - Fully responsive design
 * 
 * Usage:
 * Replace the GOOGLE_FORM_URL with your actual Google Form URL
 */

const ContactForm = () => {
  // TODO: Replace this URL with your actual Google Form URL
  // To create a Google Form:
  // 1. Go to forms.google.com
  // 2. Create a new form with fields: Name, Email, Phone, Pincode, City, Service, Message
  // 3. Copy the form URL and paste it here
  const GOOGLE_FORM_URL = "https://forms.gle/SKwLU3dBcmVS2bY77";

  /**
   * Handle form submission by redirecting to Google Forms
   * Opens the Google Form in a new tab for better user experience
   */
  const handleGetQuote = () => {
    // Open Google Form in new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <Card className="bg-gray-900 border-teal-600">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-white">Request Quote</CardTitle>
        <p className="text-blue-200 text-sm">
          Click below to fill out our detailed quote request form
        </p>
      </CardHeader>
      <CardContent>
        {/* Static form display - no actual form processing */}
        <div className="space-y-4">
          
          {/* Information Display */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
            <h3 className="text-white font-semibold mb-3">We'll collect the following information:</h3>
            <ul className="text-blue-200 text-sm space-y-2">
              <li>• Your Name & Contact Details</li>
              <li>• Location (Pincode & City)</li>
              <li>• Service Type (Flooring, Consultation, etc.)</li>
              <li>• Project Details & Requirements</li>
            </ul>
          </div>

          {/* Benefits Display */}
          <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-600">
            <h3 className="text-white font-semibold mb-2">What happens next?</h3>
            <ul className="text-teal-200 text-sm space-y-1">
              <li>✓ Free consultation within 24 hours</li>
              <li>✓ Detailed quote with pricing</li>
              <li>✓ Professional site assessment</li>
              <li>✓ Custom solution recommendations</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <Button 
            onClick={handleGetQuote}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-3 font-semibold"
          >
            Get Your Free Quote →
          </Button>

          {/* Instagram Link */}
          <div className="text-center pt-4 border-t border-gray-600">
            <p className="text-blue-200 text-sm mb-3">Follow us on our Social Media</p>
            <a 
              href="https://instagram.com/vgold_enterprises" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold hover:text-pink-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @vgold_enterprises
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
    );
  };
  
  export default ContactForm;