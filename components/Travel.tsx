'use client';
import { motion } from 'framer-motion';

const hotels = [
  {
    name: '[Hotel Name — EDIT ME]',
    distance: '[X miles from venue]',
    desc: '[EDIT ME] Brief note about this hotel — great for families, walking distance, etc.',
  },
  {
    name: '[Hotel Name — EDIT ME]',
    distance: '[X miles from venue]',
    desc: '[EDIT ME] Brief note about this hotel.',
  },
  {
    name: '[Hotel Name — EDIT ME]',
    distance: '[X miles from venue]',
    desc: '[EDIT ME] Budget-friendly option nearby.',
  },
];

const transport = [
  { icon: '🚗', mode: 'Driving', detail: '[EDIT ME — parking info & postcode for sat nav]' },
  { icon: '🚂', mode: 'Train', detail: '[EDIT ME — nearest station & taxi/rideshare from there]' },
  { icon: '✈️', mode: 'Flying in?', detail: '[EDIT ME — nearest airport and transfer options]' },
];

export default function Travel() {
  return (
    <section id="travel" className="bg-champagne py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-terracotta text-[10px] tracking-[0.35em] uppercase font-sans mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Getting here
          </motion.p>
          <motion.h2
            className="font-display italic text-espresso text-[clamp(3rem,8vw,6rem)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Travel &amp; Stay
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Venue column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display italic text-espresso text-3xl md:text-4xl mb-5">
              The Venue
            </h3>

            {/* Address card */}
            <div className="bg-white/70 rounded-2xl p-6 mb-6 border border-white">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-2">
                Address
              </p>
              <p className="font-sans text-sm text-espresso/75 leading-relaxed">
                [EDIT ME — Venue Name]<br />
                [Street Address]<br />
                [Town, County]<br />
                [Postcode]
              </p>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-56 bg-sage/15 flex flex-col items-center justify-center border border-sage/25">
              <span className="text-3xl mb-2" aria-hidden="true">📍</span>
              <p className="font-sans text-xs text-espresso/40 text-center px-4">
                [EDIT ME] Replace this div with a Google Maps embed.<br />
                <span className="opacity-70">iframe src="https://maps.google.com/maps?q=your+venue+address&output=embed"</span>
              </p>
            </div>
          </motion.div>

          {/* Hotels & transport column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display italic text-espresso text-3xl md:text-4xl mb-5">
              Where to Stay
            </h3>

            <div className="flex flex-col gap-3 mb-8">
              {hotels.map((hotel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/70 rounded-xl p-5 border border-white"
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-sans font-semibold text-espresso text-sm">{hotel.name}</h4>
                    <span className="font-sans text-[10px] text-terracotta tracking-wide flex-shrink-0">
                      {hotel.distance}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-espresso/60 leading-relaxed">{hotel.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Transport */}
            <div className="bg-espresso/5 rounded-2xl p-5 border border-espresso/10">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-espresso/50 mb-4">
                Getting here
              </p>
              <ul className="flex flex-col gap-3">
                {transport.map((t) => (
                  <li key={t.mode} className="flex gap-3 items-start">
                    <span className="text-lg leading-tight" aria-hidden="true">{t.icon}</span>
                    <div>
                      <span className="font-sans font-semibold text-espresso text-xs">{t.mode}: </span>
                      <span className="font-sans text-xs text-espresso/65 leading-relaxed">{t.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
