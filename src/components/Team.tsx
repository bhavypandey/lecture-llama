const teamMembers = [
  {
    name: "Anish Hegde",
    role: "Software Engineer",
    email: "anish@graidai.com"
  },
  {
    name: "Ankush Maheshwari",
    role: "Software Engineer",
    email: "ankush@graidai.com"
  },
  {
    name: "Arya Gowda",
    role: "Data Engineer",
    email: "arya@graidai.com"
  },
  {
    name: "Bhavya Pandey",
    role: "Data Scientist",
    email: "pandey.bh@northeastern.edu"
  },
  {
    name: "Nikhileshwar Bommareddy",
    role: "AI Scientist",
    email: "nikhil@graidai.com"
  },
  {
    name: "Vinay Menon",
    role: "Software Engineer",
    email: "vinay@graidai.com"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-6">
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