import {
  siAngular,
  siAnthropic,
  siDocker,
  siDotnet,
  siFigma,
  siFirebase,
  siFlutter,
  siGithub,
  siGooglecloud,
  siInstagram,
  siKotlin,
  siKubernetes,
  siLaravel,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siShopify,
  siStripe,
  siSwift,
  siTerraform,
  siTypescript,
  siWhatsapp,
  siX,
  type SimpleIcon,
} from "simple-icons";

export const techLogos: SimpleIcon[] = [
  siReact,
  siNextdotjs,
  siNodedotjs,
  siTypescript,
  siPython,
  siDotnet,
  siFlutter,
  siKotlin,
  siSwift,
  siAngular,
  siLaravel,
  siGooglecloud,
  siDocker,
  siKubernetes,
  siTerraform,
  siPostgresql,
  siMongodb,
  siFirebase,
  siShopify,
  siStripe,
  siFigma,
  siAnthropic,
];

export function BrandIcon({ icon, size = 24, colored = false }: { icon: SimpleIcon; size?: number; colored?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={colored ? `#${icon.hex}` : "currentColor"}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.76v5.59h-4v-4.96c0-1.18-.02-2.7-1.7-2.7-1.7 0-1.96 1.28-1.96 2.6v5.06H9.5v-11Z" />
    </svg>
  );
}

export const socialIcons = {
  linkedin: (size?: number) => <LinkedInIcon size={size} />,
  x: (size?: number) => <BrandIcon icon={siX} size={size} />,
  instagram: (size?: number) => <BrandIcon icon={siInstagram} size={size} />,
  github: (size?: number) => <BrandIcon icon={siGithub} size={size} />,
  whatsapp: (size?: number) => <BrandIcon icon={siWhatsapp} size={size} />,
};
