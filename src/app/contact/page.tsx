import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { socialIcons } from "@/components/ui/BrandIcons";
import { ContactForm } from "@/components/sections/ContactForm";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Consultation",
  description:
    "Tell Kadri Consultancy about your project. Get a free 30-minute consultation and a written estimate within three business days.",
};

const nextSteps = [
  { title: "We reply within 1 business day", text: "A senior consultant reviews your enquiry and suggests a time to talk." },
  { title: "Free 30-minute scoping call", text: "We discuss goals, users, timeline and budget — no sales pitch." },
  { title: "Written estimate in 3 days", text: "You receive a clear scope, timeline and fixed or ranged price." },
];

export default function ContactPage() {
  const channels = [
    { icon: <Mail size={20} aria-hidden="true" />, label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: <Phone size={20} aria-hidden="true" />, label: "Call us", value: company.phone, href: company.phoneHref },
    { icon: socialIcons.whatsapp(20), label: "WhatsApp", value: "Chat with our team", href: company.whatsappHref },
  ];

  return (
    <>
      <PageHero
        label="Contact us"
        title={
          <>
            Let&apos;s talk about <span className="hl">your project</span>
          </>
        }
        intro="Whether you're a growing business or an individual with an idea, tell us what you need. We'll show you exactly how we'd deliver it."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="section section--flush-top" aria-label="Contact options and form">
        <div className="container contact">
          <aside className="contact__aside">
            <ul className="channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="channel"
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="channel__icon">{c.icon}</span>
                    <span>
                      <span className="channel__label">{c.label}</span>
                      <span className="channel__value">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact__meta">
              <p>
                <MapPin size={18} aria-hidden="true" />
                {company.location}
              </p>
              <p>
                <Clock size={18} aria-hidden="true" />
                {company.hours}
              </p>
            </div>

            <div className="next-steps">
              <h2>What happens next?</h2>
              <ol>
                {nextSteps.map((s, i) => (
                  <li key={s.title}>
                    <span className="next-steps__num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="contact__card">
            <ContactForm />
          </div>
        </div>
      </section>

      <Faq tint />
    </>
  );
}
