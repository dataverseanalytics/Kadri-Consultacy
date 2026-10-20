import { BrandIcon, techLogos } from "../ui/BrandIcons";

export function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {techLogos.map((icon) => (
        <li key={icon.slug} className="marquee__item">
          <BrandIcon icon={icon} size={26} />
          <span>{icon.title}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee" aria-label="Technologies and platforms we build with">
      <div className="container">
        <p className="marquee__label">Technologies &amp; platforms we build with</p>
      </div>
      <div className="marquee__viewport">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
