import { company } from "@/content/site";
import { socialIcons } from "../ui/BrandIcons";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      className="wa-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      {socialIcons.whatsapp(26)}
      <span className="wa-fab__label" aria-hidden="true">
        Chat with us
      </span>
    </a>
  );
}
