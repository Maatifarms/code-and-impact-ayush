import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-gradient-subtle">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                I am a passionate developer with expertise in{" "}
                <span className="text-primary font-semibold">Python</span>,{" "}
                <span className="text-secondary font-semibold">machine learning</span>, and{" "}
                <span className="text-primary font-semibold">data visualization</span>. 
                I've built projects that combine smart analytics with real-world applicability—ranging from 
                healthcare detection tools to network prediction systems. I enjoy learning new technologies 
                and am always open to{" "}
                <span className="text-secondary font-semibold">freelance and full-time roles</span> in 
                data or web domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;