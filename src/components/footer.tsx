const APP_URL = "https://vidoraai.com";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso py-10 text-cream md:py-12">
      <div className="flex flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-10">
        <span className="font-display text-lg font-semibold tracking-tight">
          Vidora
          <span className="ml-1 inline-block size-1.5 rounded-[2px] bg-ember align-baseline" />
        </span>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <a
            href="#product"
            className="text-sm font-medium text-cream/55 transition-colors hover:text-cream"
          >
            Product
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-cream/55 transition-colors hover:text-cream"
          >
            How it works
          </a>
          <a
            href={APP_URL}
            className="text-sm font-medium text-cream/55 transition-colors hover:text-cream"
          >
            Sign in
          </a>
        </nav>

        <p className="text-xs text-cream/35">© 2026 Vidora AI</p>
      </div>
    </footer>
  );
}
