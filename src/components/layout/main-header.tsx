import Link from 'next/link';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { Briefcase } from 'lucide-react';
import Image from "next/image";

export function MainHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism-panel !rounded-none !shadow-md py-3 animate-fadeInDown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-headline font-semibold hover:text-primary transition-colors"
          >
            <Image
              src="/images/logo3.png" // your logo path in the public folder
              alt="Sahil Logo"
              width={54}
              height={55}
            />
            {/* Sahil */}
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><ThemeToggleButton /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
