import { type Variants, motion } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Connect your channels",
    body: "Link YouTube, TikTok, Instagram, Facebook, X, and LinkedIn in one place. Authorize once — done.",
  },
  {
    n: "02",
    title: "Draft once, tailor per platform",
    body: "Write the post, attach the media, and adjust the caption for each platform's format.",
  },
  {
    n: "03",
    title: "Pick a time — we handle the rest",
    body: "Your post joins the queue. Vidora publishes it natively, exactly on schedule.",
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function How() {
  return (
    <section id="how" className="bg-espresso py-24 text-cream md:py-36">
      <div className="px-5 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
        >
          Three steps to a full queue.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/60 md:text-lg"
        >
          No dashboards to babysit. No per-platform busywork.
        </motion.p>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 md:mt-24"
        >
          {STEPS.map((s) => (
            <motion.li
              key={s.n}
              variants={item}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-t border-cream/12 py-8 last:border-b md:grid-cols-[auto_minmax(0,1.2fr)_minmax(0,2fr)] md:gap-x-12 md:py-12"
            >
              <span className="font-display text-3xl font-medium tracking-tight text-ember md:text-5xl">
                {s.n}
              </span>
              <span className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] md:text-3xl">
                {s.title}
              </span>
              <span className="col-span-2 max-w-lg text-sm leading-relaxed text-cream/60 md:col-span-1 md:text-base">
                {s.body}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
