import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Budget",
    price: "From $499",
    description: "Perfect for solo travelers and backpackers",
    features: [
      "Economy flights",
      "Budget-friendly hotels",
      "Public transport options",
      "Basic travel insurance",
      "24/7 support",
    ],
    variant: "outline" as const,
  },
  {
    name: "Standard",
    price: "From $1,299",
    description: "Ideal for families and couples",
    features: [
      "Standard flights",
      "3-4 star hotels",
      "Mix of transport options",
      "Comprehensive insurance",
      "Priority support",
      "Restaurant recommendations",
    ],
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Luxury",
    price: "From $3,499",
    description: "For those seeking the finest experience",
    features: [
      "Business/First class flights",
      "5-star hotels & resorts",
      "Private transfers",
      "Premium insurance",
      "Concierge service",
      "Exclusive experiences",
      "VIP airport lounge access",
    ],
    variant: "hero" as const,
  },
];

export const PricingTiers = () => {
  return (
    <section id="packages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your Travel Style
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every journey is unique. Select the tier that matches your preferences and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative border-border hover:shadow-[var(--shadow-strong)] transition-all duration-300 ${
                tier.popular ? 'border-primary shadow-[var(--shadow-medium)] scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-accent/80 text-white text-sm font-semibold shadow-[var(--shadow-soft)]">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={tier.variant} className="w-full mt-6" size="lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need something unique?</p>
          <Button variant="accent" size="lg">
            Create Custom Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
};
