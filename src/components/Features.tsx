import { Card } from "@/components/ui/card";
import { MessageSquare, Globe, Brain, Clock, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Context-Aware Conversations",
    description: "Our AI understands exactly what's being discussed at every moment in your lecture, providing precise, relevant answers to your questions."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Ask questions in English, Hindi, Spanish, or Mandarin. Get responses in your preferred language for better comprehension."
  },
  {
    icon: Brain,
    title: "Interactive Quizzing",
    description: "Generate contextual quizzes based on lecture content to test your understanding and reinforce learning."
  },
  {
    icon: Clock,
    title: "Lightning Fast Responses",
    description: "Get accurate, contextual answers instantly thanks to our optimized AI pipeline and multiple specialized LLMs."
  },
  {
    icon: ShieldCheck,
    title: "High Accuracy Guardrails",
    description: "Multiple AI models verify response accuracy and relevance before delivery, ensuring reliable information every time."
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Easy integration with existing university lecture recording systems and learning management platforms."
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing Education with{" "}
            <span className="gradient-text">AI-Powered Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We transform passive lecture viewing into active, engaging learning experiences 
            with advanced AI that understands context, tone, and student needs.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};