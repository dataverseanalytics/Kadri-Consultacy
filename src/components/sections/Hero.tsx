import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="tag tag--dot">Trusted IT partner for businesses &amp; founders</p>
          <h1 id="hero-title">
            Transforming ideas into <span className="hl">reliable digital products</span>
          </h1>
          <p className="hero__lede">
            Kadri Consultancy designs, builds and supports software for companies and individuals — with a clear scope,
            a dedicated team and a live demo every week, so your project is delivered on time and on budget.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get a free consultation <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn--outline btn--lg">
              Explore our services
            </Link>
          </div>
          <div className="hero__proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>AK</span>
              <span>RS</span>
              <span>MN</span>
              <span>+</span>
            </div>
            <div>
              <div className="stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p>
                <strong>Rated 4.9/5</strong> by 120+ clients worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__image">
            <Image
              src="/images/hero.jpg"
              alt="Kadri Consultancy team planning a product roadmap on a whiteboard"
              fill
              priority
              sizes="(min-width: 1100px) 600px, 100vw"
            />
          </div>

          <div className="hero-card hero-card--status" aria-hidden="true">
            <div className="hero-card__row">
              <div>
                <p className="hero-card__kicker">Live project</p>
                <p className="hero-card__title">Retail operations platform</p>
              </div>
              <span className="pill pill--ok">
                <span className="pill__dot" />
                On track
              </span>
            </div>
            <div className="hero-card__progress">
              <div className="hero-card__row hero-card__row--small">
                <span>Sprint 4 of 6</span>
                <span>68%</span>
              </div>
              <span className="progress">
                <span style={{ width: "68%" }} />
              </span>
            </div>
            <p className="hero-card__foot">Next demo · Thursday 11:00</p>
          </div>

          <div className="hero-card hero-card--metric" aria-hidden="true">
            <span className="hero-card__icon">
              <TrendingUp size={20} />
            </span>
            <div>
              <p className="hero-card__big">+38%</p>
              <p className="hero-card__small">faster dispatch for a logistics client</p>
            </div>
          </div>

          <div className="hero-card hero-card--badge" aria-hidden="true">
            <ShieldCheck size={18} />
            NDA &amp; IP protected
          </div>
        </div>
      </div>
    </section>
  );
}
