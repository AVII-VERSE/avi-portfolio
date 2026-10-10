import { Github, Linkedin } from "lucide-react";
import MediumIcon from "@/components/icons/MediumIcon";

export const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/AVII-VERSE", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/singhavinash10", 
    label: "LinkedIn" 
  },
  { 
    icon: MediumIcon, 
    href: "https://medium.com/@avinashsingh10", 
    label: "Medium" 
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = ["hero", "about", "skills", "experience", "projects", "certifications", "resume", "blog", "contact"] as const;

export const EMAIL = "as8009067@gmail.com";

export const MOBILE_BREAKPOINT = 768;
