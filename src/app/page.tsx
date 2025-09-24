"use client";

import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import Experience from "../components/Experience";
import Project from "../components/Project";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      const glow = document.getElementById("mouse-glow");
      const handleMouseMove = (e: MouseEvent) => {
        if (glow) {
          glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.2,
      }
    );

    const sectionIds = ["about", "experience", "projects"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionsRef.current[id] = el;
        observer.observe(el);
      }
    });

    const currentSections = { ...sectionsRef.current };
    return () => {
      Object.values(currentSections).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 scroll-smooth">
      <div
        id="mouse-glow"
        className="pointer-events-none fixed top-0 left-0 z-50 w-48 h-48 rounded-full bg-blue-600/40 blur-[120px] hidden lg:block"
      ></div>

      <div className="lg:flex lg:gap-16">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex flex-col mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Pedro Nieto</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Full-Stack Software Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build performant, scalable and robust applications.
              </p>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex flex-col gap-4 text-slate-200 tracking-wide">
                {["about", "experience", "projects"].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setActiveSection(id)}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${activeSection === id
                          ? "w-14 bg-teal-300"
                          : "w-5 bg-slate-500 group-hover:w-10"
                          }`}
                      ></span>
                      <span
                        className={`text-sm transition-colors ${activeSection === id
                          ? "text-white font-medium"
                          : "group-hover:text-slate-100"
                          }`}
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com/Pedroo-Nietoo" target="_blank" rel="noopener noreferrer">
              <Github className="text-slate-500 hover:text-slate-200 transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/pedroo-nietoo/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-slate-500 hover:text-slate-200 transition-all duration-300" />
            </a>
          </div>
        </header>

        <main className="pt-24 lg:w-3/5 lg:py-24">
          <section id="about" className="scroll-mt-24 mb-16 md:mb-24">
            <p className="mb-4">
              I&apos;m a Software Developer with over 3+ years of experience in building scalable, robust, and accessible applications.
            </p>
            <p className="mb-4">
              Currently, I&apos;m a Mid-level Full-Stack Software Developer at
              <a className="text-white font-semibold cursor-pointer hover:text-teal-300 duration-300" href="https://www.capgemini.com/">
                {" "}
                Capgemini
              </a>
              , specializing in backend development. I contribute to the design and maintenance of services and BFFs consumed by Micro Front-ends (WebApps), leveraging Hexagonal Architecture and ensuring adherence to accessibility standards and development best practices.
            </p>
            <p className="mb-4">
              In the past, I&apos;ve had the opportunity to develop software in a variety of environments — from
              <a className="text-white font-semibold cursor-pointer hover:text-teal-300 duration-300" href="https://www.intelbras.com/pt-br/">
                {" "}
                security, connectivity, and energy companies
              </a>{" "}
              to
              <a className="text-white font-semibold cursor-pointer hover:text-teal-300 duration-300" href="https://essentiagroup.global/">
                {" "}
                clinical management software
              </a>{" "}
              companies. I also developed some NPM packages and contributed to open-source projects. I usually showcase
              my work on
              <a className="text-white font-semibold cursor-pointer hover:text-teal-300 duration-300" href="https://github.com/Pedroo-Nietoo">
                {" "}
                my GitHub
              </a>
              .
            </p>
            <p className="mb-40">
              In my spare time, I’m usually studying, reading, playing volleyball or running. I also enjoy contributing to open-source projects and exploring new technologies. I’m always eager to learn and grow.
            </p>
          </section>

          <h3 className="block sm:hidden text-2xl font-semibold mb-6">Experience</h3>
          <section id="experience" className="scroll-mt-24 group/list mb-16 md:mb-24">
            <div className="flex flex-col gap-4">
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Experience
                  from="JUL 2025"
                  to="Present"
                  company="Capgemini"
                  position="Full-Stack Software Developer"
                  description="Working on a project on the financial sector, developing and maintaining services using Hexagonal Architecture, ensuring compliance with web accessibility standards and best practices."
                  href="https://www.capgemini.com/"
                  stack={[
                    "Java",
                    "Spring",
                    "Microsservices",
                    "Kafka",
                    "MongoDB",
                    "Docker",
                    "Swagger",
                    "JUnit",
                    "Mockito",
                    "SOLID",
                    "Maven",
                    "GitHub",
                    "GitHub Actions",
                    "Sonarqube"
                  ]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Experience
                  from="APR 2024"
                  to="JUL 2025"
                  company="Essentia Group"
                  position="Full-Stack Software Developer"
                  description="Developed and maintained advanced web platform features such as inventory and internal purchase systems for injectable products, AI-powered modules for medical automation based on patient data, certified digital document signing with A1/A3 support, multi-channel file sharing with permission-based access control, dynamic subscription plan management via toolbar interface, and continuous improvements using agile methodologies and sprint planning."
                  href="https://easy-health.app/landing-page/index.html"
                  stack={[
                    "TypeScript",
                    "Node.js",
                    "NestJS",
                    "Angular",
                    "Bootstrap",
                    "SASS",
                    "MySQL",
                    "MongoDB",
                    "Knex.js",
                    "Swagger",
                    "TypeORM",
                    "OpenAI",
                    "Compodoc"
                  ]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Experience
                  from="FEB 2024"
                  to="APR 2024"
                  company="Essentia Group"
                  position="QA - Quality Assurance"
                  description="Performed comprehensive manual testing across web and mobile platforms for healthcare applications, ensuring functional accuracy and cross-device reliability. Additionally, developed automated end-to-end tests using Cypress, collaborated with developers in agile sprints, and contributed to quality assurance by identifying, documenting, and tracking issues for continuous improvement and faster delivery."
                  href="https://easy-health.app/landing-page/index.html"
                  stack={[
                    "Cypress",
                    "Jira",
                    "Confluence",
                    "BitBucket",
                    "TypeScript",
                    "Angular",
                    "Bootstrap",
                    "Node.js"
                  ]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Experience
                  from="FEB 2024"
                  to="FEB 2023"
                  company="Intelbras"
                  position="Backend Software Developer"
                  description="Developed, tested, and documented a CLI tool (Guardian Partner) for canary testing API endpoints using NestJS, and implemented unit tests for Spring Boot microservices to ensure system reliability and maintainability."
                  href="https://portal.guardian-partner.isec.intelbras.com.br/"
                  stack={[
                    "TypeScript",
                    "NestJS",
                    "Jest",
                    "Supertest",
                    "Swagger",
                    "Java",
                    "Spring",
                    "PostgreSQL",
                    "JUnit",
                    "Compodoc"
                  ]}
                />
              </div>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 font-semibold hover:text-teal-300 cursor-pointer flex items-center group mb-16 md:mb-24"
            >
              View full Résumé
              <ArrowUpRight className="inline h-5 ml-1 text-slate-300 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300" />
            </a>
          </section>

          <h3 className="block sm:hidden text-2xl font-semibold mb-6 mt-24">Projects</h3>
          <section id="projects" className="scroll-mt-24 group/list mb-16 md:mb-24">
            <div className="flex flex-col gap-4">
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Project
                  name="Nietubank-API"
                  description="Backend API for a banking application, built with Spring and PostgreSQL, featuring user authentication, pix key and transaction management, and account operations."
                  href="https://nietubank.apidocumentation.com/reference"
                  image="nietubank-api"
                  stack={["Java", "Spring", "PostgreSQL", "Swagger", "Docker"]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Project
                  name="Chat AI"
                  description="AI chat website built using Vercel SDK, GitHub OAuth and OpenAI"
                  href="https://github.com/Pedroo-Nietoo/Chat-AI"
                  image="chat-ai"
                  stack={["Next.js", "GitHub OAuth", "OpenAI", "Vercel", "Tailwind CSS"]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Project
                  name="Serverless URL Shortener"
                  description="Private serverless URL shortener service built using SOLID and AWS DynamoDB"
                  href="https://github.com/Pedroo-Nietoo/Serverless-URL-Shortener"
                  image="serverless-url-shortener"
                  stack={["AWS Lambda", "DynamoDB", "Java", "Spring"]}
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Project
                  name="Node.js Logger"
                  description="Simple Node.js logger library that provides a simple interface for logging messages to the console and files."
                  href="https://www.npmjs.com/package/pn-logger"
                  image="node-logger"
                />
              </div>
              <div className="group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                <Project
                  name="Prisma Schema Docs"
                  description="Documentation generator for Prisma schemas, providing a simple way to create and maintain API documentation. The generated documentation is available in HTML and Markdown format and can be easily hosted on any static file server."
                  href="https://www.npmjs.com/package/prisma-schema-docs"
                  image="prisma-schema-docs"
                />
              </div>
            </div>
          </section>

          <footer className="text-slate-400 text-sm mt-16 md:mt-24 text-center sm:text-left">

            <p>© {new Date().getFullYear()}
              <a
                className="text-slate-200 font-semibold cursor-pointer hover:text-teal-300 duration-300"
                href="https://github.com/Pedroo-Nietoo"
              > Pedro Nieto
              </a>
              . All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}