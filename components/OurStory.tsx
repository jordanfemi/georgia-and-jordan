'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const icons: Record<string, React.ReactNode> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="#FEFAF4" className="w-5 h-5">
      <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="#FEFAF4" className="w-5 h-5">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FEFAF4" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  baby: (
    <svg viewBox="0 0 24 24" fill="#FEFAF4" className="w-5 h-5">
      <circle cx="12" cy="5" r="3" />
      <path d="M5 22v-3a7 7 0 0 1 14 0v3" />
      <path d="M8 22v-1a4 4 0 0 1 8 0v1" />
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FEFAF4" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="12" cy="14" r="7" />
      <path d="M9 14a3 3 0 0 1 6 0" />
      <path d="M8.5 7.5 9.5 3h5l1 4.5" />
      <path d="M8.5 7.5h7" />
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FEFAF4" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="8" cy="14" r="5" />
      <circle cx="16" cy="14" r="5" />
      <path d="M11 14a3 3 0 0 1 2 0" />
    </svg>
  ),
};

const events = [
  {
    year: 'Late 2014',
    title: 'Love at First Sight',
    body: 'Georgia met Jordan at the end of 2014 — she was just 18. It was love at first sight, and they both knew it from the very beginning.',
    icon: 'sparkle',
  },
  {
    year: 'February 2015',
    title: 'We Made It Official',
    body: "Valentine's month felt like the perfect time to make it official. They became a couple in February 2015 and have been inseparable ever since.",
    icon: 'heart',
  },
  {
    year: '2015 – 2020',
    title: 'Seeing the World Together',
    body: "For the first five years they threw themselves into adventure — travelling the world and making memories at every turn. Their favourite destination? Mexico. (And they're heading back for the honeymoon.)",
    icon: 'globe',
  },
  {
    year: 'February 2023',
    title: 'Gabriella Arrives',
    body: 'Their daughter Gabriella was born in February 2023 — a moment they had longed for. Jordan took to fatherhood instantly, and their little family of three was complete.',
    icon: 'baby',
  },
  {
    year: '16 September 2025',
    title: 'She Said Yes!',
    body: 'Under the Sicilian sun, Jordan got down on one knee and asked the question Georgia had been dreaming of. The proposal was everything she could have imagined — and of course, she said YES.',
    icon: 'ring',
  },
  {
    year: '21 · 08 · 26',
    title: 'Now We Do',
    body: "After more than ten years of love, laughter, travel, and parenthood — it's finally time. We can't wait to celebrate with every single one of you.",
    icon: 'rings',
  },
];

function TimelineCard({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative mb-8 md:mb-0">
      {/* Mobile layout */}
      <div className="flex gap-4 md:hidden">
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
            className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-base shadow-md"
            aria-hidden="true"
          >
            {icons[event.icon]}
          </motion.div>
          {index < events.length - 1 && (
            <div className="w-px flex-1 bg-champagne mt-2 min-h-[2rem]" />
          )}
        </div>
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pb-6 pt-1"
        >
          <span className="text-terracotta text-[10px] font-sans tracking-[0.25em] uppercase">
            {event.year}
          </span>
          <h3 className="font-display text-2xl italic text-espresso mt-0.5 mb-1.5">
            {event.title}
          </h3>
          <p className="text-espresso/65 font-sans text-sm leading-relaxed">{event.body}</p>
        </motion.article>
      </div>

      {/* Desktop layout — alternating */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-center gap-6 md:mb-12">
        {/* Left card */}
        <div className="flex justify-end">
          {isLeft ? (
            <motion.article
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-champagne max-w-sm text-right"
            >
              <span className="text-terracotta text-[10px] font-sans tracking-[0.25em] uppercase">
                {event.year}
              </span>
              <h3 className="font-display text-2xl italic text-espresso mt-0.5 mb-2">
                {event.title}
              </h3>
              <p className="text-espresso/65 font-sans text-sm leading-relaxed">{event.body}</p>
            </motion.article>
          ) : (
            <div />
          )}
        </div>

        {/* Center dot */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.15 }}
            className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-xl shadow-md z-10 relative"
            aria-hidden="true"
          >
            {icons[event.icon]}
          </motion.div>
        </div>

        {/* Right card */}
        <div className="flex justify-start">
          {!isLeft ? (
            <motion.article
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-champagne max-w-sm"
            >
              <span className="text-terracotta text-[10px] font-sans tracking-[0.25em] uppercase">
                {event.year}
              </span>
              <h3 className="font-display text-2xl italic text-espresso mt-0.5 mb-2">
                {event.title}
              </h3>
              <p className="text-espresso/65 font-sans text-sm leading-relaxed">{event.body}</p>
            </motion.article>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <section id="story" ref={sectionRef} className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            className="text-terracotta text-[10px] tracking-[0.35em] uppercase font-sans mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How we got here
          </motion.p>
          <motion.h2
            className="font-display italic text-espresso text-[clamp(3rem,8vw,6rem)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Story
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-champagne"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-terracotta/60 origin-top"
              style={{ scaleY: lineScaleY, height: '100%' }}
            />
          </div>

          {events.map((event, i) => (
            <TimelineCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
