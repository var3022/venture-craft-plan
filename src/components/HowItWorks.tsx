import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose Destination",
    description: "Select from 500+ destinations worldwide and set your travel dates.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize Your Trip",
    description: "Pick your budget tier and customize hotels, transport, and activities.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Book & Pay",
    description: "Review your itinerary and complete secure payment in one click.",
  },
  {
    icon: Plane,
    number: "04",
    title: "Start Your Journey",
    description: "Receive your tickets and confirmations. You're ready to travel!",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to your perfect adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform translate-y-6" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300"
              >
                <CardContent className="pt-6 text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-[var(--shadow-medium)]">
                    {step.number}
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 mx-auto mt-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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
