import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { models } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

export function Engagement() {
  return (
    <section id="engagement" className="section section--tint" aria-labelledby="engagement-title">
      <div className="container">
        <SectionHead
          id="engagement-title"
          label="Engagement models"
          title="Flexible ways to work together"
          intro="Not sure which one is right? We'll recommend one on the first call — and explain why."
        />

        <ul className="models">
          {models.map((m, i) => (
            <li
              key={m.name}
              className="model"
              data-featured={m.featured}
              data-reveal
              style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
            >
              {m.featured && <p className="model__badge">Most popular for B2B</p>}
              <h3>{m.name}</h3>
              <p className="model__tagline">{m.tagline}</p>
              <dl className="model__facts">
                <div>
                  <dt>Best for</dt>
                  <dd>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    {m.bestFor}
                  </dd>
                </div>
                <div>
                  <dt>Pricing</dt>
                  <dd>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    {m.pricing}
                  </dd>
                </div>
                <div>
                  <dt>Typical length</dt>
                  <dd>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    {m.length}
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className={`btn ${m.featured ? "btn--primary" : "btn--outline"}`}>
                Get started <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
