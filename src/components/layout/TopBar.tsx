import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { company } from "@/content/site";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href={`mailto:${company.email}`}>
            <Mail size={14} aria-hidden="true" />
            {company.email}
          </a>
          <a href={company.phoneHref} className="topbar__phone">
            <Phone size={14} aria-hidden="true" />
            {company.phone}
          </a>
        </div>
        <Link href="/contact" className="topbar__promo">
          <span className="topbar__badge">New</span>
          Now booking projects for Q1 2027 — free 30-min consultation
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
