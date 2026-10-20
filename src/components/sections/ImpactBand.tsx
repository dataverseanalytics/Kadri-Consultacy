import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from "@/content/site";
import { Counter } from "../ui/Counter";

export function ImpactBand() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="impact__bg" aria-hidden="true" />
      <div className="container impact__grid">
        <div className="impact__copy" data-reveal>
          <p className="tag tag--dark">Our track record</p>
          <h2 id="impact-title">Delivery you can measure — not just promises.</h2>
          <p>
            We track every project against the scope, timeline and budget agreed on day one. These are the results.
          </p>
          <Link href="/work" className="btn btn--white">
            See our case studies <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <dl className="impact__stats">
          {stats.map((s, i) => (
            <div key={s.label} className="impact__stat" data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <dt>{s.label}</dt>
              <dd>
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
