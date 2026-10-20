import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Process } from "@/components/sections/Process";
import { Engagement } from "@/components/sections/Engagement";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "IT Services — Software, Apps, Cloud, AI & Support",
  description:
    "Custom software development, web and mobile apps, cloud and DevOps, data and AI, UI/UX design, staff augmentation, QA and long-term support from Kadri Consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our services"
        title={
          <>
            IT services that take you from <span className="hl">idea to impact</span>
          </>
        }
        intro="Strategy, design, engineering, testing and support — delivered by one accountable team, for businesses and individuals alike."
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        image="/images/about-office.jpg"
        imageAlt="Engineers collaborating at a shared table"
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Get a free consultation <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="all-services-title">
        <div className="container">
          <SectionHead
            id="all-services-title"
            label="What we offer"
            title="Eight capabilities, one delivery standard"
            intro="Pick a single service or combine them — every engagement includes a delivery lead, weekly demos and code in your repository."
          />
          <ul className="service-grid">
            {services.map(({ slug, icon: Icon, title, desc, image, tags }, i) => (
              <li key={slug} data-reveal style={{ "--d": `${(i % 4) * 80}ms` } as React.CSSProperties}>
                <Link href={`/services/${slug}`} className="service-card">
                  <div className="service-card__media">
                    <Image src={image} alt="" fill sizes="(min-width: 1100px) 300px, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="service-card__body">
                    <span className="icon-tile service-card__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <ul className="tags" aria-label="Technologies">
                      {tags.slice(0, 3).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <span className="arrow-link">
                      Learn more <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <Engagement />
      <CtaBanner />
    </>
  );
}
