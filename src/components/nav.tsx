import { useState } from "react";
import { MotionConfig, motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "~/lib/utils";

const APP_URL = "https://vidoraai.com";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-hairline bg-paper/85 text-ink backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-cream",
        )}
      >
        <nav className="flex items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight md:text-2xl"
            aria-label="Vidora AI — back to top"
          >
            Vidora
            <span className="ml-1 inline-block size-2 rounded-[2px] bg-ember align-baseline" />
          </a>

          <div className="flex items-center gap-5 md:gap-9">
            <a
              href="#product"
              className={cn(
                "hidden text-sm font-medium tracking-wide transition-colors md:inline-block",
                scrolled ? "text-ink-soft hover:text-ink" : "text-cream/75 hover:text-cream",
              )}
            >
              Product
            </a>
            <a
              href="#how"
              className={cn(
                "hidden text-sm font-medium tracking-wide transition-colors md:inline-block",
                scrolled ? "text-ink-soft hover:text-ink" : "text-cream/75 hover:text-cream",
              )}
            >
              How it works
            </a>
            <a
              href={APP_URL}
              className={cn(
                "hidden text-sm font-medium tracking-wide transition-colors sm:inline-block",
                scrolled ? "text-ink-soft hover:text-ink" : "text-cream/75 hover:text-cream",
              )}
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-5 md:py-2.5",
                scrolled
                  ? "bg-ink text-cream hover:bg-espresso-2"
                  : "bg-cream text-espresso hover:bg-paper",
              )}
            >
              Start free
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </nav>
      </motion.header>
    </MotionConfig>
  );
}
