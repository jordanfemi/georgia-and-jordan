'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Success() {
  return (
    <main className="min-h-screen bg-espresso flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6" aria-hidden="true">🎉</div>
          <h1 className="font-display italic text-cream text-5xl md:text-7xl mb-4">
            Thank you!
          </h1>
          <p className="text-cream/55 font-sans text-sm leading-relaxed mb-10">
            We're so excited to celebrate with you. See you on the big day!
          </p>
          <Link
            href="/"
            className="font-sans text-xs tracking-[0.25em] uppercase text-terracotta hover:text-cream transition-colors"
          >
            ← Back to the website
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
