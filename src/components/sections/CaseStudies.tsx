import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

export function CaseCard({ c, index = 0 }: { c: (typeof caseStudies)[number]; index?: number }) {
  return (
    <article className="case-card" data-reveal style={{ "--d": `${index * 110}ms` } as React.CSSProperties}>
      <div className="case-card__media">
        <Image src={c.image} alt="" fill sizes="(min-width: 960px) 400px, 100vw" />
        <div className="case-card__chips">
          <span>{c.sector}</span>
          <span>{c.type}</span>
        </div>
      </div>
      <div className="case-card__body">
        <h3>{c.title}</h3>
        <p>{c.summary}</p>
        <dl className="case-card__metrics">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <dd>{m.value}</dd>
              <dt>{m.label}</dt>
            </div>
          ))}
        </dl>
        <Link href={`/work#${c.slug}`} className="arrow-link">
          Read case study <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">: {c.title}</span>
        </Link>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          align="left"
          label="Success stories"
          title="Real outcomes our clients can measure"
          intro="Client names are kept private — full case studies are available on request under NDA."
          action={
            <Link href="/work" className="btn btn--outline">
              View all case studies <ArrowRight size={18} aria-hidden="true" />
            </Link>
          }
        />
        <div className="cases">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
