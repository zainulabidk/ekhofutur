import { SiteShell } from "./components/layout/SiteShell";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Categories } from "./components/Categories";
import { LatestCreations } from "./components/LatestCreations";
import { About } from "./components/About";
import { Testimonials, ContactForm } from "./components/Testimonials";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <div className="relative z-10 bg-white">
        <WhatWeDo />
        <LatestCreations />
        <Categories />
        <About />
        <Testimonials />
        <ContactForm />
      </div>
    </SiteShell>
  );
}
