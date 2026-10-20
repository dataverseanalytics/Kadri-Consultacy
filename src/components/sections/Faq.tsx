import Link from "next/link";
import { Plus } from "lucide-react";
import { company, faqs as defaultFaqs } from "@/content/site";

type Props = {
  items?: { q: string; a: string }[];
  title?: string;
  tint?: boolean;
};

export function Faq({ items = defaultFaqs, title = "Frequently asked questions", tint = false }: Props) {
  return (
    <section id="faq" className={`section${tint ? " section--tint" : ""}`} aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq__head" data-reveal>
          <p className="tag">FAQ</p>
          <h2 id="faq-title">{title}</h2>
          <p className="lede">Can&apos;t find what you&apos;re looking for? Our team usually replies within a few hours.</p>
          <div className="faq__contact">
            <Link href="/contact" className="btn btn--primary">
              Ask a question
            </Link>
            <a className="link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>

        <div className="faq__list" data-reveal>
          {items.map((f, i) => (
            <details key={f.q} className="faq__item" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
