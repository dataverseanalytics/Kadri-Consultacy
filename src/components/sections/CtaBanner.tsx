import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type Props = {
  title?: string;
  text?: string;
};

export function CtaBanner({
  title = "Have a project in mind? Let's map out how to deliver it.",
  text = "Book a free 30-minute call with a senior consultant. You'll leave with a clear next step, a rough timeline and a budget range — no obligation.",
}: Props) {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta" data-reveal>
          <Image src="/images/cta.jpg" alt="" fill sizes="(min-width: 1280px) 1240px, 100vw" className="cta__img" />
          <div className="cta__overlay" aria-hidden="true" />
          <div className="cta__copy">
            <h2 id="cta-title">{title}</h2>
            <p>{text}</p>
            <ul className="cta__points">
              {["Free consultation", "Written estimate in 3 days", "NDA on request"].map((p) => (
                <li key={p}>
                  <Check size={16} strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--white btn--lg">
              Talk to an expert <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn--glass btn--lg">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
