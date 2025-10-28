import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Plane className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Your Journey Starts Here</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Plan Your Dream
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Create personalized travel itineraries tailored to your style. From luxury escapes to budget-friendly adventures, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" variant="hero" className="group">
              Start Planning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
              Explore Destinations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/70">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-sm text-white/70">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
