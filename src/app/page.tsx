"use client";

import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Mouse glow effect
  useEffect(() => {
    const glow = document.getElementById("mouse-glow");
    const handleMouseMove = (e: MouseEvent) => {
      if (glow) {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll detection for section highlighting
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
        rootMargin: "0px",
        threshold: 0.3,
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

    return () => {
      Object.values(sectionsRef.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="px-20 py-24 h-screen overflow-auto mx-auto scroll-smooth">
      <div
        id="mouse-glow"
        className="pointer-events-none fixed top-0 left-0 z-50 w-48 h-48 rounded-full bg-blue-600/40 blur-[120px]"
      ></div>

      <div className="flex">
        <main className="fixed top-24 left-20 w-[calc(40%-1rem)]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col mb-36">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Pedro Nieto</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Full-Stack Software Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect digital experiences for the web
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-4 text-slate-300 tracking-wide">
                {["about", "experience", "projects"].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setActiveSection(id)}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${activeSection === id
                          ? "w-14 bg-teal-400"
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

              <div className="flex gap-6 mt-8">
                <a href="https://github.com/Pedroo-Nietoo" target="_blank" rel="noopener noreferrer">
                  <Github className="text-slate-500 hover:text-slate-300 transition-all duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/pedroo-nietoo/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-slate-500 hover:text-slate-300 transition-all duration-300" />
                </a>
                <a href="https://www.instagram.com/pedroo_nietoo/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-slate-500 hover:text-slate-300 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </main>

        <aside className="ml-[calc(45%+1rem)] flex-1">
          <div id="about" className="scroll-mt-24">
            <p className="mb-4">
              I’m a developer passionate about crafting accessible, robust and scalable applications that blend
              thoughtful design with robust engineering. My favorite work lies at the intersection of design and
              development, creating experiences that not only look great but are meticulously built for performance and
              usability.
            </p>
            <p className="mb-4">
              Currently, I'm a Mid-level Full-Stack Software Developer at
              <a className="text-white font-semibold cursor-pointer" href="https://www.capgemini.com/">
                {" "}
                Capgemini
              </a>
              , specializing in backend development. I contribute to the creation and maintenance of UI components that
              power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to
              deliver an inclusive user experience.
            </p>
            <p className="mb-4">
              In the past, I've had the opportunity to develop software in a variety of environments — from
              <a className="text-white font-semibold cursor-pointer" href="https://www.intelbras.com/pt-br/">
                {" "}
                security, connectivity, and energy companies
              </a>{" "}
              to
              <a className="text-white font-semibold cursor-pointer" href="https://essentiagroup.global/">
                {" "}
                clinical management software
              </a>{" "}
              companies. I also developed some NPM packages and contributed to open-source projects. I usually showcase
              my work on
              <a className="text-white font-semibold cursor-pointer" href="https://github.com/Pedroo-Nietoo">
                {" "}
                my GitHub
              </a>
              .
            </p>
            <p className="mb-40">
              In my spare time, I’m usually studying, reading, hanging out with my wife and two cats, or running around
              Hyrule searching for Korok seeds.
            </p>
          </div>

          <section id="experience" className="flex flex-col gap-4 scroll-mt-24">
            <Experience
              from="JUL 2025"
              to="Present"
              company="Capgemini"
              position="Full-Stack Software Developer"
              description="Working on a project on the financial sector, developing and maintaining services using Hexagonal Architecture, ensuring compliance with web accessibility standards and best practices."
              href="https://www.capgemini.com/"
              stack={["Java", "Spring", "Maven", "JUnit", "Mockito", "Swagger"]}
            />
            <Experience
              from="APR 2024"
              to="JUL 2025"
              company="Essentia Group"
              position="Full-Stack Software Developer"
              description="Developed and maintained advanced web platform features such as inventory and internal purchase systems for injectable products, AI-powered modules for medical automation based on patient data, certified digital document signing with A1/A3 support, multi-channel file sharing with permission-based access control, dynamic subscription plan management via toolbar interface, and continuous improvements using agile methodologies and sprint planning."
              href="https://easy-health.app/landing-page/index.html"
              stack={["TypeScript", "Node.js", "NestJS", "Angular", "Bootstrap", "SASS", "MySQL", "MongoDB", "Knex.js", "Swagger", "TypeORM", "OpenAI", "Compodoc"]}
            />
            <Experience
              from="FEB 2024"
              to="APR 2024"
              company="Essentia Group"
              position="QA - Quality Assurance"
              description="Performed comprehensive manual testing across web and mobile platforms for healthcare applications, ensuring functional accuracy and cross-device reliability. Additionally, developed automated end-to-end tests using Cypress, collaborated with developers in agile sprints, and contributed to quality assurance by identifying, documenting, and tracking issues for continuous improvement and faster delivery."
              href="https://easy-health.app/landing-page/index.html"
              stack={["Cypress", "Jira", "Confluence", "BitBucket", "TypeScript", "Angular", "Bootstrap", "Node.js"]}
            />
            <Experience
              from="FEB 2024"
              to="FEB 2023"
              company="Intelbras"
              position="Backend Software Developer"
              description="Developed, tested, and documented a CLI tool (Guardian Partner) for canary testing API endpoints using NestJS, and implemented unit tests for Spring Boot microservices to ensure system reliability and maintainability."
              href="https://portal.guardian-partner.isec.intelbras.com.br/login"
              stack={["TypeScript", "Node.js", "NestJS", "PrismaORM", "Swagger", "Java", "Spring", "PostgreSQL", "Jest", "JUnit", "Compodoc"]}
            />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-8 font-semibold hover:text-teal-300 cursor-pointer flex items-center group mb-40"
            >
              View full Résumé
              <ArrowUpRight className="inline h-5 ml-1 text-slate-300 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300" />
            </a>
          </section>

          <section id="projects" className="flex flex-col gap-4 mb-40 scroll-mt-24">
            <Project
              name="Nietubank-API"
              description="Backend API for a banking application, built with Spring and PostgreSQL, featuring user authentication, pix key and transaction management, and account operations."
              href="https://nietubank.apidocumentation.com/reference"
              image="nietubank-api"
              stack={["Java", "Spring", "PostgreSQL", "Swagger", "Docker"]}
            />
            <Project
              name="Chat AI"
              description="AI chat website built using Vercel SDK, GitHub OAuth and OpenAI"
              href="https://github.com/Pedroo-Nietoo/Chat-AI"
              image="chat-ai"
              stack={["Next.js", "GitHub OAuth", "OpenAI", "Vercel", "Tailwind CSS"]}
            />
            <Project
              name="Serverless URL Shortener"
              description="Private serverless URL shortener service built using SOLID and AWS DynamoDB"
              href="https://github.com/Pedroo-Nietoo/Serverless-URL-Shortener"
              image="serverless-url-shortener"
              stack={["AWS Lambda", "DynamoDB", "Java", "Spring"]}
            />
            <Project
              name="Node.js Logger"
              description="Simple Node.js logger library that provides a simple interface for logging messages to the console and files."
              href="https://www.npmjs.com/package/pn-logger"
              image="node-logger"
            />
            <Project
              name="Prisma Schema Docs"
              description="Documentation generator for Prisma schemas, providing a simple way to create and maintain API documentation. The generated documentation is available in HTML and Markdown format and can be easily hosted on any static file server."
              href="https://www.npmjs.com/package/prisma-schema-docs"
              image="prisma-schema-docs"
            />
          </section>
        </aside>
      </div>
    </div>
  );
}
