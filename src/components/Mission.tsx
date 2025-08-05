import { Bookmark, Target, Lightbulb, GraduationCap, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const missionValues = [
  {
    icon: Bookmark,
    title: "Award Winning",
    description: "MLOps Expo Winner"
  },
  {
    icon: Target,
    title: "Precision Focused",
    description: "Context-aware responses"
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Cutting-edge AI"
  }
];

const whyChooseItems = [
  {
    icon: GraduationCap,
    title: "University Validated",
    description: "Proven success at prestigious institutions like Northeastern University"
  },
  {
    icon: Award,
    title: "Expert Recognition",
    description: "Judged and endorsed by Google PMs, startup founders, and PhD professors"
  },
  {
    icon: Zap,
    title: "Immediate Impact",
    description: "Ready for deployment with proven results in real academic settings"
  }
];

export const Mission = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Mission */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p>
                At GRAID, we believe that video lectures should do more than just play; 
                they should interact. Our platform transforms recorded lectures into 
                searchable, question-ready content using advanced speech-to-text and 
                natural language processing.
              </p>
              
              <p>
                Just ask a question, and GRAID responds with answers grounded in your actual 
                course content. No fluff, no guesswork—just clear, contextual support that 
                helps students learn more effectively.
              </p>
            </div>

            {/* Mission Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {missionValues.map((value, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Why Choose GRAID */}
          <div>
            <Card className="card-gradient border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose GRAID?</h3>
              
              <div className="space-y-6">
                {whyChooseItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};