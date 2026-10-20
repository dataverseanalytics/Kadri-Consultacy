import Image from "next/image";
import { industries } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

export function Industries() {
  return (
    <section id="industries" className="section" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead
          id="industries-title"
          label="Industries"
          title="Domain expertise across the industries we serve"
          intro="We bring proven patterns, integrations and compliance know-how for your sector — so you don't pay for us to learn it."
        />

        <ul className="industries">
          {industries.map(({ icon: Icon, name, desc, image }, i) => (
            <li key={name} className="industry" data-reveal style={{ "--d": `${(i % 4) * 80}ms` } as React.CSSProperties}>
              <Image src={image} alt="" fill sizes="(min-width: 1100px) 300px, (min-width: 640px) 50vw, 100vw" />
              <div className="industry__overlay" aria-hidden="true" />
              <span className="industry__icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div className="industry__body">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
