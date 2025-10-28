import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Calendar, DollarSign, Users, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart Itineraries",
    description: "AI-powered trip planning that adapts to your preferences and budget.",
  },
  {
    icon: Calendar,
    title: "Flexible Dates",
    description: "Find the best times to travel with our intelligent date suggestions.",
  },
  {
    icon: DollarSign,
    title: "Multiple Budgets",
    description: "Choose from Luxury, Standard, Budget, or fully Customized options.",
  },
  {
    icon: Users,
    title: "Group Planning",
    description: "Coordinate trips with family and friends seamlessly.",
  },
  {
    icon: MapPin,
    title: "500+ Destinations",
    description: "Explore curated destinations from around the world.",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Safe and encrypted payment processing for your peace of mind.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Plan the Perfect Trip
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From destination selection to booking confirmations, we handle every detail of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
