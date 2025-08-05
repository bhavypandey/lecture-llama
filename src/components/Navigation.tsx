import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="gradient-text">graid.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:arya@graidai.com?subject=Login%20Request">Login</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="mailto:arya@graidai.com?subject=Demo%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20graid.%20for%20my%20university.%0A%0AUniversity:%20%0AName:%20%0ARole:%20%0AEmail:%20%0A%0AThank%20you!">Request Demo</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-accent transition-colors">
                Features
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:arya@graidai.com?subject=Login%20Request">Login</a>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <a href="mailto:arya@graidai.com?subject=Demo%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20graid.%20for%20my%20university.%0A%0AUniversity:%20%0AName:%20%0ARole:%20%0AEmail:%20%0A%0AThank%20you!">Request Demo</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};