import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MessageSquare, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Contact Form Submission";
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0AOrganization: ${formData.organization}%0A%0AMessage:%0A${formData.message}`;
    window.open(`mailto:arya@graidai.com?subject=${subject}&body=${body}`, '_blank');
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get <span className="gradient-text">Started Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize learning at your institution? Contact us to discuss pilot programs, demos, or partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact options */}
          <div className="space-y-8">
            <Card className="card-gradient border-primary/20 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">For Universities</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in implementing GRAID in your courses? Let's discuss pilot programs and custom integrations for your institution.
                  </p>
                  <Button 
                    variant="default"
                    onClick={() => window.open('mailto:arya@graidai.com?subject=Partnership%20Inquiry&body=Hi%20team,%0A%0AI%20am%20interested%20in%20implementing%20GRAID%20at%20my%20university.%0A%0AUniversity:%20%0AName:%20%0ARole:%20%0AEmail:%20%0A%0APlease%20let%20me%20know%20how%20we%20can%20proceed.%0A%0AThank%20you!', '_blank')}
                  >
                    Contact for Partnership
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="card-gradient border-border/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">General Inquiries</h3>
                  <p className="text-muted-foreground mb-4">
                    Have questions about our technology, partnerships, or want to learn more? We'd love to hear from you.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a 
                      href="mailto:arya@graidai.com" 
                      className="text-primary hover:underline"
                    >
                      arya@graidai.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Contact form */}
          <div>
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Organization / University</label>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your needs, questions, or how we can help..."
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};