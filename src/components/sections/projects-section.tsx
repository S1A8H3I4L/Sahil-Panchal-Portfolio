import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SchoolGuard – Institutional Tactical Intelligence Platform",
    description: "Developed a centralized school safety platform with role-based access, secure student registry, and real-time SMS emergency alerts, enabling government-level oversight across multiple institutions.",
    image: "/images/SchoolGuard.png",
    imageHint: "productivity app",
    tags: ["Safety Management", "Real-Time Alerts", "Dashboard", "Flask", "SMS Integration"],
    liveLink: "https://school-guard.vercel.app/",
    // githubLink: "#",
  },
  {
    title: "Vaultify – Secure Cloud Storage Platform",
    description: "Built a secure cloud storage platform inspired by Google Drive, featuring Google OAuth authentication, user-isolated file management, drag-and-drop uploads, intelligent file organization, and storage analytics using React and Tailwind CSS.",
    image: "/images/Vaultify.png",
    imageHint: "productivity app",
    tags: ["Cloud Storage", "React", "Tailwind CSS", "Google OAuth", "File Management", "Analytics"],
    liveLink: "https://vaultify-secure-cloud-storage.vercel.app/",
    githubLink: "https://github.com/S1A8H3I4L/Vaultify",
  },
  {
    title: "Qlickin – Automated Attendance & Analytics System",
    description: "Developed an automated student attendance and analytics system with QR code & OTP verification, real-time validation, and web/mobile dashboards, preventing proxy attendance and enabling secure, cloud-based monitoring.",
    image: "/images/Qlickin.png",
    imageHint: "productivity app",
    tags: ["Attendance Management", "QR Code", "OTP Verification", "Analytics Dashboard", "Web & Mobile"],
    liveLink: "https://qlickin.vercel.app/",
    // githubLink: "#",
  },
  {
    title: "Expense Management System",
    description: "Developed a role-based expense management platform with automated multi-level approval workflows, OCR-based receipt scanning, and multi-currency expense handling, enabling transparent and scalable reimbursement processes.",
    image: "/images/ExpenseManagement.png",
    imageHint: "productivity app",
    tags: ["Expense Management", "OCR Receipt Scanning", "Workflow Automation", "Multi-Currency", "Role-Based Access"],
    liveLink: "https://expense-managements.vercel.app/",
    githubLink: "https://github.com/S1A8H3I4L/Expense-Management",
  },
  {
    title: "FoodZzz – Smart Food Ordering Web App",
    description: "Developed a full-stack smart food ordering platform using Django and TailwindCSS with Google OAuth authentication, dynamic cart and checkout flow, Google Pay integration, downloadable recipe PDFs, and a role-based admin dashboard.",
    image: "/images/FoodZzz.png",
    imageHint: "productivity app",
    tags: ["Food Ordering", "Django", "Tailwind CSS", "Google OAuth", "Google Pay", "Admin Dashboard", "Full-Stack"],
    // liveLink: "#",
    // githubLink: "#",
  },
    {
    title: "StackIt – Collaborative Q&A Forum",
    description: "Developed a minimal Q&A forum platform enabling collaborative learning with role-based access, rich-text question/answer posting, voting, answer acceptance, and a real-time notification system.",
    image: "/images/Stackit.png",
    imageHint: "productivity app",
    tags: ["Collaborative Learning", "Q&A Platform", "Real-Time Notifications", "Role-Based Access", "Voting System", "Web Development"],
    // liveLink: "#",
    // githubLink: "#",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    description: "Combines deep learning for accurate image recognition with NLP-driven, context-aware conversations for interactive, human-like AI communication.",
    image: "/images/Chatbot.jpg",
    imageHint: "productivity app",
    tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "OpenCV", "Flask"],
    // liveLink: "#",
    // githubLink: "#",
  },
  {
    title: "Course Management System",
    description: "A web-based application built using React, .NET 8, and PostgreSQL to manage academic workflows like course creation, syllabus tracking, semester progression, and student lifecycle (enrollment, dropout, re-admission) with admin and student roles.",
    image: "/images/GLS_Project.png",
    imageHint: "weather forecast",
    tags: [".NET 8 (Minimal API) ", "React", "TypeScript","Vite","PostgreSQL"],
    // liveLink: "#",
    // githubLink: "#",
  },
  {
    title: "HAP : Heart Attack Prediction",
    description: "Collect and preprocess health data, train an SVM model, and build a user-friendly web risk prediction interface. Ensure ethical testing, data privacy, and provide preventive guidance for at-risk users.",
    image: "/images/HAP.jpg",
    imageHint: "productivity app",
    tags: ["Machine Learning", "SVM", "Health Analytics", "Data Preprocessing", "Python", "Web Interface"],
    // liveLink: "#",
    // githubLink: "#",
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
