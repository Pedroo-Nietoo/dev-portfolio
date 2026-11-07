import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazons3,
  SiAmazonsqs,
  SiAmazonwebservices,
  SiAngular,
  SiApachekafka,
  SiAwslambda,
  SiCypress,
  SiDocker,
  SiDynatrace,
  SiExpress,
  SiGithubactions,
  SiGrafana,
  SiJest,
  SiJunit5,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiReact,
  SiRedis,
  SiSonarqube,
  SiSpringboot,
  SiSwagger,
  SiSwift,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  ArrowLeftRight,
  Boxes,
  Cloud,
  FlaskConical,
  Hexagon,
  Languages,
  LayoutGrid,
  Network,
  Sparkles,
} from "lucide-react";
import type { TechCategoryProps } from "./TechStackSection";
import type { TechHighlightProps } from "./TechHighlightCard";

export const TECH_STACK_COPY: Record<
  "en" | "pt",
  {
    label: string;
    title: string;
    sections: TechCategoryProps[];
    highlights: TechHighlightProps[];
  }
> = {
  en: {
    label: "TECH STACK",
    title: "The tools I reach for.",
    sections: [
      {
        category: "Backend & Architecture",
        items: [
          { name: "Java", icon: FaJava, color: "#ED8B00" },
          { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
          { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
          { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
          { name: "Express", icon: SiExpress, color: "#E2E8F0" },
          { name: "Microservices", icon: Boxes, color: "#38BDF8" },
          { name: "Hexagonal Architecture", icon: Hexagon, color: "#A855F7" },
          { name: "REST API", icon: ArrowLeftRight, color: "#10B981" },
          { name: "Distributed Systems", icon: Network, color: "#6366F1" },
        ],
      },
      {
        category: "Cloud, Messaging & DevOps",
        items: [
          { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
          { name: "EC2", icon: SiAmazonec2, color: "#FF9900" },
          { name: "S3", icon: SiAmazons3, color: "#569A31" },
          { name: "SQS", icon: SiAmazonsqs, color: "#FF4F8B" },
          { name: "CloudFront", icon: Cloud, color: "#8C4FFF" },
          { name: "CloudWatch", icon: SiAmazoncloudwatch, color: "#FF4F8B" },
          { name: "Lambda", icon: SiAwslambda, color: "#FF9900" },
          { name: "API Gateway", icon: SiAmazonapigateway, color: "#FF4F8B" },
          { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
          { name: "Kafka", icon: SiApachekafka, color: "#E2E8F0" },
          { name: "Docker", icon: SiDocker, color: "#2496ED" },
          { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
          { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD" },
        ],
      },
      {
        category: "Data & Messaging",
        items: [
          { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
          { name: "Redis", icon: SiRedis, color: "#DC382D" },
          { name: "PrismaORM", icon: SiPrisma, color: "#5A67D8" },
          { name: "TypeORM", icon: SiTypeorm, color: "#FE0803" },
        ],
      },
      {
        category: "Testing & Observability",
        items: [
          { name: "JUnit", icon: SiJunit5, color: "#25A162" },
          { name: "Mockito", icon: FlaskConical, color: "#78A641" },
          { name: "Jest", icon: SiJest, color: "#C21325" },
          { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
          { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
          { name: "Grafana", icon: SiGrafana, color: "#F46800" },
          { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
          { name: "Dynatrace", icon: SiDynatrace, color: "#1496FF" },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "Angular", icon: SiAngular, color: "#DD0031" },
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
          { name: "Micro-Frontends", icon: LayoutGrid, color: "#A855F7" },
          { name: "Swift & SwiftUI", icon: SiSwift, color: "#F05138" },
        ],
      },
    ],
    highlights: [
      {
        title: "Architecture",
        icon: Network,
        items: [
          "Microservices",
          "Hexagonal Architecture",
          "Distributed Systems",
          "REST API",
          "SOLID",
          "Micro-Frontends",
          "Unit & E2E Testing",
        ],
      },
      {
        title: "AI in engineering",
        icon: Sparkles,
        items: [
          "SDD-based coding & testing agents",
          "AI Integrations (Recommendation)",
        ],
      },
      {
        title: "Languages I speak",
        icon: Languages,
        items: ["Portuguese (native)", "English (advanced)"],
      },
    ],
  },
  pt: {
    label: "TECH STACK",
    title: "As ferramentas que utilizo.",
    sections: [
      {
        category: "Back-End & Arquitetura",
        items: [
          { name: "Java", icon: FaJava, color: "#ED8B00" },
          { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
          { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
          { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
          { name: "Express", icon: SiExpress, color: "#E2E8F0" },
          { name: "Microsserviços", icon: Boxes, color: "#38BDF8" },
          { name: "Arquitetura Hexagonal", icon: Hexagon, color: "#A855F7" },
          { name: "API REST", icon: ArrowLeftRight, color: "#10B981" },
          { name: "Sistemas Distribuídos", icon: Network, color: "#6366F1" },
        ],
      },
      {
        category: "Cloud, Mensageria & DevOps",
        items: [
          { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
          { name: "EC2", icon: SiAmazonec2, color: "#FF9900" },
          { name: "S3", icon: SiAmazons3, color: "#569A31" },
          { name: "SQS", icon: SiAmazonsqs, color: "#FF4F8B" },
          { name: "CloudFront", icon: Cloud, color: "#8C4FFF" },
          { name: "CloudWatch", icon: SiAmazoncloudwatch, color: "#FF4F8B" },
          { name: "Lambda", icon: SiAwslambda, color: "#FF9900" },
          { name: "API Gateway", icon: SiAmazonapigateway, color: "#FF4F8B" },
          { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
          { name: "Kafka", icon: SiApachekafka, color: "#E2E8F0" },
          { name: "Docker", icon: SiDocker, color: "#2496ED" },
          { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
          { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD" },
        ],
      },
      {
        category: "Dados & Mensageria",
        items: [
          { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
          { name: "Redis", icon: SiRedis, color: "#DC382D" },
          { name: "PrismaORM", icon: SiPrisma, color: "#5A67D8" },
          { name: "TypeORM", icon: SiTypeorm, color: "#FE0803" },
        ],
      },
      {
        category: "Testes & Observabilidade",
        items: [
          { name: "JUnit", icon: SiJunit5, color: "#25A162" },
          { name: "Mockito", icon: FlaskConical, color: "#78A641" },
          { name: "Jest", icon: SiJest, color: "#C21325" },
          { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
          { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
          { name: "Grafana", icon: SiGrafana, color: "#F46800" },
          { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
          { name: "Dynatrace", icon: SiDynatrace, color: "#1496FF" },
        ],
      },
      {
        category: "Front-End",
        items: [
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "Angular", icon: SiAngular, color: "#DD0031" },
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
          { name: "Micro-Frontends", icon: LayoutGrid, color: "#A855F7" },
          { name: "Swift & SwiftUI", icon: SiSwift, color: "#F05138" },
        ],
      },
    ],
    highlights: [
      {
        title: "Arquitetura",
        icon: Network,
        items: [
          "Microsserviços",
          "Arquitetura Hexagonal",
          "Sistemas Distribuídos",
          "API REST",
          "SOLID",
          "Micro-Frontends",
          "Testes Unitários e E2E",
        ],
      },
      {
        title: "IA na engenharia",
        icon: Sparkles,
        items: [
          "Agentes baseados em SDD para codificação/testes",
          "Integrações de IA (Recomendação)",
        ],
      },
      {
        title: "Idiomas",
        icon: Languages,
        items: ["Português (nativo)", "Inglês (avançado)"],
      },
    ],
  },
};

export const DEFAULT_TECH_SECTIONS: TechCategoryProps[] =
  TECH_STACK_COPY.en.sections;
export const DEFAULT_TECH_HIGHLIGHTS: TechHighlightProps[] =
  TECH_STACK_COPY.en.highlights;

