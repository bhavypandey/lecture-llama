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
      <div className="scroll-container">
        <section className="min-h-screen snap-start">
          <Hero />
        </section>
        <section className="min-h-screen snap-start">
          <Features />
        </section>
        <section className="min-h-screen snap-start">
          <Mission />
        </section>
        <section className="min-h-screen snap-start">
          <Team />
        </section>
        <section className="min-h-screen snap-start">
          <SocialProof />
        </section>
        <section className="min-h-screen snap-start">
          <Contact />
        </section>
        <section className="min-h-screen snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Index;
