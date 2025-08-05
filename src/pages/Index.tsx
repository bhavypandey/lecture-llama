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
    <div className="min-h-screen bg-background overflow-y-scroll snap-y snap-mandatory">
      <Navigation />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <Features />
      </section>
      <section className="snap-start">
        <Mission />
      </section>
      <section className="snap-start">
        <Team />
      </section>
      <section className="snap-start">
        <SocialProof />
      </section>
      <section className="snap-start">
        <Contact />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
