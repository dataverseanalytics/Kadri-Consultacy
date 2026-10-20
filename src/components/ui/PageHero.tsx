import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { href?: string; label: string };

type Props = {
  label: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function PageHero({ label, title, intro, crumbs, image, imageAlt = "", children }: Props) {
  return (
    <section className={`page-hero${image ? " page-hero--media" : ""}`}>
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>
          <p className="tag tag--dot">{label}</p>
          <h1>{title}</h1>
          <p className="page-hero__lede">{intro}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        {image && (
          <div className="page-hero__media">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
        )}
      </div>
    </section>
  );
}
