import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn, Mail, Lock } from "lucide-react";

interface LoginDialogProps {
  children: React.ReactNode;
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login Request Sent",
        description: "We'll contact you soon with login credentials at " + email,
      });
      setIsLoading(false);
      setOpen(false);
      setEmail("");
      setPassword("");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card/95 backdrop-blur-sm border-border z-50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <LogIn className="h-5 w-5 text-primary" />
            Login to graid.
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your credentials to access your graid. account. Don't have an account? Contact us for access.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/50 border-border focus:border-primary"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-background/50 border-border focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
              variant="default"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Need access to graid.?
              </p>
              <Button
                type="button"
                variant="link"
                className="text-accent hover:text-accent-glow p-0 h-auto"
                asChild
              >
                <a href="mailto:arya@graidai.com?subject=Access%20Request&body=Hi%20team,%0A%0AI%20would%20like%20to%20request%20access%20to%20graid.%0A%0AName:%20%0AUniversity:%20%0ARole:%20%0AEmail:%20%0A%0AThank%20you!">
                  Request Access
                </a>
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};