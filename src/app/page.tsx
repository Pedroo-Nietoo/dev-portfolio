import ContactSection from "@/components/contact/ContactSection";
import ExperienceTimelineSection from "@/components/experience/ExperienceTimelineSection";
import AboutSection from "@/components/intro/AboutSection";
import HeroSection from "@/components/intro/HeroSection";
import Navbar from "@/components/intro/Navbar";
import SelectedWorkSection from "@/components/projects/SelectedWorkSection";
import TechStack from "@/components/tech-stack/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-44">
        <div className="mx-auto flex min-h-screen w-full max-w-[1060px] flex-col justify-between border-x border-white/[0.07] px-6 sm:px-12 lg:px-16">
          <div className="w-full space-y-28">
            <AboutSection />
            <SelectedWorkSection />
            <ExperienceTimelineSection />
            <TechStack />
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}
