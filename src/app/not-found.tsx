import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <p className="tag">Page not found</p>
        <h1>This page missed its delivery date.</h1>
        <p className="lede">The link may be broken or the page may have moved. Let&apos;s get you back on track.</p>
        <div className="not-found__actions">
          <Link href="/" className="btn btn--primary btn--lg">
            Back to home <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/contact" className="btn btn--outline btn--lg">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
