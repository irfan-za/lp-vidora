import { motion } from "motion/react";

const APP_URL = "https://vidoraai.com";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ember text-espresso">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(90% 120% at 50% 120%, var(--color-ember-deep) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center px-5 py-28 text-center md:py-44">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="block font-display text-[clamp(3.5rem,12vw,11rem)] font-semibold leading-[0.9] tracking-[-0.025em]"
        >
          VIDORA
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="mt-5 font-display text-[clamp(1.4rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.01em] text-espresso/85"
        >
          Your queue is waiting.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          href={APP_URL}
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ink md:mt-12 md:px-8 md:py-4 md:text-base"
        >
          Start scheduling
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          >
            →
          </span>
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 text-sm font-medium text-espresso/60"
        >
          Connect your first channel in minutes.
        </motion.p>
      </div>
    </section>
  );
}
