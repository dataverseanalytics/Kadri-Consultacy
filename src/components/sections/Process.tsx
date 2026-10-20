import { Check } from "lucide-react";
import { process } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

const included = [
  "A named delivery lead",
  "A shared project board",
  "A live demo every week",
  "Code in your repository from day one",
];

export function Process() {
  return (
    <section id="process" className="section section--tint" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          label="How we deliver"
          title="A proven 5-step delivery process with no surprises"
          intro="The same process for a landing page or an enterprise platform. You always know what's happening, what's next, and what you'll receive."
        />

        <ol className="process">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="process__step"
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="process__node" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="process__card">
                <p className="process__time">{step.time}</p>
                <h3>{step.title}</h3>
                <p className="process__desc">{step.desc}</p>
                <ul className="process__deliverables" aria-label={`${step.title} deliverables`}>
                  {step.deliverables.map((d) => (
                    <li key={d}>
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="included" data-reveal>
          <p className="included__label">Included in every project</p>
          <ul>
            {included.map((item) => (
              <li key={item}>
                <span className="included__check" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
