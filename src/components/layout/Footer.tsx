import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/content/site";
import { Logo } from "../ui/Logo";
import { socialIcons } from "../ui/BrandIcons";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "All services" },
  { href: "/work", label: "Case studies" },
  { href: "/#process", label: "How we work" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { key: "linkedin", label: "LinkedIn", href: company.social.linkedin },
  { key: "x", label: "X (Twitter)", href: company.social.x },
  { key: "instagram", label: "Instagram", href: company.social.instagram },
  { key: "github", label: "GitHub", href: company.social.github },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__cta">
          <div>
            <h2>Ready to build something great?</h2>
            <p>Tell us about your project and get a free consultation within one business day.</p>
          </div>
          <div className="footer__cta-actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Start your project <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href={company.whatsappHref} className="btn btn--glass btn--lg" target="_blank" rel="noopener noreferrer">
              {socialIcons.whatsapp(18)} Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo inverse />
            <p>
              Kadri Consultancy is an IT consulting and software delivery partner for businesses and individuals —
              clear scope, weekly demos and on-time launches.
            </p>
            <ul className="footer__social" aria-label="Social media">
              {socials.map((s) => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {socialIcons[s.key](18)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Services">
            <h2 className="footer__title">Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="footer__title">Company</h2>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__title">Get in touch</h2>
            <ul className="footer__contact">
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{company.location}</span>
              </li>
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Built with care · Delivered on time</p>
        </div>
      </div>
    </footer>
  );
}
