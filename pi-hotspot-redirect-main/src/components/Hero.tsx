import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark/80 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 px-4 py-2 text-terminal-green border-terminal-green/30 animate-pulse-glow">
            <span className="w-2 h-2 bg-terminal-green rounded-full mr-2 animate-pulse" />
            SYSTEM ACTIVE
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple bg-clip-text text-transparent animate-float">
            Pi DNS Hotspot
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your <span className="text-terminal-green font-bold">Raspberry Pi 3</span> into a 
            powerful <span className="text-terminal-blue font-bold">WiFi hotspot</span> with 
            <span className="text-terminal-purple font-bold"> DNS-level domain redirection</span> using Pi-hole
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "NetworkManager Hotspot",
              "Pi-hole DNS Control", 
              "Domain Redirection",
              "USB Tethering Support"
            ].map((feature) => (
              <Badge key={feature} variant="secondary" className="px-3 py-1 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
              Deploy Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Documentation
            </Button>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-16 text-sm text-muted-foreground">
            <p className="mb-4 font-mono">TECH STACK:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Raspberry Pi OS",
                "NetworkManager", 
                "Pi-hole",
                "lighttpd",
                "nmcli"
              ].map((tech) => (
                <span key={tech} className="font-mono text-terminal-green/70 hover:text-terminal-green transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;