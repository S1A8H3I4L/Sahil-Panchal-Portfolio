import { SectionWrapper } from "./section-wrapper";
import { Award, Briefcase, Code, Users, Smile, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

const skills = [
  { icon: Code, name: "Clean Code", description: "Writing maintainable and efficient code is my top priority." },
  { icon: Users, name: "Collaboration", description: "I thrive in team environments, contributing to shared goals." },
  { icon: Smile, name: "User-Focused", description: "Passionate about creating intuitive and enjoyable user experiences." },
  { icon: Award, name: "Continuous Learning", description: "Always eager to learn new technologies and improve my skills." },
  { icon: Shield, name: "Security & Best Practices", description: "Implementing secure authentication (Google OAuth) and protecting user data." },
  { icon: Sparkles, name: "Creativity", description: "I enjoy building visually engaging and innovative digital experiences." },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my journey, skills, and passion for web development.
        </p>
      </div>


      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeInLeft [animation-delay:0.2s]">
          <div className="glassmorphism-panel p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hi, I'm <b>Sahil Panchal</b>, a <b>Software Web Developer</b> with a passion for turning ideas into real, working digital products.
              </p>
              <Image
                src="/images/Sahil2.jpg"
                alt="Sahil - Portrait"
                width={600}
                height={600}
                className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[600px] aspect-square"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fadeInRight [animation-delay:0.4s]">
          <div className="glassmorphism-panel p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Briefcase className="mr-3 h-6 w-6" />
              My Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey into development started with curiosity — wanting to understand how websites work, how interfaces are built, and how data flows behind the scenes. That curiosity grew into a full passion for creating clean, user-focused applications using technologies like Django, Python, Mean Stack, and Tailwind CSS.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Over time, I began building real-world projects that solve real-world problems. One of my proudest creations is FoodZzz, a smart food ordering platform that not only provides personalized user experiences but also incorporates secure Google authentication, dynamic dashboards, user history tracking, and even admin-level user management. Projects like this helped me dive deep into both frontend design and backend logic, shaping me into the developer I am today.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in writing clean code, focusing on user needs, learning continuously, and never settling for "good enough." This portfolio is a reflection of that mindset — a showcase of what I’ve built, what I’ve learned, and what I can do.
            </p>
          </div>

          <div className="glassmorphism-panel p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Values & Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 dark:bg-background/30 transition-all duration-300 hover:shadow-accent/20 hover:scale-105">
                  <skill.icon className="h-10 w-10 text-accent mb-3" />
                  <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
