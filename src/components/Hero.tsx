import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered education platform" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            🏆 Winner - MLOps Expo at Northeastern University
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Because learning shouldn't feel like{" "}
            <span className="gradient-text">
              rewinding the same lecture five times
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your recorded lectures into interactive, AI-powered learning experiences. 
            Ask questions, get contextual answers, and learn in your preferred language—lightning fast.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <a href="mailto:arya@graidai.com?subject=Demo%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20graid.%20for%20my%20university.%0A%0AUniversity:%20%0AName:%20%0ARole:%20%0AEmail:%20%0A%0AThank%20you!">
                Request University Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <a href="mailto:arya@graidai.com?subject=Student%20Access%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20request%20early%20access%20to%20graid.%0A%0AName:%20%0AUniversity:%20%0AYear:%20%0AEmail:%20%0A%0AThank%20you!">
                <Play className="mr-2 h-5 w-5" />
                Get Student Access
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Context-Aware AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>4 Languages Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>&lt;5 Second Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};