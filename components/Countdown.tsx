'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 21 August 2026, noon BST
const WEDDING_DATE = new Date('2026-08-21T11:00:00.000Z');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-[72px] h-[88px] md:w-24 md:h-28"
        style={{ perspective: '600px' }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={display}
            className="absolute inset-0 bg-espresso rounded-2xl flex items-center justify-center shadow-lg"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-display italic text-cream text-[2.8rem] md:text-[3.5rem] leading-none select-none">
              {display}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-espresso/50">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <motion.span
      className="font-display italic text-espresso/25 text-4xl md:text-5xl mb-8 select-none"
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      :
    </motion.span>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let last = -1;
    const tick = () => {
      const now = Math.floor(Date.now() / 1000);
      if (now !== last) {
        last = now;
        setTimeLeft(getTimeLeft());
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="countdown" className="bg-champagne py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-terracotta text-[10px] tracking-[0.35em] uppercase font-sans mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The big day
        </motion.p>
        <motion.h2
          className="font-display italic text-espresso text-[clamp(3rem,8vw,6rem)] mb-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Counting Down
        </motion.h2>
        <motion.p
          className="text-espresso/50 font-sans text-sm mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Friday 21st August 2026 &nbsp;·&nbsp; St Peter's Church, Woking
        </motion.p>

        <motion.div
          className="flex justify-center items-end gap-3 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until the wedding`}
        >
          <FlipUnit value={timeLeft.days} label="Days" />
          <Colon />
          <FlipUnit value={timeLeft.hours} label="Hours" />
          <Colon />
          <FlipUnit value={timeLeft.minutes} label="Minutes" />
          <Colon />
          <FlipUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
}
