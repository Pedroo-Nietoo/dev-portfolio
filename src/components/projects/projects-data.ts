import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CalendarRange,
  FolderCog,
  GitBranch,
  Server,
} from "lucide-react";

export type ProjectCardVariant =
  | "default"
  | "split-showcase"
  | "top-media"
  | "eventer-api"
  | "eventer-app"
  | "ci-workflows";

export interface ProjectItemProps {
  name: string;
  category: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  stack: string[];
  variant?: ProjectCardVariant;
  previewUrl?: string;
  videoDuration?: string;
}

export interface TicketCopy {
  ticketPassLabel: string;
  ticketValidLabel: string;
  ticketDateLabel: string;
  ticketDateValue: string;
  ticketSeatLabel: string;
  ticketSeatValue: string;
}

export const PROJECTS_COPY: Record<
  "en" | "pt",
  TicketCopy & {
    label: string;
    title: string;
    githubLabel: string;
    projects: ProjectItemProps[];
  }
> = {
  en: {
    label: "SELECTED PROJECTS",
    title: "A few things I've built.",
    githubLabel: "View all projects on GitHub",
    ticketPassLabel: "VIP ACCESS PASS",
    ticketValidLabel: "VALID",
    ticketDateLabel: "DATE:",
    ticketDateValue: "24 OCT",
    ticketSeatLabel: "SEAT:",
    ticketSeatValue: "ROW A · 14",
    projects: [
      {
        name: "pymt-srv-stream-payments",
        category: "EVENT-DRIVEN · PAYMENTS",
        description:
          "Event-driven payment processing service built for asynchronous transaction streaming, resilient message consumption, and fault-tolerant financial workflows.",
        href: "https://github.com/Pedroo-Nietoo/pymt-srv-stream-payments",
        icon: Activity,
        stack: ["Java", "Spring Boot", "Kafka", "Docker", "Microservices"],
        variant: "split-showcase",
        previewUrl: "srv-stream-payments · kafka://payments.events",
      },
      {
        name: "reusable-workflows",
        category: "DEVOPS · CI/CD",
        description:
          "Centralized repository of standardized, reusable GitHub Actions workflows for automated builds, testing, code quality checks, and deployments.",
        href: "https://github.com/Pedroo-Nietoo/reusable-workflows",
        icon: GitBranch,
        stack: ["GitHub Actions", "CI/CD", "Automation"],
        variant: "ci-workflows",
      },
      {
        name: "Eventer-App",
        category: "FRONTEND · APPLICATION",
        description:
          "Client application for the Eventer platform, designed for discovering events, managing digital tickets, and interacting with real-time event schedules.",
        href: "https://github.com/Pedroo-Nietoo/Eventer-App",
        icon: CalendarRange,
        stack: ["Swift", "SwiftUI", "MVVM", "iOS", "Xcode", "Mobile"],
        variant: "eventer-app",
        previewUrl: "eventer.app/wallet/pass",
      },
      {
        name: "ubuntu-folder-customizer",
        category: "LINUX · DESKTOP TOOL",
        description:
          "Native Nautilus extension for Ubuntu 26.04+ (GTK4) to customize Yaru folder colors and variants, featuring a dedicated GUI and real-time Light/Dark mode sync.",
        href: "https://github.com/Pedroo-Nietoo/ubuntu-folder-customizer",
        icon: FolderCog,
        stack: ["Linux", "Ubuntu", "GNOME", "Shell", "CLI"],
        variant: "top-media",
        videoDuration: "0:38 DEMO",
      },
      {
        name: "Eventer-API",
        category: "BACKEND · REST API",
        description:
          "Core backend API for the Eventer platform, managing authentication, event scheduling, ticket inventory, participant registrations, and domain business rules.",
        href: "https://github.com/Pedroo-Nietoo/Eventer-API",
        icon: Server,
        stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "API REST"],
        variant: "eventer-api",
        previewUrl: "api.eventer.dev/v1",
      },
    ],
  },
  pt: {
    label: "PROJETOS EM DESTAQUE",
    title: "Algumas coisas que construí.",
    githubLabel: "Ver todos os projetos no GitHub",
    ticketPassLabel: "INGRESSO VIP",
    ticketValidLabel: "VÁLIDO",
    ticketDateLabel: "DATA:",
    ticketDateValue: "24 OUT",
    ticketSeatLabel: "ASSENTO:",
    ticketSeatValue: "FILA A · 14",
    projects: [
      {
        name: "pymt-srv-stream-payments",
        category: "ORIENTADO A EVENTOS · PAGAMENTOS",
        description:
          "Serviço de processamento de pagamentos orientado a eventos construído para streaming assíncrono de transações, consumo resiliente de mensagens e fluxos financeiros tolerantes a falhas.",
        href: "https://github.com/Pedroo-Nietoo/pymt-srv-stream-payments",
        icon: Activity,
        stack: ["Java", "Spring Boot", "Kafka", "Docker", "Microsserviços"],
        variant: "split-showcase",
        previewUrl: "srv-stream-payments · kafka://payments.events",
      },
      {
        name: "reusable-workflows",
        category: "DEVOPS · CI/CD",
        description:
          "Repositório centralizado de workflows padronizados e reutilizáveis do GitHub Actions para builds automatizados, testes, checagens de qualidade e deploys.",
        href: "https://github.com/Pedroo-Nietoo/reusable-workflows",
        icon: GitBranch,
        stack: ["GitHub Actions", "CI/CD", "Automação"],
        variant: "ci-workflows",
      },
      {
        name: "Eventer-App",
        category: "FRONTEND · APLICAÇÃO",
        description:
          "Aplicação cliente da plataforma Eventer, projetada para descoberta de eventos, gestão de ingressos digitais e interação com cronogramas em tempo real.",
        href: "https://github.com/Pedroo-Nietoo/Eventer-App",
        icon: CalendarRange,
        stack: ["Swift", "SwiftUI", "MVVM", "iOS", "Xcode", "Mobile"],
        variant: "eventer-app",
        previewUrl: "eventer.app/wallet/pass",
      },
      {
        name: "ubuntu-folder-customizer",
        category: "LINUX · FERRAMENTA DESKTOP",
        description:
          "Extensão nativa do Nautilus para Ubuntu 26.04+ (GTK4) que permite customizar cores e variantes de pastas Yaru, com GUI dedicada e sincronização em tempo real com o modo Claro/Escuro.",
        href: "https://github.com/Pedroo-Nietoo/ubuntu-folder-customizer",
        icon: FolderCog,
        stack: ["Linux", "Ubuntu", "GNOME", "Shell", "CLI"],
        variant: "top-media",
        videoDuration: "0:38 DEMO",
      },
      {
        name: "Eventer-API",
        category: "BACKEND · API REST",
        description:
          "API backend central da plataforma Eventer, gerenciando autenticação, agendamento de eventos, lote de ingressos, inscrições de participantes e regras de negócio.",
        href: "https://github.com/Pedroo-Nietoo/Eventer-API",
        icon: Server,
        stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "API REST"],
        variant: "eventer-api",
        previewUrl: "api.eventer.dev/v1",
      },
    ],
  },
};

export const DEFAULT_PROJECTS: ProjectItemProps[] = PROJECTS_COPY.en.projects;

