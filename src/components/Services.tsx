import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Hotel, MapPin, Wallet, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: Bus,
    title: "Premium Bus Booking",
    description: "Luxury buses with comfortable seating, AC, and premium amenities for your journey.",
    features: ["24/7 Service", "Live Tracking", "Premium Comfort"]
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Book from thousands of verified hotels worldwide with instant confirmation.",
    features: ["Best Rates", "Instant Booking", "24/7 Support"]
  },
  {
    icon: MapPin,
    title: "Tour Packages",
    description: "Curated travel experiences and guided tours to amazing destinations.",
    features: ["Expert Guides", "All Inclusive", "Group Discounts"]
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Secure payment system with multiple options for hassle-free transactions.",
    features: ["Secure Payments", "Multiple Options", "Instant Refunds"]
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Book and manage your travels on-the-go with our intuitive mobile application.",
    features: ["iOS & Android", "Offline Access", "Push Notifications"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage to protect your journey and give you peace of mind.",
    features: ["Full Coverage", "Quick Claims", "Global Support"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a perfect travel experience, all in one platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 card-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}