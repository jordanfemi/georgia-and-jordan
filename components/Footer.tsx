export default function Footer() {
  return (
    <footer className="py-20 px-6 text-center" style={{ backgroundColor: '#f6e4c6' }}>
      <div
        className="font-display italic text-espresso/20 text-[clamp(4rem,16vw,9rem)] leading-none mb-3 select-none"
        aria-hidden="true"
      >
        G&amp;J
      </div>
      <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-espresso/60 mb-1">
        21 · 08 · 2026
      </p>
      <p className="font-sans text-[10px] text-espresso/45 mt-6">
        Made with love ♥
      </p>
    </footer>
  );
}
