import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  Code2,
  Cpu,
  FileCheck2,
  FlaskConical,
  Landmark,
  Layers,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

export interface ExperienceHighlight {
  icon: LucideIcon;
  text: string;
}

export interface ExperienceItemProps {
  from: string;
  to: string;
  company: string;
  companySubtitle?: string;
  position: string;
  icon?: LucideIcon;
  highlights: ExperienceHighlight[];
  href?: string;
  stack?: string[];
}

export const EXPERIENCE_COPY: Record<
  "en" | "pt",
  {
    label: string;
    title: string;
    connector: string;
    resumeLabel: string;
    experiences: ExperienceItemProps[];
  }
> = {
  en: {
    label: "EXPERIENCE",
    title: "Where I've worked.",
    connector: "TO",
    resumeLabel: "View full Resume",
    experiences: [
      {
        from: "JUL 2025",
        to: "PRESENT",
        company: "Capgemini",
        companySubtitle: "Global IT consulting · Financial sector",
        position: "Full-Stack Software Developer",
        icon: Landmark,
        href: "https://www.capgemini.com",
        highlights: [
          {
            icon: Cpu,
            text: "Built a business account-opening documentation orchestrator microservice with Java 17, Spring Boot, and Hexagonal Architecture, connecting the BFF layer to downstream microservices such as OCR image validation via OpenFeign and cross-referencing MongoDB customer data with corporate repositories, alongside autonomous PDF visit-report and dynamic service-basket contract services with Thymeleaf and upload flows in Angular 18 and 19 Micro-Frontends.",
          },
          {
            icon: Layers,
            text: "Architected an event-driven microservice from scratch to process customer documents after validation in the account-opening flow, using Apache Kafka, Dead Letter Queues (DLQ), and retry policies to asynchronously and reliably dispatch files—paired with customer-document and journey-stage identifiers—to the bank's internal document custody platform.",
          },
          {
            icon: Bot,
            text: "Accelerated the development cycle with Spec-Driven Development (SDD) AI agents, scaling architectural analysis, optimizing implementation, and speeding up automated test delivery with JUnit 5 and Mockito.",
          },
          {
            icon: ShieldCheck,
            text: "Ensure the stability of high-traffic banking journeys handling 120,000+ daily requests by diagnosing and resolving critical production incidents, alongside driving Mainframe integrations and the structural adaptation of core systems to Brazil's new alphanumeric CNPJ format.",
          },
        ],
        stack: [
          "Java 17",
          "Spring Boot",
          "Spring Data JPA",
          "Apache Kafka",
          "MongoDB",
          "OpenFeign",
          "Hexagonal Architecture",
          "Micro-Frontends",
          "Angular 18/19",
          "TypeScript",
          "Thymeleaf",
          "JUnit 5",
          "Mockito",
          "Swagger",
          "SonarQube",
          "GitHub Actions",
          "Mainframe",
        ],
      },
      {
        from: "APR 2024",
        to: "JUL 2025",
        company: "Essentia Group",
        companySubtitle: "Healthcare & clinical management platform",
        position: "Full-Stack Software Developer",
        icon: Code2,
        href: "https://essentiagroup.global",
        highlights: [
          {
            icon: Layers,
            text: "Conceived and led the development of V2 of the Inventory Control system integrated with e-commerce purchase orders, achieving a 60% reduction in bug volume through architectural refactoring and engineering best practices with Node.js, NestJS, TypeORM, Knex.js, and Angular.",
          },
          {
            icon: Bot,
            text: "Developed Artificial Intelligence modules for medical prescription recommendations, securely connecting AI models to patient clinical history and MySQL/MongoDB databases.",
          },
          {
            icon: FileCheck2,
            text: "Modernized the medical signature ecosystem with A1 and A3 digital certificate support for legal compliance and refactored the RBAC-based file-sharing architecture across Email, WhatsApp, and the Native App to strengthen security and access control, documenting modules with Swagger and Compodoc.",
          },
          {
            icon: Code2,
            text: "Spearheaded the componentization of the Design System in Angular with Storybook in direct partnership with the UX/UI Design lead, building reusable UI components (buttons, inputs, and interface primitives) and integrating Storybook with Figma via Chromatic.",
          },
        ],
        stack: [
          "Node.js",
          "NestJS",
          "TypeORM",
          "Knex.js",
          "MySQL",
          "MongoDB",
          "Angular",
          "TypeScript",
          "SASS",
          "Bootstrap 4",
          "Storybook",
          "Chromatic",
          "Swagger",
          "Compodoc",
          "AI",
          "Digital Certificates (A1/A3)",
        ],
      },
      {
        from: "FEB 2024",
        to: "APR 2024",
        company: "Essentia Group",
        companySubtitle: "Healthcare & clinical management platform",
        position: "QA - Quality Assurance",
        icon: FlaskConical,
        href: "https://essentiagroup.global",
        highlights: [
          {
            icon: ShieldCheck,
            text: "Developed and maintained an automated E2E testing architecture with Cypress integrated directly into Jenkins CI/CD pipelines to automatically validate every new release before production deployment.",
          },
          {
            icon: Wrench,
            text: "Operated with a Shift-Left profile across the Easy Health and Easy Patient ecosystems (Mobile and Desktop), combining exploratory testing on sensitive patient data flows with hands-on Full-Stack code contributions (Node.js and Angular) to fix critical bugs and ship new features.",
          },
        ],
        stack: [
          "Cypress",
          "Jenkins",
          "E2E Testing",
          "Node.js",
          "Angular",
          "TypeScript",
          "TypeORM",
          "MySQL",
          "Jira",
          "Git",
        ],
      },
      {
        from: "FEB 2023",
        to: "FEB 2024",
        company: "Intelbras",
        companySubtitle: "Security, networking & telecom leader",
        position: "Backend Software Developer",
        icon: Terminal,
        href: "https://www.intelbras.com",
        highlights: [
          {
            icon: Terminal,
            text: "Architected and specified a CLI tool from scratch using NestJS, Commander, Axios, and Winston dedicated to running Canary Testing on critical endpoints, designed to stream execution results to AWS CloudWatch for monitoring—reporting failing services, root causes, and diagnostic data for analysis and remediation.",
          },
          {
            icon: Layers,
            text: "Developed and maintained unit test suites with JUnit 4 and Jest to safeguard complex business rules across Java 16 and Spring Boot microservices alongside Node.js 18, PrismaORM, and PostgreSQL services, standardizing technical API documentation with Swagger (OpenAPI).",
          },
        ],
        stack: [
          "TypeScript",
          "Node.js 18",
          "NestJS",
          "Java 16",
          "Spring Boot",
          "PrismaORM",
          "PostgreSQL",
          "AWS CloudWatch",
          "Docker",
          "JUnit 4",
          "Jest",
          "Swagger",
          "Axios",
          "Commander",
          "Winston",
          "Git",
        ],
      },
    ],
  },
  pt: {
    label: "EXPERIÊNCIA",
    title: "Onde trabalhei.",
    connector: "ATÉ",
    resumeLabel: "Ver currículo completo",
    experiences: [
      {
        from: "JUL 2025",
        to: "PRESENTE",
        company: "Capgemini",
        companySubtitle: "Consultoria global de TI · Setor financeiro",
        position: "Desenvolvedor de Software Full-Stack",
        icon: Landmark,
        href: "https://www.capgemini.com",
        highlights: [
          {
            icon: Cpu,
            text: "Construí um microsserviço orquestrador de documentação de abertura de contas PJ com Java 17, Spring Boot e Arquitetura Hexagonal, conectando a camada BFF a outros microsserviços, como validação de imagens via OCR com OpenFeign, e cruzando dados de clientes no MongoDB com repositórios corporativos, além de serviços autônomos de geração de relatórios de visita em PDF e contratos dinâmicos de cestas de serviços com Thymeleaf e fluxos de upload em jornadas de Micro-Frontends com Angular 18 e 19.",
          },
          {
            icon: Layers,
            text: "Arquitetei do zero um microsserviço orientado a eventos para processar documentos de clientes já validados na jornada de abertura de contas, utilizando Apache Kafka, Dead Letter Queue (DLQ) e políticas de retry para despachar de forma assíncrona, resiliente e escalável os arquivos — atrelados aos identificadores de documento-cliente e da etapa da jornada — para a plataforma corporativa de custódia de documentos do banco.",
          },
          {
            icon: Bot,
            text: "Potencializei o ciclo de desenvolvimento com agentes de IA baseados em Spec-Driven Development (SDD), escalando análises de arquitetura, otimizando a codificação e acelerando a entrega de testes automatizados (JUnit 5 e Mockito).",
          },
          {
            icon: ShieldCheck,
            text: "Garanto a estabilidade de jornadas bancárias de altíssimo tráfego (mais de 120 mil requisições por dia), diagnosticando e resolvendo incidentes críticos em produção, além de conduzir integrações com Mainframe e a adequação estrutural dos sistemas para o novo formato de CNPJ alfanumérico.",
          },
        ],
        stack: [
          "Java 17",
          "Spring Boot",
          "Spring Data JPA",
          "Apache Kafka",
          "MongoDB",
          "OpenFeign",
          "Arquitetura Hexagonal",
          "Micro-Frontends",
          "Angular 18/19",
          "TypeScript",
          "Thymeleaf",
          "JUnit 5",
          "Mockito",
          "Swagger",
          "SonarQube",
          "GitHub Actions",
          "Mainframe",
        ],
      },
      {
        from: "ABR 2024",
        to: "JUL 2025",
        company: "Essentia Group",
        companySubtitle: "Plataforma de saúde & gestão clínica",
        position: "Desenvolvedor de Software Full-Stack",
        icon: Code2,
        href: "https://essentiagroup.global",
        highlights: [
          {
            icon: Layers,
            text: "Concebi e liderei o desenvolvimento da V2 do sistema de Controle de Estoque integrado ao e-commerce (pedidos de compra), alcançando uma redução de 60% no volume de bugs através de refatoração e boas práticas de engenharia com Node.js, NestJS, TypeORM, Knex.js e Angular.",
          },
          {
            icon: Bot,
            text: "Desenvolvi módulos de Inteligência Artificial para recomendação de prescrições médicas, conectando modelos inteligentes de forma segura ao histórico clínico do paciente e aos bancos de dados MySQL e MongoDB.",
          },
          {
            icon: FileCheck2,
            text: "Modernizei o ecossistema de assinatura médica com suporte a certificados digitais A1 e A3 para conformidade legal e refatorei a arquitetura de compartilhamento de arquivos baseada em RBAC integrada a múltiplos canais (E-mail, WhatsApp e App Nativo) para reforçar a segurança e o controle de acesso, documentando com Swagger e Compodoc.",
          },
          {
            icon: Code2,
            text: "Conduzi a componentização do Design System em Angular com Storybook em parceria direta com o gestor de UX/UI Design, criando componentes padronizados e reutilizáveis (botões, inputs e elementos base) e integrando o Storybook ao Figma via Chromatic.",
          },
        ],
        stack: [
          "Node.js",
          "NestJS",
          "TypeORM",
          "Knex.js",
          "MySQL",
          "MongoDB",
          "Angular",
          "TypeScript",
          "SASS",
          "Bootstrap 4",
          "Storybook",
          "Chromatic",
          "Swagger",
          "Compodoc",
          "IA",
          "Certificados Digitais (A1/A3)",
        ],
      },
      {
        from: "FEV 2024",
        to: "ABR 2024",
        company: "Essentia Group",
        companySubtitle: "Plataforma de saúde & gestão clínica",
        position: "QA - Garantia de Qualidade",
        icon: FlaskConical,
        href: "https://essentiagroup.global",
        highlights: [
          {
            icon: ShieldCheck,
            text: "Desenvolvi e mantive a arquitetura de testes automatizados E2E com Cypress integrada diretamente às pipelines do Jenkins para validar cada nova versão de forma automatizada antes do deploy em produção.",
          },
          {
            icon: Wrench,
            text: "Atuei com perfil Shift-Left nos ecossistemas Easy Health e Easy Patient (Mobile e Desktop), unindo testes exploratórios em fluxos de dados sensíveis de pacientes à atuação direta no código Full-Stack (Node.js e Angular) para resolução ágil de bugs críticos e implementação de novas funcionalidades.",
          },
        ],
        stack: [
          "Cypress",
          "Jenkins",
          "Testes E2E",
          "Node.js",
          "Angular",
          "TypeScript",
          "TypeORM",
          "MySQL",
          "Jira",
          "Git",
        ],
      },
      {
        from: "FEV 2023",
        to: "FEV 2024",
        company: "Intelbras",
        companySubtitle: "Líder em segurança, redes & telecomunicações",
        position: "Desenvolvedor de Software Backend",
        icon: Terminal,
        href: "https://www.intelbras.com",
        highlights: [
          {
            icon: Terminal,
            text: "Arquitetei e especifiquei do zero uma ferramenta CLI utilizando NestJS, Commander, Axios e Winston dedicada à execução de Canary Testing em endpoints críticos, projetada para enviar os resultados ao AWS CloudWatch para monitoramento — informando quais serviços apresentaram falha, os motivos e dados essenciais para análise e correção.",
          },
          {
            icon: Layers,
            text: "Desenvolvi e mantive suítes de testes unitários com JUnit 4 e Jest para blindar regras de negócio complexas em microsserviços com Java 16 e Spring Boot e em serviços Node.js 18, PrismaORM e PostgreSQL, padronizando a documentação técnica com Swagger (OpenAPI).",
          },
        ],
        stack: [
          "TypeScript",
          "Node.js 18",
          "NestJS",
          "Java 16",
          "Spring Boot",
          "PrismaORM",
          "PostgreSQL",
          "AWS CloudWatch",
          "Docker",
          "JUnit 4",
          "Jest",
          "Swagger",
          "Axios",
          "Commander",
          "Winston",
          "Git",
        ],
      },
    ],
  },
};

export const DEFAULT_EXPERIENCES: ExperienceItemProps[] =
  EXPERIENCE_COPY.en.experiences;

