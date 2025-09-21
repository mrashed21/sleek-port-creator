import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { icon: Users, label: "Happy Customers", value: "50K+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Clock, label: "24/7 Support", value: "Always" },
  { icon: Globe, label: "Cities Covered", value: "200+" }
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">TravelBoss</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're more than just a booking platform. TravelBoss is your trusted 
                partner in creating memorable travel experiences. With over 15 years 
                of expertise in the travel industry, we've helped thousands of 
                travelers discover new destinations safely and comfortably.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to make travel accessible, affordable, and enjoyable 
                for everyone. From premium bus services to luxury hotel bookings, 
                we ensure every journey exceeds your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 glow">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button size="lg" className="glow">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl card-shadow">
              <img
                src={aboutTeam}
                alt="Our professional team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}