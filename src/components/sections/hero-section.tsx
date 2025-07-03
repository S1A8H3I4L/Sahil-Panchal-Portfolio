import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative isolate">
      {/* Subtle gradient background element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D3A6E6] to-[#A6D1E6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-primary font-medium animate-fadeInUp [animation-delay:0.2s]">
          Hello, I&apos;m
        </p>
        <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-headline font-extrabold tracking-tight animate-fadeInUp [animation-delay:0.4s] bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-foreground">
          Sahil Panchal
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-accent animate-fadeInUp [animation-delay:0.6s]">
          Software Developer
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fadeInUp [animation-delay:0.8s]">
          I’m passionate about building modern, user-friendly web experiences. With a focus on clean design, performance, and problem-solving, I aim to turn ideas into impactful digital solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp [animation-delay:1s]">
          <Button size="lg" variant="default" className="active:animate-button-press shadow-lg hover:shadow-primary/50 transition-shadow duration-300 group" asChild>
            <a href="#projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="glassmorphism-panel !bg-transparent active:animate-button-press shadow-lg hover:shadow-accent/50 transition-shadow duration-300 group" asChild>
            <a href="/Sahil_Resume.pdf" download="Sahil_Resume.pdf">
              Download CV <Download className="ml-2 h-5 w-5 group-hover:animate-bounce transition-transform" />
            </a>
          </Button>
        </div>
      </div>
      {/* Another gradient blob for balance */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 scale-x-[-1] rotate-[-15deg] bg-gradient-to-tl from-[#D3A6E6] to-[#A6D1E6] opacity-20 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </SectionWrapper>
  );
}
