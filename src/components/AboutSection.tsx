import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            The V-Gold Story
          </h2>
          <p className="text-lg sm:text-xl text-blue-600 max-w-3xl mx-auto">
            Building India's strongest gym foundations for over 15 years
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
              From Vision to Reality
            </h3>
            <p className="text-blue-700 leading-relaxed">
              What started as a dream to revolutionize India's fitness industry has grown into 
              a legacy of excellence. For over 15 years, V Gold Enterprises has been the 
              trusted partner for gym owners across the nation, transforming empty spaces 
              into world-class fitness facilities.
            </p>
            <p className="text-blue-700 leading-relaxed">
              Our journey began with a simple belief: every gym deserves flooring that can 
              withstand the intensity of serious training while maintaining the highest 
              standards of safety and aesthetics. Today, we've helped over 500 gyms achieve 
              this vision.
            </p>
            <p className="text-blue-700 leading-relaxed">
              From premium rubber flooring to expert bench upholstery, every product and 
              service we offer is a testament to our commitment to quality, durability, 
              and customer satisfaction.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-teal-600 rounded-lg p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-white leading-relaxed mb-6">
                To empower fitness enthusiasts across India with premium, durable, and 
                safe gym solutions that inspire confidence and performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-100 text-sm">Gyms Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                  <div className="text-blue-100 text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-blue-200 hover:border-teal-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Customer First</h4>
              <p className="text-blue-600 text-sm">
                Every decision we make puts our customers' success at the center
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 hover:border-teal-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Premium Quality</h4>
              <p className="text-blue-600 text-sm">
                Only the finest materials and craftsmanship meet our standards
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 hover:border-teal-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Timely Delivery</h4>
              <p className="text-blue-600 text-sm">
                Your project timeline is our commitment to excellence
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 hover:border-teal-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Trust & Reliability</h4>
              <p className="text-blue-600 text-sm">
                15+ years of proven track record speaks for our reliability
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    );
  };

  export default AboutSection;