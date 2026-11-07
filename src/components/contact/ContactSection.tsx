"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import ContactChannelCards from "@/components/contact/ContactChannelCards";
import Footer from "@/components/contact/Footer";

const CONTACT_COPY = {
  en: {
    label: "CONTACT",
    title: "Let's talk.",
    description:
      "I'm always up for talking about distributed systems, backend architecture, event-driven microservices, or how teams are putting AI to work in their own workflow. If you want to swap notes or build something together, write to me.",
    sendButton: "Send me an email",
    directEmailLabel: "DIRECT EMAIL",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    footerRole: "FULL-STACK SOFTWARE ENGINEER",
    footerLocation: "SÃO JOSÉ, BRASIL",
  },
  pt: {
    label: "CONTATO",
    title: "Vamos conversar.",
    description:
      "Estou sempre aberto para conversar sobre sistemas distribuídos, arquitetura backend, microsserviços orientados a eventos ou como equipes estão aplicando IA em seus próprios fluxos de trabalho. Se quiser trocar ideias ou construir algo junto, me mande uma mensagem.",
    sendButton: "Me envie um e-mail",
    directEmailLabel: "E-MAIL DIRETO",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    footerRole: "ENGENHEIRO DE SOFTWARE FULL-STACK",
    footerLocation: "SÃO JOSÉ, BRASIL",
  },
} as const;

interface ContactSectionProps {
  label?: string;
  title?: string;
  description?: string;
  email?: string;
  githubHref?: string;
  githubHandle?: string;
  linkedinHref?: string;
  linkedinHandle?: string;
  footerName?: string;
  footerRole?: string;
  footerLocation?: string;
}

export default function ContactSection({
  label,
  title,
  description,
  email = "pedronieto.2005@gmail.com",
  githubHref = "https://github.com/Pedroo-Nietoo",
  githubHandle = "@Pedroo-Nietoo",
  linkedinHref = "https://www.linkedin.com/in/pedroo-nietoo/",
  linkedinHandle = "in/pedroo-nietoo",
  footerName = "PEDRO NIETO",
  footerRole,
  footerLocation,
}: ContactSectionProps) {
  const { lang } = useLanguage();
  const t = CONTACT_COPY[lang];

  return (
    <div id="contact" className="w-full scroll-mt-24 text-neutral-100">
      <div className="-mx-6 border-t border-white/[0.07] sm:-mx-12 lg:-mx-16" />

      <section className="grid grid-cols-1 gap-10 py-24 md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            {label ?? t.label}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            {title ?? t.title}
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-400">
            {description ?? t.description}
          </p>
        </div>

        <ContactChannelCards
          email={email}
          directEmailLabel={t.directEmailLabel}
          sendLabel={t.sendButton}
          copyLabel={t.copyLabel}
          copiedLabel={t.copiedLabel}
          linkedinHref={linkedinHref}
          linkedinHandle={linkedinHandle}
          githubHref={githubHref}
          githubHandle={githubHandle}
        />
      </section>

      <Footer
        name={footerName}
        role={footerRole ?? t.footerRole}
        location={footerLocation ?? t.footerLocation}
      />
    </div>
  );
}
