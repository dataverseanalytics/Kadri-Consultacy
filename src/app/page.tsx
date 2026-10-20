import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Audiences } from "@/components/sections/Audiences";
import { ServicesExplorer } from "@/components/sections/ServicesExplorer";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyBento } from "@/components/sections/WhyBento";
import { Engagement } from "@/components/sections/Engagement";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Audiences />
      <ServicesExplorer />
      <ImpactBand />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <WhyBento />
      <Engagement />
      <Faq />
      <CtaBanner />
    </>
  );
}
