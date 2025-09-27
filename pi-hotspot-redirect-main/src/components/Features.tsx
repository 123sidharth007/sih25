import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "WiFi Hotspot Creation",
      description: "Transform your Pi into a wireless access point using NetworkManager",
      command: "sudo nmcli device wifi hotspot ifname wlan0 ssid <SSID> password <PASSWORD>",
      icon: "📡",
      status: "Active"
    },
    {
      title: "DNS-Level Control", 
      description: "Intercept and redirect domain queries using Pi-hole's powerful DNS engine",
      command: "curl -sSL https://install.pi-hole.net | bash",
      icon: "🔒",
      status: "Secured"
    },
    {
      title: "Domain Redirection",
      description: "Route blocked domains to custom demo sites via Local DNS Records",
      command: "Domain: abc.com → IP: 192.168.1.100",
      icon: "🔄",
      status: "Redirected"
    },
    {
      title: "USB Tethering Support",
      description: "Share internet connection via USB tethering from mobile devices",
      command: "Interface: usb0 detected → DHCP enabled",
      icon: "📱",
      status: "Connected"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-terminal-green">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced networking capabilities powered by Raspberry Pi hardware
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-surface-dark border-terminal-green/30 hover:border-terminal-green/60 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{feature.icon}</div>
                  <Badge variant="outline" className="text-terminal-green border-terminal-green/50">
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-terminal-green transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="terminal rounded-md p-3 text-sm font-mono">
                  <div className="text-terminal-blue mb-1">pi@raspberrypi:~$</div>
                  <div className="text-terminal-green">{feature.command}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;