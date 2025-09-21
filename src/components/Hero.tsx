import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBus}
          alt="Premium bus travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Premium Travel</span>
            <br />
            Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Book your journey with confidence. From luxury buses to premium hotels, 
            we deliver exceptional travel experiences at your fingertips.
          </p>
        </div>
        
        {/* Booking Form */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 md:p-8 card-shadow border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Departure city" 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Destination city" 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="date" 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="1 Adult" 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full md:w-auto px-12 glow animate-glow">
              Search Available Trips
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}