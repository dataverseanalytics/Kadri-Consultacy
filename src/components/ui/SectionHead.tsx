type Props = {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  action?: React.ReactNode;
};

export function SectionHead({ label, title, intro, id, align = "center", tone = "light", action }: Props) {
  return (
    <div className={`section-head section-head--${align}${action ? " section-head--with-action" : ""}`} data-reveal>
      <div className="section-head__text">
        <p className={`tag${tone === "dark" ? " tag--dark" : ""}`}>{label}</p>
        <h2 id={id}>{title}</h2>
        {intro && <p className="lede">{intro}</p>}
      </div>
      {action && <div className="section-head__action">{action}</div>}
    </div>
  );
}
