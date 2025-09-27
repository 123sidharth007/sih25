import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Terminal from "./Terminal";

const TechSpecs = () => {
  const setupCommands = [
    "sudo apt update && sudo apt install network-manager -y",
    "sudo nmcli device wifi hotspot ifname wlan0 ssid RaspberryPiAP password SecurePass123",
    "curl -sSL https://install.pi-hole.net | bash",
    "sudo apt install lighttpd -y",
    "sudo systemctl enable lighttpd"
  ];

  const specs = [
    {
      category: "Hardware Requirements",
      items: [
        "Raspberry Pi 3 Model B (or newer)",
        "MicroSD Card (16GB minimum)",
        "Power Supply (5V 2.5A)",
        "Ethernet Cable or USB for tethering"
      ]
    },
    {
      category: "Software Stack", 
      items: [
        "Raspberry Pi OS (Bullseye/Bookworm)",
        "NetworkManager for hotspot control",
        "Pi-hole for DNS filtering",
        "lighttpd web server"
      ]
    },
    {
      category: "Network Capabilities",
      items: [
        "WiFi AP: 802.11n/ac support",
        "Internet Sharing: Ethernet/USB tethering", 
        "DNS Control: Domain-level blocking",
        "Redirection: Custom IP mapping"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-terminal-purple">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete hardware and software requirements for deployment
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Specifications */}
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <Card key={index} className="bg-card border-border hover:border-terminal-purple/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-terminal-purple">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-terminal-purple rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Terminal Demo */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Setup</h3>
              <p className="text-muted-foreground mb-6">
                Automated installation commands for rapid deployment
              </p>
            </div>
            
            <Terminal commands={setupCommands} title="pi-setup.sh" />
            
            <div className="text-center pt-6">
              <Button variant="terminal" className="mr-4">
                Download Script
              </Button>
              <Button variant="outline">
                View Full Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;