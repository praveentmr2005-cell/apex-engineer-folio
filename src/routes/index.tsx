import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import {
  Hero,
  About,
  Experience,
  Projects,
  Research,
  Startup,
  Skills,
  Leadership,
  Achievements,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
   { title: "Arunkumar Sundaravel — Founder, Researcher, Mechanical Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Arunkumar Sundaravel — Founder of Eaura, mechanical engineering researcher, and product builder working across smart manufacturing, EVs, and AI-driven automation.",
      },
      { property: "og:title", content: "Arunkumar Sundaravel — Founder · Researcher · Engineer" },
      {
        property: "og:description",
        content:
          "Engineering products, building systems, creating impact. Smart manufacturing, EV tech, research, and the Eaura startup.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Arunkumar S — Founder · Researcher · Engineer" },
      {
        name: "twitter:description",
        content:
          "Engineering products, building systems, creating impact. Smart manufacturing, EV tech, and the Eaura startup.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter,system-ui,sans-serif] [&_h1]:font-[Space_Grotesk,system-ui,sans-serif] [&_h2]:font-[Space_Grotesk,system-ui,sans-serif] [&_h3]:font-[Space_Grotesk,system-ui,sans-serif] [&_.font-mono]:font-[JetBrains_Mono,ui-monospace,monospace]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Startup />
        <Skills />
        <Leadership />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
