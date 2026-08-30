import { type Variants, motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  One draft, six native posts — the composer fan-out.                */
/*  Editorial rows with hairline dividers; no cards.                   */
/* ------------------------------------------------------------------ */

const ORIGINAL = {
  label: "Original draft",
  text: "The launch video is live — full breakdown inside.",
};

const VARIANTS = [
  {
    platform: "YouTube",
    caption: "The launch video is live — full breakdown inside. Chapters below.",
    format: "4K · 16:9",
  },
  {
    platform: "TikTok",
    caption: "it's finally here 👀 full launch breakdown #buildinpublic",
    format: "9:16 · captions on",
  },
  {
    platform: "Instagram",
    caption: "Launch day. Full breakdown on the channel — link in bio.",
    format: "4:5 · carousel",
  },
  {
    platform: "Facebook",
    caption: "We just launched! Here's the full breakdown:",
    format: "1:1 · link preview",
  },
  {
    platform: "X",
    caption: "shipped 🚀 full launch breakdown below",
    format: "280 chars · clip",
  },
  {
    platform: "LinkedIn",
    caption: "After six months of building, we launched today. Here's what we learned:",
    format: "Document + link",
  },
];

const rowContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineDraw: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

export function Product() {
  return (
    <section id="product" className="bg-paper py-24 md:py-36">
      <div className="px-5 md:px-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
          >
            One draft.
            <br />
            Six native posts.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Write it once. Vidora tailors the caption, format, and length for each platform —
            no copy-paste gymnastics.
          </motion.p>
        </div>

        {/* the fan-out */}
        <div className="relative mt-16 md:mt-24">
          <motion.div
            variants={lineDraw}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            aria-hidden
            className="absolute bottom-6 left-[7px] top-6 w-px origin-top bg-ember/50"
          />
          <motion.ol
            variants={rowContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="relative"
          >
            <motion.li
              variants={row}
              className="grid grid-cols-[16px_1fr] items-baseline gap-4 border-t border-hairline py-6 md:grid-cols-[16px_minmax(0,1fr)_2fr_auto] md:gap-8 md:py-8"
            >
              <span aria-hidden className="mt-1.5 size-[7px] rounded-full bg-ink" />
              <span className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
                {ORIGINAL.label}
              </span>
              <span className="col-span-2 mt-2 text-base leading-relaxed text-ink-soft md:col-span-1 md:mt-0 md:text-lg">
                “{ORIGINAL.text}”
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-muted md:inline-block">
                Source
              </span>
            </motion.li>

            {VARIANTS.map((v) => (
              <motion.li
                key={v.platform}
                variants={row}
                className="grid grid-cols-[16px_1fr] items-baseline gap-4 border-t border-hairline py-6 last:border-b md:grid-cols-[16px_minmax(0,1fr)_2fr_auto] md:gap-8 md:py-8"
              >
                <span aria-hidden className="mt-1.5 size-[7px] rounded-full bg-ember" />
                <span className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
                  {v.platform}
                </span>
                <span className="col-span-2 mt-2 text-base leading-relaxed text-ink-soft md:col-span-1 md:mt-0 md:text-lg">
                  “{v.caption}”
                </span>
                <span className="hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-muted md:inline-block">
                  {v.format}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
