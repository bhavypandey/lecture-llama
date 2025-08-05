
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Mission } from "@/components/Mission";
import { Team } from "@/components/Team";
import { SocialProof } from "@/components/SocialProof";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Mission />
      <Team />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
