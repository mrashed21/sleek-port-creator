import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

export function AppDownload() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold mb-2 block">Download Our App</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Booking Tickets is Now <span className="gradient-text">Easier</span> With Our App!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience the convenience of booking your travel on-the-go. Our mobile app 
                brings all the power of TravelBoss right to your fingertips with exclusive 
                mobile-only features and deals.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Instant booking confirmations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Real-time trip tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Exclusive mobile deals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Offline ticket access</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center justify-center space-x-2 glow">
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
              
              <Button variant="outline" size="lg" className="flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl card-shadow">
              <img
                src={appMockup}
                alt="TravelBoss mobile app"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }} />
            
            {/* Floating app icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 card-shadow flex items-center justify-center animate-float">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}