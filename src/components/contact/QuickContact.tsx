import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";

export const QuickContact = () => {
  return (
    <Card className="bg-gray-900 border-yellow-600">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-white">Quick Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold">+91 9421015441</p>
            <p className="text-gray-300 text-sm">Mon–Sat, 10 AM to 6 PM</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold">Our Location</p>
            <p className="text-gray-300 text-sm">
              Shop No 2, Shiv Classic Building,<br />
              opp. Narpatgiri Police chowk,<br />
              Somwar Peth, Pune, Maharashtra 411011
            </p>
            <a className="text-white font-semibold" href="https://maps.app.goo.gl/NwaAgrLjXmNratVH8">View on Google Maps</a>
          </div>
          
        </div>
        <div className="space-y-3 pt-2">
          <div className="text-yellow-400 font-semibold">
            ✓ 500+ Gyms Served
          </div>
          <div className="text-yellow-400 font-semibold">
            ✓ 15+ Years of Experience
          </div>
          <div className="text-yellow-400 font-semibold">
            ✓ Customer Support Available (Mon–Sat, 10 AM – 6 PM)
          </div>
        </div>
        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
          <a href="https://wa.me/919421015441" target="_blank" rel="noopener noreferrer" className="w-full">
            WhatsApp Us
          </a>
        </Button>
      </CardContent>
    </Card>
  );}

  



  