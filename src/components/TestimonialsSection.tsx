import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager at TechCorp',
      content: 'Alex delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise made the entire project seamless.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CEO at StartupVision',
      content: 'Working with Alex was a game-changer for our startup. They transformed our complex requirements into an elegant, user-friendly solution.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Creative Director',
      content: 'Alex has an incredible ability to balance technical functionality with beautiful design. The final product was both powerful and visually stunning.',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Lead Developer at InnovateLab',
      content: 'Collaborating with Alex was fantastic. Their code quality is excellent, and they bring innovative solutions to complex problems.',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from clients who have experienced the difference
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="glass border-border/50 hover-lift">
                    <CardContent className="p-8 text-center">
                      <Quote className="mx-auto mb-6 text-primary/50" size={48} />
                      
                      <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl">{testimonial.avatar}</div>
                        <div className="text-left">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass rounded-full w-12 h-12 p-0"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass rounded-full w-12 h-12 p-0"
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;