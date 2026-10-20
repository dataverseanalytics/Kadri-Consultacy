import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Kadri Consultancy helped logistics, healthcare and retail clients ship software that delivers measurable results.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Case studies"
        title={
          <>
            Real projects. <span className="hl">Measurable results.</span>
          </>
        }
        intro="A selection of recent work for businesses and individuals. Client names are kept confidential — detailed references are available on request under NDA."
        crumbs={[{ href: "/", label: "Home" }, { label: "Case studies" }]}
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Discuss your project <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section" aria-label="Case studies">
        <div className="container case-list">
          {caseStudies.map((c, i) => (
            <article key={c.slug} id={c.slug} className="case-row" data-reveal data-flip={i % 2 === 1}>
              <div className="case-row__media">
                <Image src={c.image} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" />
              </div>
              <div className="case-row__body">
                <div className="case-row__chips">
                  <span className="chip chip--accent">{c.sector}</span>
                  <span className="chip">{c.type === "B2B" ? "Business client" : "Individual client"}</span>
                </div>
                <h2>{c.title}</h2>
                <div className="case-row__section">
                  <h3>The challenge</h3>
                  <p>{c.challenge}</p>
                </div>
                <div className="case-row__section">
                  <h3>Our solution</h3>
                  <p>{c.solution}</p>
                </div>
                <dl className="case-row__metrics">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dd>{m.value}</dd>
                      <dt>{m.label}</dt>
                    </div>
                  ))}
                </dl>
                <ul className="tags" aria-label="Technologies used">
                  {c.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaBanner title="Want results like these? Let's talk." />
    </>
  );
}
