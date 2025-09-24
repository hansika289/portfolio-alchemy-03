import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ResumeSection = () => {
  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented microservices architecture'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'DigitalCraft Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and mobile-first designs for clients across various industries.',
      achievements: [
        'Delivered 15+ successful projects',
        'Improved user engagement by 60%',
        'Established component library'
      ]
    },
    {
      title: 'UI/UX Developer',
      company: 'StartupHub',
      period: '2018 - 2020',
      description: 'Designed and developed user interfaces for early-stage startups, focusing on user experience and conversion optimization.',
      achievements: [
        'Designed interfaces for 10+ startups',
        'Increased conversion rates by 35%',
        'Conducted user research sessions'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      description: 'Graduated with honors, specializing in software engineering and human-computer interaction.',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'FreeCodeCamp',
      period: '2017',
      description: 'Comprehensive certification covering modern web development technologies and best practices.',
      certificate: 'Certified'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      credentialId: 'GCP-PD-2022-456'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Linux Foundation',
      year: '2022',
      credentialId: 'CKA-2022-789'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2021',
      credentialId: 'META-REACT-2021-123'
    }
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey, education, and achievements that shape my expertise
          </p>
        </div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="experience" className="flex items-center space-x-2">
              <Briefcase size={16} />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <GraduationCap size={16} />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center space-x-2">
              <Award size={16} />
              <span>Certifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((item, index) => (
              <Card key={index} className="glass border-border/50 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      {item.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="glass border-border/50 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{item.degree}</CardTitle>
                      <p className="text-primary font-medium">{item.school}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      {item.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{item.description}</p>
                  {item.gpa && (
                    <p className="text-sm text-primary font-medium">GPA: {item.gpa}</p>
                  )}
                  {item.certificate && (
                    <p className="text-sm text-primary font-medium">Status: {item.certificate}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass border-border/50 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{cert.year}</span>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeSection;