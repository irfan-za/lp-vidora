import { type Variants, motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Engineering proof — real product truths, no invented metrics.      */
/* ------------------------------------------------------------------ */

const PROOF = [
  {
    title: "Tokens refresh themselves",
    body: "Platform credentials expire — some within the hour. Vidora renews them at publish time, so a scheduled post never dies silently overnight.",
  },
  {
    title: "Retries that actually retry",
    body: "Transient failures requeue automatically. You only hear about the posts that genuinely need your attention.",
  },
  {
    title: "Native to every platform",
    body: "Every publish goes through the platform's own API, in its own format — never a lowest-common-denominator blast.",
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Craft() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="px-5 md:px-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
          >
            Built to publish <span className="text-ember">on time.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Scheduling is the easy part. Vidora's publishing pipeline is engineered for the
            failures you never see.
          </motion.p>
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 md:mt-24"
        >
          {PROOF.map((p, i) => (
            <motion.li
              key={p.title}
              variants={item}
              className="grid grid-cols-1 gap-3 border-t border-hairline py-8 last:border-b md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] md:gap-12 md:py-12"
            >
              <span className="flex items-baseline gap-4 font-display text-xl font-semibold leading-tight tracking-[-0.01em] md:text-3xl">
                <span aria-hidden className="text-sm font-medium tabular-nums text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.title}
              </span>
              <span className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                {p.body}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
