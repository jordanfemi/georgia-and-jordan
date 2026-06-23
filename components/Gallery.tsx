'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos: { src: string; alt: string }[] = [
  { src: '/photos/photo-4.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/photo-3.jpeg', alt: 'Our little one arrives' },
  { src: '/photos/0682f786-c379-4d49-a0bd-c09ee8920f3d.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/59c4f753-d1ca-4ada-b240-961c4bb12c0a.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/photo-1.jpeg', alt: 'The gender reveal' },
  { src: '/photos/60bd1baf-d814-4127-82dc-3d831a003d38.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/613ca291-5db1-405c-9032-641d05faeb7a.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/photo-2.jpeg', alt: 'Golden hour in Italy' },
  { src: '/photos/827627dd-1175-490f-a6c0-2c4aff856d5a.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/c7d0ad3e-0504-4978-86e9-5d6ce26af2f1.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/d76255e0-6b72-4999-b7f3-7020e1f32e10.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/f67d5fcf-5102-4eab-ab4d-d659dd9d0161.jpeg', alt: 'Georgia and Jordan' },
  { src: '/photos/photo-5%20.jpeg', alt: 'Georgia and Jordan' },
];

function PhotoCard({ photo, index, onClick }: { photo: (typeof photos)[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      className="break-inside-avoid mb-3 md:mb-4 relative overflow-hidden rounded-2xl cursor-zoom-in group"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04] block"
      />
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-all duration-300 flex items-center justify-center pointer-events-none">
        <span className="text-cream text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" aria-hidden="true">♥</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="gallery" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
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

        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} index={i} onClick={() => setLightboxIndex(i)} />
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
