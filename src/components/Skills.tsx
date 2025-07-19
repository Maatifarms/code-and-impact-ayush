import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Lightbulb, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Libraries",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 75 }
      ]
    },
    {
      title: "Data Tools",
      icon: Database,
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Excel", level: 90 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Concepts",
      icon: Lightbulb,
      skills: [
        { name: "EDA", level: 92 },
        { name: "Machine Learning", level: 88 },
        { name: "Model Tuning", level: 85 },
        { name: "Data Visualization", level: 90 }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "REST APIs", level: 80 },
        { name: "Google Colab", level: 90 },
        { name: "Jupyter Notebook", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the data science and web development stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-elegant border-0 bg-card hover:shadow-primary transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-secondary">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;