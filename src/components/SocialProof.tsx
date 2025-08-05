import { Card } from "@/components/ui/card";
import { Trophy, Users, GraduationCap, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "MLOps Expo Winner",
    description: "Highest votes at Northeastern University expo",
    detail: "Judged by Google PM, startup founders, and PhD professors"
  },
  {
    icon: Users,
    title: "Expert Advisory Team",
    description: "Contest judges became our advisors",
    detail: "Industry leaders guiding our development"
  },
  {
    icon: GraduationCap,
    title: "University Partnership",
    description: "Pilot program with Northeastern",
    detail: "Gen AI Masters course collaboration this fall"
  },
  {
    icon: Rocket,
    title: "Proven Technology",
    description: "Robust engineering pipeline",
    detail: "Multiple specialized LLMs ensuring accuracy"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">Academic Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology has been recognized and validated by industry experts, 
            university professors, and academic institutions.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 text-center card-gradient hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              
              <h3 className="font-semibold mb-2 text-foreground">
                {achievement.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-2">
                {achievement.description}
              </p>
              
              <p className="text-xs text-accent font-medium">
                {achievement.detail}
              </p>
            </Card>
          ))}
        </div>

        {/* Team highlight */}
        <div className="text-center">
          <Card className="inline-block p-8 card-gradient">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5,6].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">
              6-Person Expert Team
            </h3>
            
            <p className="text-muted-foreground max-w-md">
              Dedicated founders and engineers working full-time to revolutionize 
              education through AI-powered learning experiences.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};