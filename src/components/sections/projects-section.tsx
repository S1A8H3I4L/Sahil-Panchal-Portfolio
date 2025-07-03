import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HAP : Heart Attack Prediction",
    description: "Heart Attack Prediction using SVM to assess risk from health data and provide preventive guidance via a user-friendly interface.",
    image: "/images/HAP.jpg",
    imageHint: "online shopping",
    tags: ["Python", "Machine Learning", "Flask"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    description: "Building a smart chatbot that combines image recognition and natural language processing to understand pictures and have meaningful, human-like conversations.",
    image: "/images/Chatbot.jpg",
    imageHint: "productivity app",
    tags: ["Artificial Intteligance", "Machine Learning", "OpenCV","Flask"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "FoodZzz – Smart Food Ordering Web App",
    description: "FoodZzz is a feature-rich, user-centric food ordering platform designed with seamless Google authentication and a dynamic personalized dashboard. The platform offers curated meal inspirations and powerful admin tools to manage users efficiently.",
    image: "/images/FoodZzz.png",
    imageHint: "personal website",
    tags: ["Python ", "Django ", "Google OAuth (Allauth)"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Course Management System",
    description: "A web-based application built using React, .NET 8, and PostgreSQL to manage academic workflows like course creation, syllabus tracking, semester progression, and student lifecycle (enrollment, dropout, re-admission) with admin and student roles.",
    image: "/images/GLS_Project.png",
    imageHint: "weather forecast",
    tags: [".NET 8 (Minimal API) ", "React", "TypeScript","Vite","PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on, showcasing my skills and passion.
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className="min-w-[300px] md:min-w-[350px] glassmorphism-card flex flex-col group animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {project.liveLink && (
                <Button variant="outline" size="sm" asChild className="glassmorphism-panel !bg-transparent active:animate-button-press hover:!bg-accent/30">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="ghost" size="sm" asChild className="active:animate-button-press hover:!bg-accent/30">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
