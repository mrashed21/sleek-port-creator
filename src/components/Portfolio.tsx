import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioTour from "@/assets/portfolio-tour.jpg";

const projects = [
  {
    title: "Luxury Hotel Bookings",
    description: "Premium hotel reservation system with real-time availability and instant confirmation.",
    image: portfolioHotel,
    category: "Hospitality",
    features: ["Real-time Booking", "Premium Properties", "Instant Confirmation"]
  },
  {
    title: "Adventure Tour Packages",
    description: "Curated travel experiences with expert guides and all-inclusive packages.",
    image: portfolioTour,
    category: "Tours & Travel",
    features: ["Expert Guides", "All Inclusive", "Adventure Ready"]
  },
  {
    title: "Corporate Travel Solutions",
    description: "Tailored business travel services with dedicated account management.",
    image: portfolioHotel,
    category: "Business Travel",
    features: ["Dedicated Support", "Cost Management", "Flexible Booking"]
  },
  {
    title: "Group Travel Packages",
    description: "Special packages designed for large groups with customizable itineraries.",
    image: portfolioTour,
    category: "Group Travel",
    features: ["Custom Itineraries", "Group Discounts", "Dedicated Coordinator"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the range of travel solutions we offer to make your journey unforgettable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:bg-card/80 transition-all duration-300 hover:scale-105 card-shadow group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}