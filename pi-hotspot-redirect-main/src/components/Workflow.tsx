import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Workflow = () => {
  const steps = [
    {
      step: "01",
      title: "WiFi Hotspot Setup",
      description: "Configure Raspberry Pi as wireless access point using NetworkManager",
      details: ["Install NetworkManager", "Create hotspot with SSID/password", "Verify client connectivity"],
      status: "Setup"
    },
    {
      step: "02", 
      title: "Internet Uplink",
      description: "Establish internet connection via Ethernet or USB tethering",
      details: ["Connect Ethernet cable", "Enable USB tethering", "Verify internet access"],
      status: "Connect"
    },
    {
      step: "03",
      title: "Pi-hole Installation",
      description: "Deploy DNS filtering and blocking system",
      details: ["Run Pi-hole installer", "Configure admin panel", "Set DNS upstream servers"],
      status: "Install"
    },
    {
      step: "04",
      title: "Domain Redirection",
      description: "Configure DNS mapping for domain interception",
      details: ["Add domains to blacklist", "Create local DNS records", "Map to demo site IP"],
      status: "Redirect"
    },
    {
      step: "05",
      title: "Demo Site Deployment",
      description: "Host custom website for redirected traffic",
      details: ["Install web server", "Deploy site content", "Configure firewall"],
      status: "Deploy"
    },
    {
      step: "06",
      title: "System Verification",
      description: "Test complete DNS redirection workflow",
      details: ["Connect client device", "Test domain blocking", "Verify redirection"],
      status: "Active"
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface-darker/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-terminal-blue">Technical Workflow</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step implementation of the DNS hotspot and redirection system
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border hover:border-terminal-blue/60 transition-all duration-300 relative overflow-hidden group">
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-terminal-blue/20 group-hover:text-terminal-blue/40 transition-colors">
                {step.step}
              </div>
              
              <CardHeader className="relative z-10">
                <Badge variant="secondary" className="w-fit mb-2">
                  {step.status}
                </Badge>
                <CardTitle className="text-lg text-foreground group-hover:text-terminal-blue transition-colors">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-terminal-green rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
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
};

export default Workflow;