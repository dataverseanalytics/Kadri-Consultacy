import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Enquiry = {
  clientType?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = (await req.json()) as Enquiry;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they don't retry.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const enquiry = {
    clientType: clean(body.clientType, 20) || "Business",
    name: clean(body.name, 100),
    email: clean(body.email, 150),
    phone: clean(body.phone, 30),
    company: clean(body.company, 100),
    service: clean(body.service, 80),
    budget: clean(body.budget, 40),
    message: clean(body.message, 3000),
  };

  if (!enquiry.name) return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!EMAIL_RE.test(enquiry.email))
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  if (enquiry.message.length < 10)
    return NextResponse.json({ error: "Please tell us a little more about your project." }, { status: 422 });

  // TODO: forward the enquiry to your inbox or CRM (e.g. Resend, SendGrid, HubSpot).
  console.info("[contact] New enquiry", enquiry);

  return NextResponse.json({ ok: true });
}
