'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

/*
 * Add your photos to /public/photos/ and update this array.
 * Suggested filenames based on the 4 shared photos:
 *   photo-1.jpg  — gender reveal (pink & blue balloons)
 *   photo-2.jpg  — Italy sunset
 *   photo-3.jpg  — newborn family studio shot
 *   photo-4.jpg  — evening event (black dress / grey suit)
 * Add as many extra photos as you like — they'll flow naturally in the masonry grid.
 */
const photos: { src: string; alt: string; tall?: boolean }[] = [
  { src: '/photos/photo-4.jpeg', alt: 'Georgia and Jordan', tall: true },
  { src: '/photos/photo-3.jpeg', alt: 'Our little one arrives' },
  { src: '/photos/0682f786-c379-4d49-a0bd-c09ee8920f3d.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/59c4f753-d1ca-4ada-b240-961c4bb12c0a.jpeg', alt: 'Georgia and Jordan', tall: true },
  { src: '/photos/photo-1.jpeg', alt: 'The gender reveal — pink or blue?' },
  { src: '/photos/60bd1baf-d814-4127-82dc-3d831a003d38.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/613ca291-5db1-405c-9032-641d05faeb7a.jpeg', alt: 'Georgia and Jordan', tall: true },
  { src: '/photos/photo-2.jpeg', alt: 'Golden hour in Italy' },
  { src: '/photos/827627dd-1175-490f-a6c0-2c4aff856d5a.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/c7d0ad3e-0504-4978-86e9-5d6ce26af2f1.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/d76255e0-6b72-4999-b7f3-7020e1f32e10.jpeg', alt: 'Georgia and Jordan', tall: true },
  { src: '/photos/f67d5fcf-5102-4eab-ab4d-d659dd9d0161.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/photo-5 .jpeg', alt: 'Georgia and Jordan' },
];

function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      className="break-inside-avoid mb-3 md:mb-4 relative overflow-hidden rounded-2xl cursor-zoom-in group"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      onClick={onClick}
    >
      {/* Placeholder shown while loading or on error */}
      {(!loaded || errored) && (
        <div
          className={`w-full flex items-center justify-center bg-champagne/60 ${
            photo.tall ? 'h-80' : 'h-52'
          }`}
        >
          {errored ? (
            <div className="text-center text-espresso/30 px-4">
              <p className="text-2xl mb-1">📷</p>
              <p className="font-sans text-xs">Add photo here</p>
            </div>
          ) : (
            <div className="w-6 h-6 border-2 border-terracotta/30 border-t-terracotta rounded-full animate-spin" />
          )}
        </div>
      )}

      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
          loaded && !errored ? 'opacity-100' : 'opacity-0 absolute inset-0 w-full h-full'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setErrored(true); }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-all duration-300 flex items-center justify-center pointer-events-none">
        <motion.span
          className="text-cream text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          aria-hidden="true"
        >
          ♥
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="gallery" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-terracotta text-[10px] tracking-[0.35em] uppercase font-sans mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Us in pictures
          </motion.p>
          <motion.h2
            className="font-display italic text-espresso text-[clamp(3rem,8vw,6rem)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Gallery
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <PhotoCard
              key={i}
              photo={photo}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
        styles={{ container: { backgroundColor: 'rgba(44,26,14,0.96)' } }}
      />
    </section>
  );
}
