export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`logo${inverse ? " logo--inverse" : ""}`}>
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id={inverse ? "logo-grad-inv" : "logo-grad"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2153F5" />
            <stop offset="1" stopColor="#5B3DF5" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill={`url(#${inverse ? "logo-grad-inv" : "logo-grad"})`} />
        <path
          d="M11 8v16M21 8l-7.5 8L21 24"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24.5" cy="24.5" r="2.5" fill="#7DD3FC" />
      </svg>
      <span className="logo__text">
        Kadri<span className="logo__sub">Consultancy</span>
      </span>
    </span>
  );
}
