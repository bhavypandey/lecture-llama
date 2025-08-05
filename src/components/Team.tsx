const teamMembers = [
  {
    name: "Anish Hegde",
    role: "Software Engineer"
  },
  {
    name: "Ankush Maheshwari",
    role: "Software Engineer"
  },
  {
    name: "Arya Gowda",
    role: "Data Engineer"
  },
  {
    name: "Bhavya Pandey",
    role: "Data Scientist"
  },
  {
    name: "Nikhileshwar Bommareddy",
    role: "AI Scientist"
  },
  {
    name: "Vinay Menon",
    role: "Software Engineer"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six passionate innovators working together to revolutionize education through cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="bg-card/50 border border-border rounded-lg p-8 max-w-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Transform Education?</h3>
            <p className="text-muted-foreground">
              Our team of experts is ready to help universities and students revolutionize learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};