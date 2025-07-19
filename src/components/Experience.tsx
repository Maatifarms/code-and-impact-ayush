import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Analyst",
      company: "Maati Farms",
      period: "2023 - Present",
      description: "Delivered actionable insights through dashboards and Excel-based reporting, optimizing decision-making for agri-products.",
      skills: ["Excel", "Dashboards", "Data Analysis", "Agriculture"]
    },
    {
      type: "work", 
      title: "Intern",
      company: "The Sparks Foundation",
      period: "2023",
      description: "Built predictive models using supervised learning for business case scenarios.",
      skills: ["Machine Learning", "Supervised Learning", "Python", "Model Development"]
    }
  ];

  const education = [
    {
      degree: "MBA (Business Analytics & Marketing)",
      institution: "Bhartiya Vidhyapeeth, Pune",
      period: "2024 - 2026",
      status: "Pursuing"
    },
    {
      degree: "B.Com.",
      institution: "Rajendra Singh University", 
      period: "2020 - 2023",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Data Science Certification",
      provider: "Almabetter",
      year: "2023"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey and educational background in data science and analytics
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-elegant border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gradient-secondary text-white">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-primary/20 text-foreground hover:bg-gradient-subtle transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-secondary">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <Card key={index} className="shadow-elegant border-0 bg-card mb-4">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <Badge 
                        variant={edu.status === "Pursuing" ? "default" : "secondary"}
                        className={edu.status === "Pursuing" ? "bg-gradient-primary text-white" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-elegant border-0 bg-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-primary font-semibold mb-1">{cert.provider}</p>
                    <p className="text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;