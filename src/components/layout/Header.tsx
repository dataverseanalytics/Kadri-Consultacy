"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { industries, mainNav, services } from "@/content/site";
import { Logo } from "../ui/Logo";

type MenuId = "services" | "industries" | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState<MenuId>(null);
  const [mobileSection, setMobileSection] = useState<MenuId>(null);
  const [drawerTop, setDrawerTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMenu(null);
    setDrawer(false);
  }, [pathname]);

  // Mega menu: Escape and outside click.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menu]);

  // Mobile drawer: lock scroll, Escape, auto-close on desktop resize.
  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    const onResize = () => window.innerWidth >= 1100 && setDrawer(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const openOnHover = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(id);
  };
  const closeOnLeave = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };
  const close = () => {
    setMenu(null);
    setDrawer(false);
  };

  const trigger = (id: Exclude<MenuId, null>, label: string) => (
    <button
      type="button"
      className="nav__link"
      aria-expanded={menu === id}
      aria-controls={`mega-${id}`}
      onClick={() => setMenu((m) => (m === id ? null : id))}
    >
      {label}
      <ChevronDown size={16} aria-hidden="true" />
    </button>
  );

  return (
    <header
      ref={headerRef}
      className="header"
      data-scrolled={scrolled || drawer || menu !== null}
      data-drawer={drawer}
    >
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label="Kadri Consultancy — home">
          <Logo />
        </Link>

        <nav ref={navRef} aria-label="Primary" className="nav" onMouseLeave={closeOnLeave}>
          <ul className="nav__list">
            <li onMouseEnter={() => openOnHover("services")}>{trigger("services", "Services")}</li>
            <li onMouseEnter={() => openOnHover("industries")}>{trigger("industries", "Industries")}</li>
            {mainNav.map((item) => (
              <li key={item.href} onMouseEnter={() => openOnHover(null)}>
                <Link
                  href={item.href}
                  className="nav__link"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            id="mega-services"
            className="mega"
            hidden={menu !== "services"}
            onMouseEnter={() => openOnHover("services")}
          >
            <div className="mega__main">
              <p className="mega__heading">Our services</p>
              <ul className="mega__grid">
                {services.map(({ slug, icon: Icon, title, short }) => (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="mega__item" onClick={close}>
                      <span className="icon-tile" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="mega__title">{title}</span>
                        <span className="mega__desc">{short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="mega__all" onClick={close}>
                View all services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mega__feature">
              <div className="mega__feature-img">
                <Image src="/images/hero.jpg" alt="" fill sizes="320px" />
              </div>
              <p className="mega__feature-title">Not sure where to start?</p>
              <p>Tell us your goal. We&apos;ll recommend the right team, timeline and budget — free.</p>
              <Link href="/contact" className="btn btn--primary btn--sm" onClick={close}>
                Book a free consultation <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            id="mega-industries"
            className="mega mega--compact"
            hidden={menu !== "industries"}
            onMouseEnter={() => openOnHover("industries")}
          >
            <div className="mega__main">
              <p className="mega__heading">Industries we serve</p>
              <ul className="mega__grid mega__grid--4">
                {industries.map(({ icon: Icon, name, desc }) => (
                  <li key={name}>
                    <Link href="/#industries" className="mega__item" onClick={close}>
                      <span className="icon-tile" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="mega__title">{name}</span>
                        <span className="mega__desc">{desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="header__actions">
          <Link href="/contact" className="btn btn--primary btn--sm header__cta">
            Get a free quote
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={drawer}
            aria-controls="mobile-nav"
            onClick={() => {
              // The drawer is fixed to the viewport; start it right under the header.
              setDrawerTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
              setDrawer((v) => !v);
            }}
          >
            {drawer ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            <span className="sr-only">{drawer ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="drawer" hidden={!drawer} style={{ top: drawerTop }}>
        <nav aria-label="Mobile" className="container drawer__inner">
          <ul className="drawer__list">
            {(
              [
                ["services", "Services", services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))],
                ["industries", "Industries", industries.map((i) => ({ href: "/#industries", label: i.name }))],
              ] as const
            ).map(([id, label, links]) => (
              <li key={id}>
                <button
                  type="button"
                  className="drawer__toggle"
                  aria-expanded={mobileSection === id}
                  onClick={() => setMobileSection((s) => (s === id ? null : id))}
                >
                  {label}
                  <ChevronDown size={20} aria-hidden="true" />
                </button>
                <ul className="drawer__sub" hidden={mobileSection !== id}>
                  {id === "services" && (
                    <li>
                      <Link href="/services" onClick={close}>
                        All services
                      </Link>
                    </li>
                  )}
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} onClick={close}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="drawer__link" onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary btn--lg" onClick={close}>
            Get a free quote <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
