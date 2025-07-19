import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Network, FileText, Camera, TrendingUp, Globe, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ML-Based Disease Detection",
      description: "Built a machine learning model that predicts possible diseases based on patient symptoms and historical datasets.",
      icon: Brain,
      tags: ["Python", "Scikit-learn", "Healthcare", "ML"]
    },
    {
      title: "Eye Infection Detector", 
      description: "Created an AI-based tool using image recognition to identify common eye infections from retinal images.",
      icon: Eye,
      tags: ["OpenCV", "TensorFlow", "Computer Vision", "Healthcare"]
    },
    {
      title: "Network Capacity Forecasting",
      description: "Developed a model to predict and optimize telecom network usage based on historical and real-time data.",
      icon: Network,
      tags: ["Time Series", "Forecasting", "Telecom", "Analytics"]
    },
    {
      title: "AI Resume Matcher",
      description: "Built a system that helps recruiters match resumes to job descriptions using natural language processing techniques.",
      icon: FileText,
      tags: ["NLP", "Text Processing", "HR Tech", "Automation"]
    },
    {
      title: "Face Mask Detection App",
      description: "Created a real-time camera system that detects face mask compliance using computer vision.",
      icon: Camera,
      tags: ["OpenCV", "Real-time", "Safety", "Computer Vision"]
    },
    {
      title: "COVID-19 Sentiment Tracker",
      description: "Analyzed social media sentiment trends on COVID-19 using NLP models and visualization dashboards.",
      icon: TrendingUp,
      tags: ["NLP", "Social Media", "Sentiment Analysis", "Visualization"]
    },
    {
      title: "Dynamic Portfolio Website",
      description: "Built a responsive personal website with interactive project showcases and contact features.",
      icon: Globe,
      tags: ["React", "Responsive", "Web Development", "UI/UX"]
    },
    {
      title: "Movie Recommendation Engine",
      description: "Developed a personalized movie recommender based on user interests and similarity scores.",
      icon: Star,
      tags: ["Recommendation System", "Collaborative Filtering", "Python", "Pandas"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing expertise in machine learning, data science, and web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 bg-card border-0 shadow-elegant"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-gradient-subtle text-foreground border-0 hover:bg-gradient-primary hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;