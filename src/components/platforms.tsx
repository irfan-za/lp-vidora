const PLATFORMS = ["YouTube", "TikTok", "Instagram", "Facebook", "X", "LinkedIn"];

export function Platforms() {
  return (
    <section aria-label="Supported platforms" className="overflow-hidden border-y border-hairline bg-paper-2 py-14 md:py-20">
      <p className="mb-10 px-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted md:mb-14 md:text-sm">
        Connect once — publish natively everywhere
      </p>
      <div className="relative">
        <div className="marquee-track flex w-max items-baseline whitespace-nowrap">
          {[...PLATFORMS, ...PLATFORMS].map((name, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: static duplicated list, order never changes
              key={i}
              className="flex items-baseline font-display text-[clamp(2.75rem,7.5vw,6rem)] font-medium leading-none tracking-[-0.02em] text-ink/85"
            >
              {name}
              <span aria-hidden className="mx-6 text-[0.5em] text-ember md:mx-10">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
