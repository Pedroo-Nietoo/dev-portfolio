import type { LucideIcon } from "lucide-react";
import { GraduationCap, Terminal } from "lucide-react";

export interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  icon?: LucideIcon;
}

export const EDUCATION_COPY: Record<
  "en" | "pt",
  {
    label: string;
    title: string;
    items: EducationItemProps[];
  }
> = {
  en: {
    label: "EDUCATION",
    title: "Academic background.",
    items: [
      {
        degree: "Bachelor of Computer Science",
        institution: "Universidade do Sul de Santa Catarina (UNISUL)",
        location: "Palhoça, SC",
        icon: GraduationCap,
      },
      {
        degree: "Technical Degree in Systems Development",
        institution: "SENAI",
        location: "São José, SC",
        icon: Terminal,
      },
    ],
  },
  pt: {
    label: "FORMAÇÃO",
    title: "Formação acadêmica.",
    items: [
      {
        degree: "Bacharelado em Ciências da Computação",
        institution: "Universidade do Sul de Santa Catarina (UNISUL)",
        location: "Palhoça, SC",
        icon: GraduationCap,
      },
      {
        degree: "Técnico em Desenvolvimento de Sistemas",
        institution: "SENAI",
        location: "São José, SC",
        icon: Terminal,
      },
    ],
  },
};
