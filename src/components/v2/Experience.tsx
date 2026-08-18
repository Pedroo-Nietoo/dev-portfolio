import type { JSX } from "react";
import {
 SiTypescript,
 SiNodedotjs,
 SiReact,
 SiAngular,
 SiStorybook,
 SiSpring,
 SiNestjs,
 SiApachekafka,
 SiPostgresql,
 SiMysql,
 SiMongodb,
 SiDocker,
 SiJest,
 SiSwagger,
 SiBootstrap,
 SiSass,
 SiExpress,
 SiKnexdotjs,
 SiTypeorm,
 SiOpenai,
 SiGithub,
 SiGithubactions,
 SiSonarqube,
 SiApachemaven,
 SiJunit5,
 SiSocketdotio,
 SiJsonwebtokens,
 SiCypress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export type Technology =
 | "typescript"
 | "node"
 | "react"
 | "angular"
 | "storybook"
 | "java"
 | "spring"
 | "postgresql"
 | "mysql"
 | "mongodb"
 | "jest"
 | "junit"
 | "swagger"
 | "bootstrap"
 | "sass"
 | "socket"
 | "jwt"
 | "express"
 | "nestjs"
 | "knex"
 | "typeorm"
 | "openai"
 | "kafka"
 | "docker"
 | "maven"
 | "github"
 | "github-actions"
 | "cypress"
 | "sonarqube";

type RolePeriod = {
 title: string;
 startDate: string;
 endDate: string;
 description?: string;
 isPromotion?: boolean;
};

type BaseExperienceProps = {
 company: string;
 technologies: Technology[];
};

type SimpleExperienceProps = BaseExperienceProps & {
 title: string;
 startDate: string;
 endDate: string;
 description: string;
 periods?: never;
};

type PeriodExperienceProps = BaseExperienceProps & {
 periods: RolePeriod[];
 title?: never;
 startDate?: never;
 endDate?: never;
 description?: never;
};

export type ExperienceProps =
 | SimpleExperienceProps
 | PeriodExperienceProps;

const TECHNOLOGY_ICON_MAP: Record<Technology, JSX.Element> = {
 typescript: <SiTypescript />,
 node: <SiNodedotjs />,
 react: <SiReact />,
 angular: <SiAngular />,
 storybook: <SiStorybook />,
 java: <FaJava />,
 spring: <SiSpring />,
 postgresql: <SiPostgresql />,
 mysql: <SiMysql />,
 mongodb: <SiMongodb />,
 jest: <SiJest />,
 junit: <SiJunit5 />,
 socket: <SiSocketdotio />,
 jwt: <SiJsonwebtokens />,
 swagger: <SiSwagger />,
 bootstrap: <SiBootstrap />,
 sass: <SiSass />,
 express: <SiExpress />,
 nestjs: <SiNestjs />,
 knex: <SiKnexdotjs />,
 typeorm: <SiTypeorm />,
 openai: <SiOpenai />,
 kafka: <SiApachekafka />,
 docker: <SiDocker />,
 maven: <SiApachemaven />,
 github: <SiGithub />,
 "github-actions": <SiGithubactions />,
 sonarqube: <SiSonarqube />,
 cypress: <SiCypress />,
};

export default function Experience(props: ExperienceProps) {
 function hasPeriods(
  props: ExperienceProps
 ): props is PeriodExperienceProps {
  return "periods" in props;
 }

 return (
  <div className="relative">
   {/* Timeline line */}
   {hasPeriods(props) && (
    <div className="absolute left-2 top-2 h-full max-h-[calc(100%-3.5rem)] w-px bg-gray-700" />
   )}

   {/* Content */}
   {hasPeriods(props) ? (
    <div className="flex flex-col gap-8">
     {props.periods.map((period) => (
      <div
       key={`${period.title}-${period.startDate}`}
       className="relative flex gap-6"
      >
       {/* Bullet */}
       <div className="flex w-4 justify-center">
        <span className="mt-1 h-2 w-2 rounded-full bg-gray-400" />
       </div>

       <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold">{period.title}</h4>

        <span className="text-sm text-gray-500 uppercase">
         {period.startDate} – {period.endDate}
        </span>

        {period.description && (
         <p className="max-w-3xl text-gray-300 leading-relaxed">
          {period.description}
         </p>
        )}
       </div>
      </div>
     ))}
    </div>
   ) : (
    <div className="flex flex-col gap-2">
     <h4 className="text-lg font-semibold">{props.title}</h4>

     <span className="text-sm text-gray-500 uppercase">
      {props.startDate} – {props.endDate}
     </span>

     <p className="max-w-3xl text-gray-300 leading-relaxed">
      {props.description}
     </p>
    </div>
   )}

   {/* Technologies */}
   <div className="mt-4 flex flex-wrap gap-3 text-xl text-white">
    {props.technologies.map((tech) => (
     <span
      key={tech}
      title={tech}
      className="transition hover:text-blue-300"
     >
      {TECHNOLOGY_ICON_MAP[tech]}
     </span>
    ))}
   </div>
  </div>
 );
}
