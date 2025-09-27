import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import TechSpecs from "@/components/TechSpecs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Workflow />
      <TechSpecs />
    </div>
  );
};

export default Index;
