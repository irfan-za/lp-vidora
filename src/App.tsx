import { MotionConfig } from "motion/react";
import { Nav } from "~/components/nav";
import { Hero } from "~/components/hero";
import { Platforms } from "~/components/platforms";
import { Product } from "~/components/product";
import { How } from "~/components/how";
import { Craft } from "~/components/craft";
import { FinalCta } from "~/components/final-cta";
import { Footer } from "~/components/footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div aria-hidden className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <Platforms />
        <Product />
        <How />
        <Craft />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
