import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    content: "TravelBoss has transformed how I book business trips. The platform is intuitive, reliable, and the customer service is exceptional.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Adventure Enthusiast",
    content: "Found my perfect adventure tour through TravelBoss. The guided experience was incredible and perfectly organized.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Family Traveler",
    content: "Booking family vacations has never been easier. The hotel recommendations were spot-on and our kids loved the experience.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Williams",
    role: "Solo Traveler",
    content: "As a solo traveler, safety and reliability are crucial. TravelBoss delivers on both with excellent support throughout my journey.",
    rating: 5,
    avatar: "DW"
  }
];

const companies = [
  "TechCorp", "GlobalTrade Inc", "Innovation Labs", "Digital Solutions", 
  "Future Enterprises", "Creative Studios", "Business Partners", "Smart Systems"
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied travelers who trust TravelBoss for their journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.avatar}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="flex space-x-1 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    <Quote className="h-5 w-5 text-primary/50 mb-3" />
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => (
              <div 
                key={company}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="text-muted-foreground font-medium">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}