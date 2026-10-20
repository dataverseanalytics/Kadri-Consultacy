"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/content/site";

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="section section--tint testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head section-head--left section-head--with-action" data-reveal>
          <div className="section-head__text">
            <p className="tag">Client stories</p>
            <h2 id="testimonials-title">What our clients say about working with us</h2>
          </div>
          <div className="section-head__action carousel-nav">
            <button type="button" className="icon-btn" onClick={() => scroll(-1)} disabled={atStart}>
              <ArrowLeft size={20} aria-hidden="true" />
              <span className="sr-only">Previous testimonials</span>
            </button>
            <button type="button" className="icon-btn" onClick={() => scroll(1)} disabled={atEnd}>
              <ArrowRight size={20} aria-hidden="true" />
              <span className="sr-only">Next testimonials</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container container--bleed">
        <ul ref={trackRef} className="testimonials__track" aria-label="Testimonials" tabIndex={0}>
          {testimonials.map((t) => (
            <li key={t.org} className="testimonial">
              <div className="testimonial__top">
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>
                <Quote className="testimonial__mark" size={32} aria-hidden="true" />
              </div>
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <div className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__org">{t.org}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
