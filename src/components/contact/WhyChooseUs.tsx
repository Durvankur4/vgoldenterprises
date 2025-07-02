import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  return (
    <Card className="bg-teal-600 border-teal-500">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-white">Why Choose V Gold Enterprises?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-white space-y-2 text-sm sm:text-base">
          <p>✓ Free on-site consultation and measurement</p>
          <p>✓ 10-year warranty on commercial installations</p>
          <p>✓ Certified installation technicians</p>
          <p>✓ Same-day quotes for most projects</p>
          <p>✓ Customer Support Available (Mon–Sat, 10 AM – 6 PM)</p>
          <p>✓ Pan-India service coverage</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhyChooseUs;
