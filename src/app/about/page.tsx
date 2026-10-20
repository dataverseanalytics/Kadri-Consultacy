import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { WhyBento } from "@/components/sections/WhyBento";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kadri Consultancy is an IT consulting and software delivery partner for businesses and individuals. Learn about our story, mission and the way we work.",
};

const pillars = [
  {
    icon: Compass,
    title: "Our mission",
    text: "Make professional software delivery accessible to every business and every founder — with honest estimates, transparent progress and products that last.",
  },
  {
    icon: Eye,
    title: "Our vision",
    text: "To be the most trusted technology partner for growing companies and ambitious individuals, known for one thing above all: we deliver what we promise.",
  },
  {
    icon: HeartHandshake,
    title: "Our values",
    text: "Transparency over spin. Ownership over excuses. Craft over shortcuts. And treating every client's budget as carefully as if it were our own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Kadri Consultancy"
        title={
          <>
            We exist to make software delivery <span className="hl">predictable</span>
          </>
        }
        intro="Too many projects run late, over budget, or never launch at all. We built Kadri Consultancy to change that — for enterprises and first-time founders alike."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        image="/images/about-team.jpg"
        imageAlt="Kadri Consultancy team in a working session"
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Work with us <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="story-title">
        <div className="container story">
          <div className="story__media" data-reveal>
            <Image src="/images/about-meeting.jpg" alt="Team members discussing a project plan" fill sizes="(min-width: 1024px) 560px, 100vw" />
            <div className="story__badge">
              <strong>120+</strong>
              <span>projects delivered</span>
            </div>
          </div>
          <div className="story__copy" data-reveal>
            <p className="tag">Our story</p>
            <h2 id="story-title">Built by engineers who were tired of broken promises</h2>
            <p>
              Kadri Consultancy started with a simple observation: most software projects don&apos;t fail because of
              technology. They fail because of unclear scope, invisible progress and teams who aren&apos;t accountable
              for the outcome.
            </p>
            <p>
              So we designed our entire company around the opposite. Every project starts with a written scope and
              estimate. Every week ends with a live demo. Every line of code lives in our client&apos;s repository from
              day one. And every engagement has one named person responsible for delivery.
            </p>
            <p>
              Today we help businesses modernise, scale and automate — and help individuals turn ideas into real,
              revenue-earning products — all with the same senior team and the same standard.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="pillars-title">
        <div className="container">
          <SectionHead id="pillars-title" label="What drives us" title="Mission, vision and values" />
          <ul className="pillars">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="pillar" data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <span className="icon-tile icon-tile--lg" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImpactBand />
      <WhyBento />
      <Testimonials />
      <CtaBanner title="Let's build your next product together." />
    </>
  );
}
