import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import profileImage from '@/assets/cloud.jpg';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 88, icon: Palette },
    { name: 'Mobile Development', level: 82, icon: Smartphone },
    { name: 'Backend Development', level: 90, icon: Database },
    { name: 'Web Development', level: 93, icon: Globe },
    { name: 'Performance Optimization', level: 85, icon: Zap },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that blend creativity with functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden glass hover-lift">
                <img 
                  src={profileImage} 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-glow">
                <Code className="text-primary-foreground" size={32} />
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Building Digital Experiences</h3>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using cutting-edge technologies. My passion 
                lies in transforming complex problems into simple, beautiful solutions.
              </p>
              <p>
                I believe in the power of clean code, user-centered design, and continuous 
                learning. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the community.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Technical Skills</h4>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="text-primary" size={18} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;