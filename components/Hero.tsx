'use client';
import { motion } from 'framer-motion';

/* ─── Decorative SVGs ─────────────────────────────────────────────────────── */

function BotanicalWreath({ className, duration = 30, reverse = false }: { className: string; duration?: number; reverse?: boolean }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.8" />
        <path d="M60 10 L60 110" stroke="currentColor" strokeWidth="0.6" />
        <path d="M10 60 L110 60" stroke="currentColor" strokeWidth="0.6" />
        <path d="M60 30 C72 38 78 52 60 60" stroke="currentColor" strokeWidth="0.9" />
        <path d="M60 30 C48 38 42 52 60 60" stroke="currentColor" strokeWidth="0.9" />
        <path d="M60 60 C72 68 78 82 60 90" stroke="currentColor" strokeWidth="0.9" />
        <path d="M60 60 C48 68 42 82 60 90" stroke="currentColor" strokeWidth="0.9" />
        <path d="M90 60 C82 48 68 42 60 60" stroke="currentColor" strokeWidth="0.9" />
        <path d="M90 60 C82 72 68 78 60 60" stroke="currentColor" strokeWidth="0.9" />
        <path d="M30 60 C38 48 52 42 60 60" stroke="currentColor" strokeWidth="0.9" />
        <path d="M30 60 C38 72 52 78 60 60" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="60" cy="60" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="60" cy="10" r="2.5" fill="currentColor" />
        <circle cx="60" cy="110" r="2.5" fill="currentColor" />
        <circle cx="10" cy="60" r="2.5" fill="currentColor" />
        <circle cx="110" cy="60" r="2.5" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

function FloatingLeaf({ className, delay = 0, duration = 5 }: { className: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 6, -3, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60 C4 48 2 28 20 5 C38 28 36 48 20 60Z" fill="currentColor" opacity="0.7" />
        <path d="M20 60 L20 5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

function Sparkle({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5], rotate: [0, 20, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" />
      </svg>
    </motion.div>
  );
}

function FloralDot({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="3" />
        <circle cx="10" cy="3" r="1.5" />
        <circle cx="10" cy="17" r="1.5" />
        <circle cx="3" cy="10" r="1.5" />
        <circle cx="17" cy="10" r="1.5" />
      </svg>
    </motion.div>
  );
}

function SmallBranch({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 4, -2, 0], y: [0, -5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 75 L30 10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M30 55 C18 45 12 32 20 22" stroke="currentColor" strokeWidth="0.9" />
        <path d="M30 40 C42 30 48 18 38 10" stroke="currentColor" strokeWidth="0.9" />
        <path d="M30 65 C20 60 14 50 22 44" stroke="currentColor" strokeWidth="0.9" />
        <ellipse cx="18" cy="20" rx="5" ry="8" fill="currentColor" opacity="0.6" transform="rotate(-30 18 20)" />
        <ellipse cx="40" cy="9" rx="5" ry="8" fill="currentColor" opacity="0.6" transform="rotate(20 40 9)" />
        <ellipse cx="20" cy="42" rx="4" ry="7" fill="currentColor" opacity="0.6" transform="rotate(-20 20 42)" />
      </svg>
    </motion.div>
  );
}

/* ─── Heart photo ─────────────────────────────────────────────────────────── */
function HeartPhoto({
  src, alt, delay, rotate = 0, floatOffset = 0,
  imgX = 0, imgY = 0, imgW = 200, imgH = 185,
}: {
  src: string; alt: string; delay: number; rotate?: number; floatOffset?: number;
  // imgX/Y/W/H let you position a pre-scaled image so faces land in the heart's wide zone.
  // Width/height must preserve the photo's native aspect ratio to avoid stretching.
  imgX?: number; imgY?: number; imgW?: number; imgH?: number;
}) {
  const id = `hc-${src.replace(/\W/g, '')}`;
  const HEART = 'M100 165 C 38 125 8 88 8 57 C 8 30 28 12 55 12 C 70 12 84 20 100 38 C 116 20 130 12 145 12 C 172 12 192 30 192 57 C 192 88 162 125 100 165 Z';
  const useAspect = imgW === 200 && imgH === 185;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease: [0.34, 1.26, 0.64, 1] }}
      style={{ rotate }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: floatOffset }}
      >
        <svg viewBox="0 0 200 185" className="w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 drop-shadow-xl" aria-label={alt}>
          <defs>
            <clipPath id={id}><path d={HEART} /></clipPath>
          </defs>
          <image
            href={src}
            x={imgX} y={imgY} width={imgW} height={imgH}
            clipPath={`url(#${id})`}
            // "xMidYMid slice" for default fill; "none" when dimensions are manually specified
            // (they already encode the correct aspect ratio so no stretching occurs)
            preserveAspectRatio={useAspect ? 'xMidYMid slice' : 'none'}
          />
          <path d={HEART} fill="none" stroke="rgba(242,213,200,0.5)" strokeWidth="3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ─── Name word — clip reveal ─────────────────────────────────────────────── */
function NameWord({ children, delay, className = '' }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay }}>
      {children}
    </motion.div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-20" style={{ backgroundColor: '#f6e4c6' }}>

      {/* Warm radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 80% 65% at 50% 50%, rgba(196,113,74,0.08) 0%, transparent 70%)' }} />

      {/* ── Decorative layer ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Corner botanical wreaths */}
        <BotanicalWreath className="absolute -top-6 -left-6 w-48 h-48 text-terracotta/10" duration={35} />
        <BotanicalWreath className="absolute -top-8 -right-8 w-56 h-56 text-sage/10" duration={45} reverse />
        <BotanicalWreath className="absolute -bottom-8 -left-10 w-52 h-52 text-blush/10" duration={40} reverse />
        <BotanicalWreath className="absolute -bottom-6 -right-6 w-44 h-44 text-terracotta/10" duration={30} />
        <BotanicalWreath className="absolute top-[25%] -left-16 w-36 h-36 text-sage/8" duration={50} />
        <BotanicalWreath className="absolute top-[25%] -right-16 w-36 h-36 text-blush/8" duration={55} reverse />
        <BotanicalWreath className="absolute top-[60%] -left-14 w-32 h-32 text-terracotta/8" duration={60} />
        <BotanicalWreath className="absolute top-[60%] -right-14 w-32 h-32 text-sage/8" duration={48} reverse />

        {/* Floating leaves — scattered generously */}
        <FloatingLeaf className="absolute top-12 left-[15%] w-8 h-12 text-sage/35" delay={0} duration={5.5} />
        <FloatingLeaf className="absolute top-20 right-[17%] w-6 h-10 text-blush/40" delay={1.2} duration={4.8} />
        <FloatingLeaf className="absolute top-[35%] left-[6%] w-7 h-11 text-terracotta/30" delay={0.6} duration={6} />
        <FloatingLeaf className="absolute top-[40%] right-[5%] w-6 h-10 text-sage/32" delay={2} duration={5.2} />
        <FloatingLeaf className="absolute bottom-24 left-[18%] w-7 h-11 text-blush/35" delay={1.5} duration={5.8} />
        <FloatingLeaf className="absolute bottom-28 right-[19%] w-5 h-9 text-terracotta/28" delay={0.4} duration={6.3} />
        <FloatingLeaf className="absolute top-10 left-[42%] w-5 h-8 text-terracotta/25" delay={2.5} duration={5} />
        <FloatingLeaf className="absolute bottom-16 right-[42%] w-6 h-10 text-sage/25" delay={1.8} duration={5.5} />
        <FloatingLeaf className="absolute top-[55%] left-[25%] w-4 h-7 text-blush/30" delay={3} duration={6} />
        <FloatingLeaf className="absolute top-[20%] right-[35%] w-4 h-6 text-sage/22" delay={0.9} duration={5.3} />
        <FloatingLeaf className="absolute bottom-[40%] left-[35%] w-3 h-5 text-terracotta/20" delay={2.1} duration={4.9} />

        {/* Sparkles */}
        <Sparkle className="absolute top-20 left-[30%] w-5 h-5 text-terracotta/35" delay={0} />
        <Sparkle className="absolute top-14 right-[28%] w-4 h-4 text-blush/40" delay={0.8} />
        <Sparkle className="absolute bottom-24 left-[32%] w-4 h-4 text-sage/35" delay={1.6} />
        <Sparkle className="absolute bottom-20 right-[30%] w-5 h-5 text-terracotta/30" delay={2.4} />
        <Sparkle className="absolute top-1/3 left-[16%] w-4 h-4 text-blush/35" delay={0.5} />
        <Sparkle className="absolute top-[45%] right-[15%] w-4 h-4 text-terracotta/30" delay={1.3} />
        <Sparkle className="absolute top-[28%] left-[50%] w-3 h-3 text-sage/30" delay={1.9} />
        <Sparkle className="absolute bottom-[45%] right-[45%] w-3 h-3 text-blush/30" delay={2.7} />
        <Sparkle className="absolute top-[70%] left-[45%] w-3 h-3 text-terracotta/25" delay={1.1} />
        <Sparkle className="absolute top-8 left-[55%] w-3 h-3 text-sage/28" delay={3.2} />

        {/* Floral dots */}
        <FloralDot className="absolute top-[28%] left-[10%] w-6 h-6 text-terracotta/30" delay={0.3} />
        <FloralDot className="absolute top-[32%] right-[9%] w-5 h-5 text-blush/35" delay={1.1} />
        <FloralDot className="absolute bottom-[28%] left-[12%] w-5 h-5 text-sage/30" delay={0.7} />
        <FloralDot className="absolute bottom-[32%] right-[11%] w-6 h-6 text-terracotta/25" delay={1.8} />
        <FloralDot className="absolute top-8 left-1/2 w-4 h-4 text-blush/25" delay={2.2} />
        <FloralDot className="absolute bottom-10 left-[55%] w-4 h-4 text-sage/22" delay={0.9} />
        <FloralDot className="absolute top-[15%] right-[42%] w-3 h-3 text-terracotta/22" delay={2.8} />

        {/* Small branches */}
        <SmallBranch className="absolute top-6 right-[8%] w-12 h-16 text-sage/28" delay={0} />
        <SmallBranch className="absolute bottom-8 left-[7%] w-11 h-14 text-terracotta/25" delay={1} />
        <SmallBranch className="absolute top-[52%] right-[2%] w-10 h-13 text-blush/25" delay={0.5} />
        <SmallBranch className="absolute top-[18%] left-[2%] w-10 h-13 text-sage/22" delay={1.5} />
        <SmallBranch className="absolute bottom-[20%] right-[6%] w-9 h-12 text-terracotta/20" delay={2} />
        <SmallBranch className="absolute top-[75%] left-[4%] w-8 h-11 text-sage/18" delay={0.8} />
      </div>

      {/* ── Desktop: hearts + text ───────────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14 w-full max-w-5xl relative z-10">

        <HeartPhoto src="/photos/left heart .jpg" alt="Georgia and Jordan" delay={0.3} rotate={-6} floatOffset={0} />

        <div className="flex flex-col items-center text-center flex-shrink-0">
          <motion.p className="text-espresso/60 text-[10px] tracking-[0.4em] uppercase font-sans mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.8 }}>
            Together forever
          </motion.p>

          <NameWord delay={0.45} className="font-display italic text-espresso leading-none text-[clamp(3.5rem,7vw,6rem)]">
            Georgia
          </NameWord>

          <div style={{ overflow: 'hidden' }}>
            <motion.span className="font-display italic text-terracotta block leading-none text-[clamp(2rem,4vw,3.5rem)] my-1"
              initial={{ scale: 0.2, rotate: -20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.8 }}>
              &amp;
            </motion.span>
          </div>

          <NameWord delay={0.6} className="font-display italic text-espresso leading-none text-[clamp(3.5rem,7vw,6rem)]">
            Jordan
          </NameWord>

          <motion.div className="mt-7 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.9 }}>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-terracotta/45" />
              <p className="text-espresso/55 font-sans text-[10px] tracking-[0.3em] uppercase">21st August 2026</p>
              <div className="h-px w-8 bg-terracotta/45" />
            </div>
            <p className="text-espresso/55 font-display italic text-lg">Forever starts here.</p>
          </motion.div>
        </div>

        <HeartPhoto src="/photos/photo-3.jpeg" alt="Georgia, Jordan and their baby" delay={0.4} rotate={6} floatOffset={1.2} />
      </div>

      {/* ── Mobile: hearts above, text below ────────────────────────────────── */}
      <div className="flex md:hidden flex-col items-center gap-8 w-full relative z-10">
        <div className="flex items-end justify-center gap-6">
          <HeartPhoto src="/photos/left heart .jpg" alt="Georgia and Jordan" delay={0.3} rotate={-5} floatOffset={0} />
          <HeartPhoto src="/photos/photo-3.jpeg" alt="Georgia, Jordan and their baby" delay={0.45} rotate={5} floatOffset={1.2} />
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.p className="text-espresso/60 text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Together forever
          </motion.p>
          <NameWord delay={0.6} className="font-display italic text-espresso leading-none text-[clamp(3rem,13vw,5rem)]">Georgia</NameWord>
          <div style={{ overflow: 'hidden' }}>
            <motion.span className="font-display italic text-terracotta block leading-none text-[clamp(2rem,8vw,3rem)] my-0.5"
              initial={{ scale: 0.2, rotate: -20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.95 }}>
              &amp;
            </motion.span>
          </div>
          <NameWord delay={0.75} className="font-display italic text-espresso leading-none text-[clamp(3rem,13vw,5rem)]">Jordan</NameWord>
          <motion.div className="mt-6 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-terracotta/45" />
              <p className="text-espresso/55 font-sans text-[10px] tracking-[0.3em] uppercase">21st August 2026</p>
              <div className="h-px w-6 bg-terracotta/45" />
            </div>
            <p className="text-espresso/55 font-display italic text-base">Forever starts here.</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }} aria-hidden="true">
        <span className="text-espresso/55 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <motion.div className="w-px h-8 bg-espresso/40"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 0.45, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }} />
      </motion.div>
    </section>
  );
}
