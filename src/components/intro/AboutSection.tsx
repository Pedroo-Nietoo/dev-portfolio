"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const ABOUT_COPY: Record<
  "en" | "pt",
  {
    label: string;
    title: string;
    paragraphs: string[];
  }
> = {
  en: {
    label: "ABOUT ME",
    title: "Engineering for scale, reliability, and clarity.",
    paragraphs: [
      "I started out building canary-testing CLI tools and backend test suites for telecom and security systems at Intelbras, moved through QA and full-stack healthcare software at Essentia Group, where a bug affects clinical workflows and patient care, and now work across financial services at one of Brazil's largest banks through Capgemini, where a bad deploy can impact over 120,000 daily transactions. That trajectory taught me to value the invisible work that keeps production standing: clean domain boundaries, fault-tolerant event processing, tests that catch regressions before users do, and API contracts that don't break on integration.",
      "Most of my career has been TypeScript, Node.js, NestJS, and Java with Spring Boot, on top of Kafka, PostgreSQL, and MongoDB, running distributed services on Docker and AWS. At Capgemini, the focus is Java, Spring Boot, microservices, Angular, and micro-frontends. I rely on Hexagonal Architecture, Event-Driven Design, DDD, and SOLID to keep the domain isolated, services decoupled, and codebases easy to test and evolve.",
      "Over the last few years, I've also focused on understanding how AI truly makes a difference in day-to-day software engineering. Not demos: from clinical automation modules in production that use AI to cross-reference patient data against system databases to generate recommendations, to AI coding and testing agents guided by Spec-Driven Development (SDD) that speed up delivery without losing regression coverage.",
      "Outside of code, I'm the person who writes the documentation nobody asked for and builds reusable CI/CD workflows to remove friction from the team. I'm also passionate about discovering new tools for my daily workflow and building my own.",
    ],
  },
  pt: {
    label: "SOBRE MIM",
    title: "Engenharia focada em escala, resiliência e clareza.",
    paragraphs: [
      "Comecei construindo ferramentas CLI de testes canário e suítes de testes backend para sistemas de telecom e segurança na Intelbras, passei por QA e desenvolvimento full-stack em saúde no Essentia Group, onde um bug afeta fluxos clínicos e atendimentos, e hoje atuo em diversos serviços do setor financeiro em um dos maiores bancos do Brasil através da Capgemini, onde um deploy ruim pode afetar mais de 120.000 transações diárias. Essa trajetória me ensinou a valorizar o trabalho invisível que mantém a produção de pé: fronteiras de domínio claras, mensageria tolerante a falhas, testes que pegam regressões antes do usuário e contratos de API que não quebram na integração.",
      "Passei a maior parte da carreira com TypeScript, Node.js, NestJS e Java com Spring Boot, em cima de Kafka, PostgreSQL e MongoDB, com serviços distribuídos em Docker e AWS. Na Capgemini, o foco é Java, Spring Boot, microsserviços, Angular e micro-frontends. Uso Arquitetura Hexagonal, Event-Driven Design, DDD e SOLID para manter o domínio isolado, os serviços desacoplados e o código fácil de testar e evoluir.",
      "Nos últimos anos, também busquei entender melhor como a IA realmente faz a diferença no dia a dia da engenharia de software. Nada de demo: desde módulos de automação clínica em produção, que usam IA para cruzar os dados do paciente com a base do sistema e gerar recomendações, até agentes de IA para codificação e testes guiados por Spec-Driven Development (SDD), que aceleram entregas sem perder cobertura contra regressões.",
      "Fora do código, sou quem escreve a documentação que ninguém pediu e cria workflows reutilizáveis de CI/CD para tirar atrito do time. Também sou apaixonado por descobrir novas ferramentas para usar no dia a dia e por criar as minhas próprias.",
    ],
  },
};

interface AboutSectionProps {
  label?: string;
  title?: string;
  paragraphs?: string[];
}

export default function AboutSection({
  label,
  title,
  paragraphs,
}: AboutSectionProps) {
  const { lang } = useLanguage();
  const t = ABOUT_COPY[lang];

  const activeLabel = label ?? t.label;
  const activeTitle = title ?? t.title;
  const activeParagraphs = paragraphs ?? t.paragraphs;

  return (
    <section id="about" className="w-full scroll-mt-14 text-neutral-100">
      <div className="grid grid-cols-1 gap-10 pt-24 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            {activeLabel}
          </p>
          <h2 className="mt-3 max-w-[330px] text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[30px]">
            {activeTitle}
          </h2>
        </div>

        <div className="space-y-5 text-[14px] leading-relaxed text-neutral-400 md:col-span-6 md:col-start-7">
          {activeParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
