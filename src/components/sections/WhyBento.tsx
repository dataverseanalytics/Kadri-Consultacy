import Image from "next/image";
import { CalendarCheck, FileLock2, KeyRound, ShieldCheck, Star, UserCheck } from "lucide-react";
import { compliance, principles } from "@/content/site";
import { Counter } from "../ui/Counter";
import { SectionHead } from "../ui/SectionHead";

const principleIcons = [CalendarCheck, FileLock2, KeyRound, UserCheck];
const principleAreas = ["demo", "fixed", "own", "senior"];

export function WhyBento() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container">
        <SectionHead
          id="why-title"
          label="Why Kadri"
          title={
            <>
              Why clients choose us — <span className="hl">and stay with us</span>
            </>
          }
          intro="The promises we put in writing on every project, whatever its size."
        />

        <div className="bento">
          <div className="bento__tile bento__tile--image" style={{ gridArea: "img" }} data-reveal>
            <Image src="/images/why-team.jpg" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" />
            <div className="bento__image-copy">
              <p className="tag tag--dark">Our people</p>
              <h3>Senior-led teams who care about your outcome</h3>
              <p>Experienced engineers, designers and delivery leads — not a rotating bench of juniors.</p>
            </div>
          </div>

          <div className="bento__tile bento__tile--stat" style={{ gridArea: "stat" }} data-reveal>
            <p className="bento__big">
              <Counter value={94} suffix="%" />
            </p>
            <p>of projects shipped on or before the agreed date</p>
          </div>

          <div className="bento__tile bento__tile--rating" style={{ gridArea: "rate" }} data-reveal>
            <p className="bento__big bento__big--ink">
              <Counter value={4.9} decimals={1} />
              <span>/5</span>
            </p>
            <div className="stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p>Average client rating</p>
          </div>

          {principles.map((p, i) => {
            const Icon = principleIcons[i];
            return (
              <div
                key={p.title}
                className="bento__tile bento__tile--principle"
                style={{ gridArea: principleAreas[i] }}
                data-reveal
              >
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            );
          })}

          <div className="bento__tile bento__tile--security" style={{ gridArea: "sec" }} data-reveal>
            <div className="bento__security-head">
              <span className="icon-tile icon-tile--ok" aria-hidden="true">
                <ShieldCheck size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3>Security &amp; compliance built in</h3>
                <p>Least-privilege access, code reviews and encrypted secrets on every project.</p>
              </div>
            </div>
            <ul className="chips">
              {compliance.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
