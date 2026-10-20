import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Target } from "lucide-react";
import { faqs, getService, services } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.desc,
    openGraph: { images: [{ url: service.image }] },
  };
}

export default async function ServicePage({ params }: Params) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const { icon: Icon } = service;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        label="Service"
        title={service.title}
        intro={service.desc}
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.title }]}
        image={service.image}
      >
        <Link href="/contact" className="btn btn--primary btn--lg">
          Get a free quote <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <Link href="/work" className="btn btn--outline btn--lg">
          See our work
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="overview-title">
        <div className="container overview">
          <div className="overview__main" data-reveal>
            <p className="tag">Overview</p>
            <h2 id="overview-title">What our {service.title.toLowerCase()} service covers</h2>
            <div className="ideal-for">
              <span className="icon-tile" aria-hidden="true">
                <Target size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="ideal-for__label">Ideal for</p>
                <p>{service.idealFor}</p>
              </div>
            </div>
            <ul className="feature-grid">
              {service.features.map((f) => (
                <li key={f.title} className="feature">
                  <span className="feature__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="overview__aside" data-reveal>
            <div className="deliverables">
              <h2 className="deliverables__title">What you receive</h2>
              <ul>
                {service.deliverables.map((d) => (
                  <li key={d}>
                    <span className="included__check" aria-hidden="true">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="deliverables__tech">
                <p>Technologies</p>
                <ul className="tags">
                  {service.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn--white">
                Discuss your project <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Process />

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <SectionHead
            id="related-title"
            align="left"
            label="Related services"
            title="Often combined with"
            action={
              <Link href="/services" className="btn btn--outline">
                All services <ArrowRight size={18} aria-hidden="true" />
              </Link>
            }
          />
          <ul className="related">
            {related.map(({ slug, icon: RIcon, title, short, image }) => (
              <li key={slug} data-reveal>
                <Link href={`/services/${slug}`} className="related__card">
                  <div className="related__media">
                    <Image src={image} alt="" fill sizes="(min-width: 960px) 400px, 100vw" />
                  </div>
                  <div className="related__body">
                    <span className="icon-tile" aria-hidden="true">
                      <RIcon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{short}</p>
                    </div>
                    <ArrowUpRight className="related__arrow" size={20} aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={faqs.slice(0, 4)} tint />
      <CtaBanner />
    </>
  );
}
