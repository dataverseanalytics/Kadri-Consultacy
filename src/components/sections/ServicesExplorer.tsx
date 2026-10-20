"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { services } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = services.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="services" className="section section--tint" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          id="services-title"
          label="What we do"
          title="End-to-end IT services, delivered by one accountable team"
          intro="Engage us for a single capability or the full lifecycle — strategy, design, engineering, testing and long-term support."
        />

        <div className="explorer" data-reveal>
          <div role="tablist" aria-label="Services" aria-orientation="vertical" className="explorer__tabs">
            {services.map(({ slug, icon: Icon, title }, i) => (
              <button
                key={slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`svc-tab-${slug}`}
                aria-selected={active === i}
                aria-controls={`svc-panel-${slug}`}
                tabIndex={active === i ? 0 : -1}
                className="explorer__tab"
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="explorer__tab-title">{title}</span>
                <ChevronRight className="explorer__chev" size={18} aria-hidden="true" />
              </button>
            ))}
          </div>

          {services.map((s, i) => (
            <div
              key={s.slug}
              role="tabpanel"
              id={`svc-panel-${s.slug}`}
              aria-labelledby={`svc-tab-${s.slug}`}
              hidden={active !== i}
              className="explorer__panel"
            >
              <div className="explorer__media">
                <Image src={s.image} alt="" fill sizes="(min-width: 1100px) 760px, 100vw" />
              </div>
              <div className="explorer__body">
                <h3>{s.title}</h3>
                <p className="explorer__desc">{s.desc}</p>
                <ul className="explorer__features">
                  {s.features.map((f) => (
                    <li key={f.title}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                      {f.title}
                    </li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="explorer__actions">
                  <Link href={`/services/${s.slug}`} className="btn btn--primary">
                    Explore {s.title} <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="btn btn--outline">
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
