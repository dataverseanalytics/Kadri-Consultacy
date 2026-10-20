"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { budgets, company, services } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon">
          <CheckCircle2 size={36} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3>Thank you — we&apos;ve received your enquiry.</h3>
        <p>A senior consultant will reply within one business day. Keep an eye on your inbox (and spam folder).</p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="form__intro form__field--full">
        <h2 className="form__title">Tell us about your project</h2>
        <p>Fields marked * are required. It takes less than two minutes.</p>
      </div>

      <fieldset className="form__field form__field--full">
        <legend>I&apos;m enquiring as *</legend>
        <div className="choice">
          <label>
            <input type="radio" name="clientType" value="Business" defaultChecked />
            <span>A business (B2B)</span>
          </label>
          <label>
            <input type="radio" name="clientType" value="Individual" />
            <span>An individual (B2C)</span>
          </label>
        </div>
      </fieldset>

      <div className="form__field">
        <label htmlFor="name">Full name *</label>
        <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Jane Doe" />
      </div>
      <div className="form__field">
        <label htmlFor="email">Email address *</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={150}
          placeholder="jane@company.com"
        />
      </div>
      <div className="form__field">
        <label htmlFor="phone">
          Phone / WhatsApp <span className="optional">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+91 98765 43210" />
      </div>
      <div className="form__field">
        <label htmlFor="company">
          Company <span className="optional">(optional)</span>
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={100} />
      </div>
      <div className="form__field">
        <label htmlFor="service">Service you need</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>
      <div className="form__field">
        <label htmlFor="budget">Estimated budget</label>
        <select id="budget" name="budget" defaultValue="Not sure yet">
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="form__field form__field--full">
        <label htmlFor="message">Project details *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={3000}
          placeholder="A few lines about your goals, timeline and anything already in place."
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="form__error form__field--full" role="alert">
          {error} Please try again or email us at {company.email}.
        </p>
      )}

      <div className="form__submit form__field--full">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="form__note">
          <Lock size={14} aria-hidden="true" />
          Your details are confidential. NDA available on request.
        </p>
      </div>
    </form>
  );
}
