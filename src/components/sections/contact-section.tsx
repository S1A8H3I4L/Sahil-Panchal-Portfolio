"use client";

import React, { useState, type FormEvent } from 'react';
import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-input";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong while sending the message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <SectionWrapper id="contact" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind, or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 animate-fadeInLeft [animation-delay:0.2s]">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can reach me via the form or through the contact details below. I look forward to hearing from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 glassmorphism-panel p-4">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:sahilpanchal1818@gmail.com" className="text-foreground hover:text-primary transition-colors">sahilpanchal1818@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 glassmorphism-panel p-4">
              <Phone className="h-6 w-6 text-accent" />
              <a href="tel:+91 9558647711" className="text-foreground hover:text-primary transition-colors">+91 95586 47711</a>
            </div>
            <div className="flex items-center gap-3 glassmorphism-panel p-4">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="text-foreground">Ahmedabad, India</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 glassmorphism-panel p-6 md:p-8 animate-fadeInRight [animation-delay:0.4s]">
          <FloatingLabelInput
            label="Your Name"
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <FloatingLabelInput
            label="Your Email"
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <FloatingLabelTextarea
            label="Your Message"
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full active:animate-button-press shadow-lg hover:shadow-primary/50 transition-shadow duration-300 group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
