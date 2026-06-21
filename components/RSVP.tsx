'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FORMSPREE = 'https://formspree.io/f/xlgyrknp';

const input =
  'w-full rounded-xl border border-champagne bg-white/10 px-4 py-3 font-sans text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition';

const label = 'block font-sans text-[10px] tracking-[0.25em] uppercase text-cream/50 mb-2';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function RSVP() {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error();
      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  return (
    <section id="rsvp" className="bg-espresso py-24 px-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-terracotta text-[10px] tracking-[0.35em] uppercase font-sans mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            We hope you can make it
          </motion.p>
          <motion.h2
            className="font-display italic text-cream text-[clamp(3rem,8vw,6rem)] mb-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            RSVP
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          {formState === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-5" aria-hidden="true">🎉</div>
              <h3 className="font-display italic text-cream text-4xl mb-3">Thank you!</h3>
              <p className="text-cream/55 font-sans text-sm leading-relaxed">
                {attending === 'yes'
                  ? "We're so excited to celebrate with you. See you on the big day!"
                  : "We'll miss you so much — thank you for letting us know."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Name */}
              <div>
                <label htmlFor="rsvp-name" className={label}>Your full name</label>
                <input
                  id="rsvp-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Sarah Johnson"
                  className={input}
                />
              </div>

              {/* Attending */}
              <fieldset>
                <legend className={label}>Will you be attending?</legend>
                <div className="flex gap-3">
                  {(['yes', 'no'] as const).map((val) => (
                    <label
                      key={val}
                      className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border cursor-pointer font-sans text-sm transition-all select-none ${
                        attending === val
                          ? 'border-terracotta bg-terracotta text-cream shadow-md'
                          : 'border-cream/15 text-cream/50 hover:border-terracotta/40 hover:text-cream/80'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={val}
                        className="sr-only"
                        required
                        onChange={() => setAttending(val)}
                      />
                      {val === 'yes' ? '✓ Joyfully accepts' : '✕ Regretfully declines'}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Conditional guest / dietary fields */}
              <AnimatePresence initial={false}>
                {attending === 'yes' && (
                  <motion.div
                    key="yes-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 pt-1">
                      <div>
                        <label htmlFor="rsvp-guests" className={label}>
                          Number of guests (including yourself)
                        </label>
                        <input
                          id="rsvp-guests"
                          name="guests"
                          type="number"
                          min={1}
                          max={10}
                          defaultValue={1}
                          className={input}
                        />
                      </div>
                      <div>
                        <label htmlFor="rsvp-dietary" className={label}>
                          Dietary requirements
                        </label>
                        <textarea
                          id="rsvp-dietary"
                          name="dietary"
                          rows={2}
                          placeholder="Allergies, vegetarian, vegan, halal — please let us know."
                          className={`${input} resize-none`}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <div>
                <label htmlFor="rsvp-message" className={label}>
                  A message for Georgia &amp; Jordan{' '}
                  <span className="normal-case not-italic">(optional)</span>
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  rows={3}
                  placeholder="Share your love, a memory, or a song request..."
                  className={`${input} resize-none`}
                />
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm font-sans text-center">
                  Something went wrong — please try again or contact us directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={formState === 'submitting' || attending === null}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-terracotta hover:bg-terracottaDark disabled:opacity-50 text-cream font-sans text-xs tracking-[0.25em] uppercase rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? 'Sending…' : 'Send RSVP'}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
