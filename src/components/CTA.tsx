import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="card-gradient p-12 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-full translate-x-12 translate-y-12" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text">Learning Experience?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join universities and students who are already experiencing the future of education. 
              Get started with graid. today.
            </p>

            {/* Two-column CTA options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Universities CTA */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">For Universities</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Integrate AI-powered learning into your existing lecture systems
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:arya@graidai.com?subject=Demo%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20graid.%20for%20my%20university.%0A%0AUniversity:%20%0AName:%20%0ARole:%20%0AEmail:%20%0A%0AThank%20you!">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </a>
                </Button>
              </div>

              {/* Students CTA */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">For Students</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Request access and be among the first to experience graid.
                </p>
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <a href="mailto:arya@graidai.com?subject=Student%20Access%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20request%20early%20access%20to%20graid.%0A%0AName:%20%0AUniversity:%20%0AYear:%20%0AEmail:%20%0A%0AThank%20you!">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Access
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Questions? Reach out to our team at{" "}
                <a href="mailto:arya@graidai.com" className="text-accent hover:text-accent-glow transition-colors">
                  arya@graidai.com
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};