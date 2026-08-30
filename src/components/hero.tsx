import { type Variants, motion } from "motion/react";

const APP_URL = "https://vidoraai.com";

/* ------------------------------------------------------------------ */
/*  Hero entrance choreography — staggered, transform/opacity only     */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.35 },
  },
};

const rise: Variants = {
  hidden: { y: "112%" },
  show: {
    y: "0%",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stripRise: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

/* ------------------------------------------------------------------ */
/*  The queue — this week's scheduled posts, rendered as a full-bleed  */
/*  timeline plane anchored to the bottom of the hero.                 */
/* ------------------------------------------------------------------ */

type QueuedPost = {
  time: string;
  platform: string;
  title: string;
  live?: boolean;
};

const WEEK: { day: string; date: string; posts: QueuedPost[] }[] = [
  {
    day: "Mon",
    date: "24",
    posts: [
      { time: "09:30", platform: "YT", title: "Launch teaser" },
      { time: "17:00", platform: "TT", title: "Behind the scenes" },
    ],
  },
  {
    day: "Tue",
    date: "25",
    posts: [{ time: "12:00", platform: "IG", title: "Carousel: the setup" }],
  },
  {
    day: "Wed",
    date: "26",
    posts: [
      { time: "08:45", platform: "X", title: "Week in review" },
      { time: "18:30", platform: "LI", title: "Lessons from launch" },
    ],
  },
  {
    day: "Thu",
    date: "27",
    posts: [
      { time: "Now", platform: "YT", title: "Tutorial: full setup", live: true },
      { time: "19:15", platform: "TT", title: "Q&A clip" },
    ],
  },
  {
    day: "Fri",
    date: "28",
    posts: [{ time: "11:00", platform: "FB", title: "Community post" }],
  },
  {
    day: "Sat",
    date: "29",
    posts: [{ time: "10:30", platform: "IG", title: "Reel: office tour" }],
  },
  {
    day: "Sun",
    date: "30",
    posts: [{ time: "16:00", platform: "YT", title: "Product update" }],
  },
];

function QueueStrip() {
  return (
    <motion.div variants={stripRise} className="relative border-t border-cream/12">
      <div className="overflow-x-auto">
        <div className="grid min-w-[920px] grid-cols-7">
          {WEEK.map((d, i) => (
            <div
              key={d.day}
              className={`px-4 py-4 md:px-5 md:py-5 ${i > 0 ? "border-l border-cream/10" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                  {d.day}
                </span>
                <span className="text-[11px] font-medium tabular-nums text-cream/30">{d.date}</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {d.posts.map((p) => (
                  <li key={`${d.day}-${p.time}`} className="flex items-center gap-2">
                    <span
                      className={`w-7 shrink-0 text-[10px] font-bold tracking-wide ${
                        p.live ? "text-ember" : "text-cream/40"
                      }`}
                    >
                      {p.platform}
                    </span>
                    <span
                      className={`shrink-0 text-[11px] tabular-nums ${
                        p.live ? "text-ember" : "text-cream/45"
                      }`}
                    >
                      {p.live ? (
                        <span className="pulse-soft inline-block font-semibold">●&nbsp;Live</span>
                      ) : (
                        p.time
                      )}
                    </span>
                    <span className="truncate text-xs font-medium text-cream/80">{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero — one composition: brand, one headline, one sentence, one     */
/*  CTA group, one dominant visual plane (the queue).                  */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-espresso text-cream">
      {/* atmosphere — ember glow drifting over espresso */}
      <div
        aria-hidden
        className="glow-drift absolute -right-[15vw] -top-[35vh] size-[85vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-ember) 0%, transparent 72%)",
          opacity: 0.16,
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[30vh] -left-[20vw] size-[60vw] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-cream) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-svh flex-col"
      >
        {/* brand + promise */}
        <div className="flex flex-1 flex-col justify-center px-5 pb-10 pt-32 md:px-10 md:pt-36">
          <h1 className="select-none">
            <span className="block overflow-hidden">
              <motion.span
                variants={rise}
                className="block font-display text-[clamp(4.25rem,16.5vw,15rem)] font-semibold leading-[0.86] tracking-[-0.025em]"
              >
                VIDORA
              </motion.span>
            </span>
            <span className="mt-5 block max-w-3xl md:mt-7">
              <span className="block overflow-hidden">
                <motion.span
                  variants={rise}
                  className="block font-display text-[clamp(1.55rem,3.6vw,2.9rem)] font-medium leading-[1.06] tracking-[-0.015em] text-cream/90"
                >
                  Every post. Every platform.{" "}
                  <span className="text-ember">One calm queue.</span>
                </motion.span>
              </span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 md:mt-8 md:text-lg"
          >
            Vidora schedules your content to YouTube, TikTok, Instagram, Facebook, X, and
            LinkedIn — then publishes it natively, on schedule.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-espresso transition-colors duration-300 hover:bg-cream md:px-7 md:py-3.5 md:text-base"
            >
              Start scheduling
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream/85 transition-colors duration-300 hover:border-cream/60 hover:text-cream md:px-7 md:py-3.5 md:text-base"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* the dominant visual — this week's queue, full-bleed */}
        <QueueStrip />
      </motion.div>
    </section>
  );
}
