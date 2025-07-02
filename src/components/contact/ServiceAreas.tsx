import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceAreas = () => {
  return (
    <Card className="bg-gray-900 border-yellow-600">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-white">Service Areas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-300 space-y-2 text-sm sm:text-base">
          <p className="text-yellow-400 font-semibold mb-2">🇮🇳 All India Service Available</p>
          <p>• Commercial fitness centers</p>
          <p>• CrossFit boxes and functional training gyms</p>
          <p>• University and school fitness facilities</p>
          <p>• Physical therapy clinics</p>
          <p>• Home gym installations</p>
          <p>• Martial arts studios</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceAreas;
