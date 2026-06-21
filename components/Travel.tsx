'use client';
import { motion } from 'framer-motion';

const venues = [
  {
    label: 'Ceremony',
    name: "St Peter's Church",
    address: 'Church Street, Woking, GU22 9JF',
    time: 'Arrival from 12:30pm · Ceremony at 1:00pm',
    mapSrc: 'https://maps.google.com/maps?q=St+Peters+Church+Church+Street+Woking+GU22+9JF&output=embed',
  },
  {
    label: 'Reception',
    name: 'Pyrford Lakes',
    address: 'Woking, GU22 8XR',
    time: 'Reception to follow the ceremony',
    mapSrc: 'https://maps.google.com/maps?q=Pyrford+Lakes+Woking+GU22+8XR&output=embed',
  },
];

const details = [
  {
    title: 'Dress Code',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M12 2L8 6H4l2 4-4 12h20L18 10l2-4h-4L12 2z" />
      </svg>
    ),
    body: 'We kindly invite our guests to dress in formal attire. As our wedding party are wearing specific colours, male guests are kindly asked to avoid wearing light blue. Female guests are kindly asked to avoid wearing brown, gold or taupe.',
  },
  {
    title: 'The Menu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    body: "We're so excited to celebrate our special day with you! Following the ceremony, we'll be hosting a seated BBQ reception. Please note that a single meat option will be served as part of the meal. If you have any dietary requirements or special preferences, please let us know in advance so we can ensure suitable alternatives are available for you.",
  },
  {
    title: 'Parking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
    body: 'Parking at the church is limited, however there is a small car park close by on the roundabout. For the reception, there is plenty of parking available at the golf course at Pyrford Lakes.',
  },
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
            On the day
          </motion.p>
          <motion.h2
            className="font-display italic text-espresso text-[clamp(3rem,8vw,6rem)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Wedding Venues
          </motion.h2>
        </div>

        {/* Venue cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-terracotta mb-3">
                {venue.label}
              </p>
              <div className="bg-white/70 rounded-2xl p-6 mb-4 border border-white">
                <h3 className="font-display italic text-espresso text-2xl mb-1">{venue.name}</h3>
                <p className="font-sans text-sm text-espresso/65 mb-2">{venue.address}</p>
                <p className="font-sans text-xs text-terracotta font-medium">{venue.time}</p>
              </div>
              <div className="rounded-2xl overflow-hidden h-52 border border-white/60 shadow-sm">
                <iframe
                  src={venue.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${venue.name}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {details.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/70 rounded-2xl p-6 border border-white"
            >
              <div className="w-10 h-10 rounded-full bg-terracotta text-cream flex items-center justify-center mb-4">
                {d.icon}
              </div>
              <h4 className="font-display italic text-espresso text-xl mb-3">{d.title}</h4>
              <p className="font-sans text-xs text-espresso/65 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
