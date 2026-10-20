import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { audiences } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

export function Audiences() {
  return (
    <section id="who-we-help" className="section" aria-labelledby="who-title">
      <div className="container">
        <SectionHead
          id="who-title"
          label="Who we help"
          title={
            <>
              Built for businesses. <span className="hl">Just as good for individuals.</span>
            </>
          }
          intro="Two kinds of clients, one delivery standard. Whether you run a growing company or you're launching your first product, you get the same senior team and the same process."
        />

        <div className="audiences">
          {audiences.map((a, i) => (
            <article key={a.id} className="aud-card" data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
              <div className="aud-card__media">
                <Image src={a.image} alt="" fill sizes="(min-width: 960px) 600px, 100vw" />
                <span className="aud-card__badge">{a.badge}</span>
              </div>
              <div className="aud-card__body">
                <p className="aud-card__label">{a.label}</p>
                <h3>{a.title}</h3>
                <p className="aud-card__intro">{a.intro}</p>
                <ul className="checklist">
                  {a.points.map((p) => (
                    <li key={p}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${i === 0 ? "btn--primary" : "btn--dark"}`}>
                  {a.cta} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
