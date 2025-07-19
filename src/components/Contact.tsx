import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Download, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "31860csaiml@gmail.com",
      href: "mailto:31860csaiml@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7275514139",
      href: "tel:+917275514139"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush-mishra-a2723321a",
      href: "https://linkedin.com/in/ayush-mishra-a2723321a"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Let's connect and create something impactful together. 
            Available for freelance and full-time roles.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-white/10 backdrop-blur-md">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.label === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <div className="text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4 group-hover:bg-gradient-secondary transition-all duration-300">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                      <p className="text-white/80 text-sm break-all">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
                    onClick={() => window.open('mailto:31860csaiml@gmail.com', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
                
                <p className="text-white/70 text-sm">
                  Open to opportunities in Data Science, Machine Learning, and Web Development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;