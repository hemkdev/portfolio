// Símbolo da marca: h na cor do texto + bolinha verde
function Logo({ className }) {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" className={className}>
      <path
        d="M44 20 V136 M44 100 C44 74 60 66 78 66 C98 66 108 78 108 100 V136"
        fill="none"
        stroke="currentColor"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="122" cy="28" r="18" className="fill-vivo" />
    </svg>
  );
}

export default Logo;
