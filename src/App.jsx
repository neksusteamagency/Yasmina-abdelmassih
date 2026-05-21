import { useEffect, useState } from "react";
import { Mail, ArrowUpRight, ArrowDown, ArrowRight, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@300..800&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const updateTime = () => {
      try {
        const beirut = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Beirut",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setTime(beirut);
      } catch (e) {
        setTime("--:--");
      }
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const tools = [
    { name: "Photoshop", code: "Ps" },
    { name: "Illustrator", code: "Ai" },
    { name: "InDesign", code: "Id" },
    { name: "After Effects", code: "Ae" },
    { name: "Premiere Pro", code: "Pr" },
    { name: "Adobe XD", code: "Xd" },
  ];

  const services = [
    { num: "01", title: "Logos & Identity", desc: "Marks, wordmarks, and full identity systems built from a clear idea.", variant: "big-dark" },
    { num: "02", title: "Brand Guidelines", desc: "Systems that keep a brand recognizable everywhere.", variant: "small-cream" },
    { num: "03", title: "Marketing Campaigns", desc: "Concept-led campaigns across print, digital, and social.", variant: "tall-cream" },
    { num: "04", title: "Flyers & Print", desc: "Editorial layouts with typography that earns the page.", variant: "small-burgundy" },
    { num: "05", title: "Billboards", desc: "Outdoor work designed to land in a single glance.", variant: "small-cream" },
    { num: "06", title: "Custom Design", desc: "Tailored visuals built around what each project actually needs.", variant: "wide-cream" },
  ];

  const projects = [
    { num: "01", title: "Brand Identity", category: "Logo / Guidelines", year: "2025", role: "Lead Designer" },
    { num: "02", title: "Campaign Series", category: "Marketing", year: "2025", role: "Concept + Design" },
    { num: "03", title: "Editorial Layout", category: "Print", year: "2024", role: "Designer" },
    { num: "04", title: "Motion Reel", category: "After Effects", year: "2025", role: "Designer + Animator" },
    { num: "05", title: "Outdoor Billboard", category: "OOH", year: "2024", role: "Designer" },
    { num: "06", title: "Custom Illustration", category: "Illustration", year: "2025", role: "Illustrator" },
  ];

  return (
    <div className="ya-root">
      <style>{`
        .ya-root {
          font-family: "Manrope", system-ui, sans-serif;
          color: #0E0E0E;
          background-color: #F2EFE8;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        html { scroll-behavior: smooth; }

        .font-display { font-family: "Fraunces", "Times New Roman", serif; font-optical-sizing: auto; }
        .font-mono { font-family: "JetBrains Mono", monospace; }

        .text-burgundy { color: #6B1F2E; }
        .text-burgundy-light { color: #C25C70; }
        .text-cream { color: #F2EFE8; }
        .text-ink { color: #0E0E0E; }
        .bg-burgundy { background-color: #6B1F2E; }
        .bg-burgundy-dark { background-color: #4A1520; }
        .bg-cream { background-color: #F2EFE8; }
        .bg-ink { background-color: #0E0E0E; }
        .border-cream { border-color: #F2EFE8; }
        .border-cream-soft { border-color: rgba(242,239,232,0.15); }
        .border-burgundy { border-color: #6B1F2E; }
        .border-ink { border-color: #0E0E0E; }
        .border-ink-soft { border-color: rgba(14,14,14,0.12); }

        .tracking-2 { letter-spacing: 0.18em; }
        .tracking-3 { letter-spacing: 0.28em; }

        /* Display typography */
        .h-mega { font-size: clamp(4.5rem, 18vw, 18rem); line-height: 0.82; letter-spacing: -0.045em; }
        .h-hero { font-size: clamp(3.5rem, 13vw, 12rem); line-height: 0.86; letter-spacing: -0.035em; }
        .h-xl { font-size: clamp(2.5rem, 7vw, 6rem); line-height: 0.92; letter-spacing: -0.025em; }
        .h-lg { font-size: clamp(2rem, 5vw, 4rem); line-height: 0.98; letter-spacing: -0.015em; }
        .h-md { font-size: clamp(1.5rem, 3vw, 2.5rem); line-height: 1.05; }

        /* Single slow marquee — tools section only */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 55s linear infinite; width: max-content; }

        /* Entrance animations — subtle, one-time */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .d-1 { animation-delay: 0.1s; }
        .d-2 { animation-delay: 0.22s; }
        .d-3 { animation-delay: 0.36s; }
        .d-4 { animation-delay: 0.5s; }
        .d-5 { animation-delay: 0.64s; }

        /* Nav */
        .nav-bar { transition: all 0.3s ease; }
        .nav-bar.scrolled {
          background-color: rgba(242,239,232,0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(14,14,14,0.08);
        }
        .nav-bar.scrolled .nav-link { color: #0E0E0E; }
        .nav-bar.scrolled .nav-cta {
          background: #0E0E0E;
          color: #F2EFE8;
          border-color: #0E0E0E;
        }
        .nav-link {
          position: relative;
          transition: color 0.25s ease;
          color: #F2EFE8;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link:hover { color: #C25C70; }
        .nav-cta {
          background: transparent;
          color: #F2EFE8;
          border: 1px solid rgba(242,239,232,0.5);
          transition: all 0.25s ease;
        }
        .nav-cta:hover {
          background: #F2EFE8;
          color: #6B1F2E;
          border-color: #F2EFE8;
        }

        /* Tags */
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1px solid currentColor;
        }
        .tag-cream-on-burg { color: #F2EFE8; border-color: rgba(242,239,232,0.35); }
        .tag-ink { color: #0E0E0E; border-color: rgba(14,14,14,0.3); }
        .tag-cream { color: #F2EFE8; border-color: rgba(242,239,232,0.3); background: rgba(242,239,232,0.08); }

        /* Hero */
        .hero-line {
          width: 1px;
          height: 64px;
          background: rgba(242,239,232,0.3);
          display: block;
          margin: 0 auto;
        }

        /* Dividers */
        .rule { height: 1px; }
        .rule-cream { background: rgba(242,239,232,0.18); }
        .rule-ink { background: rgba(14,14,14,0.1); }

        /* Bento services */
        .bento {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: minmax(160px, auto);
          gap: 1px;
          border: 1px solid rgba(14,14,14,0.1);
          background: rgba(14,14,14,0.1);
        }
        .bento-big-dark { grid-column: span 3; grid-row: span 2; }
        .bento-small-cream { grid-column: span 3; grid-row: span 1; }
        .bento-tall-cream { grid-column: span 2; grid-row: span 2; }
        .bento-small-burgundy { grid-column: span 2; grid-row: span 1; }
        .bento-wide-cream { grid-column: span 6; grid-row: span 1; }
        @media (max-width: 768px) {
          .bento { grid-template-columns: repeat(1, 1fr); }
          .bento-big-dark, .bento-small-cream, .bento-tall-cream,
          .bento-small-burgundy, .bento-wide-cream {
            grid-column: span 1;
            grid-row: span 1;
            min-height: 180px;
          }
        }

        .service-card {
          position: relative;
          padding: 2rem 1.75rem;
          background: #F2EFE8;
          color: #0E0E0E;
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-card-dark { background: #0E0E0E; color: #F2EFE8; }
        .service-card-burgundy { background: #6B1F2E; color: #F2EFE8; }
        .service-card:hover .service-arrow { transform: translate(3px, -3px); }
        .service-arrow { transition: transform 0.3s ease; }

        /* Tool badges — static grid instead of marquee */
        .tool-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(242,239,232,0.08);
          border: 1px solid rgba(242,239,232,0.08);
        }
        @media (min-width: 768px) {
          .tool-grid { grid-template-columns: repeat(6, 1fr); }
        }
        .tool-item {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: background 0.25s ease;
        }
        .tool-item:hover { background: rgba(242,239,232,0.05); }
        .tool-code {
          font-family: "Fraunces", serif;
          font-style: italic;
          font-size: 2.5rem;
          color: #C25C70;
          line-height: 1;
        }
        .tool-name {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(242,239,232,0.5);
        }

        /* Projects */
        .project-card { cursor: pointer; }
        .project-thumb { overflow: hidden; }
        .project-thumb img,
        .project-thumb-inner { transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .project-card:hover .project-thumb-inner { transform: scale(1.03); }
        .project-overlay { opacity: 0; transition: opacity 0.35s ease; }
        .project-card:hover .project-overlay { opacity: 1; }

        /* Contact */
        .email-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }
        .email-link::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 1px;
          background: currentColor;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .email-link:hover::after { transform: scaleX(0); transform-origin: right; }

        /* Buttons */
        .btn-outline-cream {
          border: 1px solid rgba(242,239,232,0.5);
          color: #F2EFE8;
          transition: all 0.25s ease;
        }
        .btn-outline-cream:hover {
          background: #F2EFE8;
          color: #6B1F2E;
          border-color: #F2EFE8;
        }
        .btn-fill-cream {
          background: #F2EFE8;
          color: #6B1F2E;
          transition: all 0.25s ease;
        }
        .btn-fill-cream:hover { background: #0E0E0E; color: #F2EFE8; }
        .btn-fill-ink {
          background: #0E0E0E;
          color: #F2EFE8;
          transition: all 0.25s ease;
        }
        .btn-fill-ink:hover { background: #6B1F2E; }
      `}</style>

      {/* ============ NAV ============ */}
      <nav
        className={`nav-bar fixed left-0 right-0 z-50 ${scrolled ? "scrolled py-3 top-0" : "py-5"}`}
        style={{ top: scrolled ? "0" : "0" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-tight flex items-center gap-1.5">
            <span style={{ color: scrolled ? "#6B1F2E" : "#F2EFE8" }}>Y</span>
            <span style={{ color: scrolled ? "rgba(14,14,14,0.25)" : "rgba(242,239,232,0.35)" }}>/</span>
            <span style={{ color: scrolled ? "#0E0E0E" : "#F2EFE8" }}>A</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-2">
            {["About", "Tools", "Services", "Work"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
            <a href="#contact" className="nav-cta px-5 py-2 rounded-full inline-flex items-center gap-2">
              Contact <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen
              ? <X className={`w-5 h-5 ${scrolled ? "text-ink" : "text-cream"}`} />
              : <Menu className={`w-5 h-5 ${scrolled ? "text-ink" : "text-cream"}`} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-ink/10 mt-2">
            <div className="px-6 py-6 flex flex-col gap-4 text-base text-ink">
              {["About", "Tools", "Services", "Work"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-fill-ink inline-flex items-center gap-2 px-5 py-2.5 rounded-full w-fit text-sm">
                Contact <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ============ HERO ============ */}
      <section id="top" className="bg-burgundy text-cream relative overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Subtle grain overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4
        }} />

        {/* Metadata row */}
        <div className="relative z-10 px-6 md:px-10 pt-28 md:pt-32 flex items-start justify-between font-mono text-[10px] tracking-3 uppercase text-cream/50">

        </div>

        {/* Name */}
        <div className="relative z-10 px-6 md:px-10 mt-10 md:mt-14 max-w-[1400px] mx-auto">
          <h1 className="font-display h-hero fade-up d-2">
            Yasmina
            <br />
            <span className="italic" style={{ color: "#C25C70" }}>Abdelmasih.</span>
          </h1>
        </div>

        {/* Bottom */}
        <div className="relative z-10 px-6 md:px-10 mt-14 md:mt-20 max-w-[1400px] mx-auto pb-28">
          <div className="rule rule-cream mb-10 fade-up d-3" />
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-5 fade-up d-3">
              <p className="text-base md:text-lg leading-relaxed text-cream/75 max-w-sm">
                A designer turning ideas into identities, logos, campaigns,
                and the print and motion pieces that bring them to life.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">

                <span className="tag tag-cream-on-burg">Freelance Designer</span>
                <span className="tag tag-cream-on-burg">Antonine Uni · '26</span>
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-8 flex flex-col gap-3 fade-up d-4">
              <a href="#work" className="btn-outline-cream px-6 py-3 rounded-full text-xs font-mono uppercase tracking-2 inline-flex items-center gap-2 w-fit">
                See work <ArrowRight className="w-3 h-3" />
              </a>
              <a href="#contact" className="btn-fill-cream px-6 py-3 rounded-full text-xs font-mono uppercase tracking-2 inline-flex items-center gap-2 w-fit">
                Start a project
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="bg-cream relative py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono text-[10px] tracking-3 uppercase text-burgundy">01 / About</span>
            <span className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            {/* Portrait */}
            <div className="md:col-span-4 relative">
              <div className="aspect-[4/5] bg-ink relative overflow-hidden">
<img
  src="/src/assets/hermes.jpeg"
  alt="Yasmina"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
                <div className="absolute top-4 left-4 font-mono text-[9px] tracking-2 uppercase text-cream/40">Fig. 01</div>
                <div className="absolute bottom-4 right-4 font-mono text-[9px] tracking-2 uppercase text-cream/40">2026</div>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-8 md:pl-4 flex flex-col justify-between">
              <div>
                <h2 className="font-display h-xl mb-10">
                  A designer with an
                  <br />
                  <span className="italic text-burgundy">eye for detail</span>.
                </h2>

                <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
                  <p>
                   I'm a <strong className="text-ink font-semibold">19-year-old freelance graphic designer</strong> in my final year at Antonine University. I work across the full Adobe suite to build identities, campaigns, and motion that feel considered from the first sketch to the last export.
                  </p>
                  <p>
                    Driven by creativity and grounded in clear communication. every project, from a single flyer to a complete brand system, gets the same care.
                  </p>
                </div>

                <div className="mt-10">
                  <div className="font-mono text-[10px] tracking-3 uppercase text-ink/40 mb-4">Soft skills</div>
                  <div className="flex flex-wrap gap-2">
                    {["High Creativity", "Strong Communication", "Patience", "Attention to Detail", "Concept-Driven"].map((skill) => (
                      <span key={skill} className="px-4 py-1.5 border border-ink/20 text-sm text-ink/70 hover:border-burgundy hover:text-burgundy transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-14 pt-8 border-t border-ink/10 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-5xl text-burgundy">19</div>
                  <div className="font-mono text-[9px] tracking-2 uppercase text-ink/40 mt-2">Years young</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-burgundy">6+</div>
                  <div className="font-mono text-[9px] tracking-2 uppercase text-ink/40 mt-2">Adobe tools</div>
                </div>
                <div>
                  <div className="font-display italic text-5xl text-burgundy">∞</div>
                  <div className="font-mono text-[9px] tracking-2 uppercase text-ink/40 mt-2">Ideas brewing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOOLS ============ */}
      <section id="tools" className="bg-ink text-cream relative py-24 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
          <div className="flex items-center gap-5 mb-12">
            <span className="font-mono text-[10px] tracking-3 uppercase text-burgundy-light">02 / Toolkit</span>
            <span className="flex-1 h-px bg-cream/10" />
          </div>
          <h2 className="font-display h-xl">
            The whole <span className="italic text-burgundy-light">Adobe family</span>,
            <br />
            handled with care.
          </h2>
        </div>

        {/* Static tool grid */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="tool-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tool-item">
                <div className="tool-code">{tool.code}</div>
                <div className="tool-name">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Single subtle text row */}
        <div className="mt-16 overflow-hidden border-t border-cream/8">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap pt-6 font-mono text-[10px] tracking-3 uppercase text-cream/25">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12 shrink-0">
                <span>Brand systems</span>
                <span>·</span>
                <span>Typography</span>
                <span>·</span>
                <span>Motion graphics</span>
                <span>·</span>
                <span>Print production</span>
                <span>·</span>
                <span>Creative direction</span>
                <span>·</span>
                <span>Illustration</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-cream relative py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono text-[10px] tracking-3 uppercase text-burgundy">03 / Services</span>
            <span className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="grid md:grid-cols-12 gap-6 mb-14 items-end">
            <h2 className="md:col-span-7 font-display h-xl">
              What I <span className="italic text-burgundy">build</span>.
            </h2>

          </div>

          {/* Bento grid */}
          <div className="bento">
            {/* 01 - big dark */}
            <div className="service-card service-card-dark bento-big-dark group">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-2 uppercase text-burgundy-light">{services[0].num}</span>
                  <ArrowUpRight className="service-arrow w-4 h-4 text-cream/40" />
                </div>
                <h3 className="font-display h-md mt-8">{services[0].title}</h3>
              </div>
              <div>
                <p className="text-cream/60 leading-relaxed mt-6 max-w-sm text-sm">{services[0].desc}</p>
                <div className="mt-8 font-mono text-[9px] tracking-3 uppercase text-cream/25">Featured service</div>
              </div>
            </div>

            {/* 02 */}
            <div className="service-card bento-small-cream group">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-2 uppercase text-burgundy">{services[1].num}</span>
                <ArrowUpRight className="service-arrow w-4 h-4 text-ink/30" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mt-4">{services[1].title}</h3>
                <p className="text-ink/55 text-sm mt-2 leading-relaxed">{services[1].desc}</p>
              </div>
            </div>

            {/* 03 */}
            <div className="service-card bento-tall-cream group">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-2 uppercase text-burgundy">{services[2].num}</span>
                <ArrowUpRight className="service-arrow w-4 h-4 text-ink/30" />
              </div>
              <div>
                <h3 className="font-display h-md mt-8">{services[2].title}</h3>
                <p className="text-ink/55 mt-4 text-sm leading-relaxed">{services[2].desc}</p>
              </div>
            </div>

            {/* 04 */}
            <div className="service-card service-card-burgundy bento-small-burgundy group">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-2 uppercase text-cream/60">{services[3].num}</span>
                <ArrowUpRight className="service-arrow w-4 h-4 text-cream/50" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mt-4">{services[3].title}</h3>
                <p className="text-cream/65 text-sm mt-2 leading-relaxed">{services[3].desc}</p>
              </div>
            </div>

            {/* 05 */}
            <div className="service-card bento-small-burgundy group">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-2 uppercase text-burgundy">{services[4].num}</span>
                <ArrowUpRight className="service-arrow w-4 h-4 text-ink/30" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mt-4">{services[4].title}</h3>
                <p className="text-ink/55 text-sm mt-2 leading-relaxed">{services[4].desc}</p>
              </div>
            </div>

            {/* 06 */}
            <div className="service-card bento-wide-cream group">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-8">
                  <span className="font-mono text-[10px] tracking-2 uppercase text-burgundy">{services[5].num}</span>
                  <h3 className="font-display h-md">{services[5].title}</h3>
                </div>
                <ArrowUpRight className="service-arrow w-5 h-5 shrink-0 text-ink/40" />
              </div>
              <p className="text-ink/60 mt-3 max-w-2xl text-sm leading-relaxed">{services[5].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="bg-ink text-cream relative py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono text-[10px] tracking-3 uppercase text-burgundy-light">04 / Selected Work</span>
            <span className="flex-1 h-px bg-cream/10" />
          </div>

          <div className="grid md:grid-cols-12 gap-6 mb-16 items-end">
            <h2 className="md:col-span-7 font-display h-xl">
              Recent <span className="italic text-burgundy-light">projects</span>.
            </h2>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            {projects.map((p, i) => {
              const isFeatured = i === 0 || i === 3;
              const colSpan = isFeatured ? "md:col-span-7" : "md:col-span-5";
              const offset = i === 1 || i === 4 ? "md:mt-16" : "";

              return (
                <a href="#" key={i} className={`project-card block ${colSpan} ${offset}`}>
<div className="project-thumb aspect-[4/5] relative">
  <div className="project-thumb-inner absolute inset-0">
    <img
      src={[
        "/src/assets/family-row-logo.jpeg",
        "/src/assets/jpgaultier-billboard.jpeg",
        "/src/assets/rim-label.jpeg",
        "/src/assets/mind-collage.jpeg",
        "/src/assets/duality-face.jpeg",
        "/src/assets/lebanon-collage.jpeg",
      ][i]}
      alt={p.title}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>

                    <div className="absolute top-5 left-5 right-5 flex justify-between font-mono text-[9px] tracking-2 uppercase text-cream/40">
                      <span>{p.num} / 0{projects.length}</span>
                      <span>{p.year}</span>
                    </div>

                    <div className="project-overlay absolute inset-0 bg-ink/75 flex items-center justify-center">
                      <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-2 border border-cream/40 px-5 py-2.5">
                        View case <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl">{p.title}</h3>
                      <div className="font-mono text-[10px] tracking-2 uppercase text-cream/40 mt-1">{p.category}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-[9px] tracking-2 uppercase text-cream/30">Role</div>
                      <div className="font-mono text-[10px] text-cream/65 mt-1">{p.role}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-24 pt-10 border-t border-cream/10 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-3 uppercase text-cream/30">Have a project in mind?</span>
            <a href="#contact" className="inline-flex items-center gap-3 font-display italic text-2xl md:text-3xl group text-cream hover:text-burgundy-light transition-colors">
              Let's talk
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-burgundy text-cream relative py-24 md:py-36 px-6 md:px-10 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(74,21,32,0.6) 0%, transparent 60%)"
        }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono text-[10px] tracking-3 uppercase text-cream/60">05 / Contact</span>
            <span className="flex-1 h-px bg-cream/15" />
          </div>

          <h2 className="font-display h-mega">
            Let's make
            <br />
            <span className="italic" style={{ color: "#C25C70" }}>something</span>
            <br />
            good.
          </h2>

          <div className="mt-16 rule rule-cream opacity-20 mb-14" />

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] tracking-3 uppercase text-cream/45 mb-5">Email</div>
              <a href="mailto:yasmina.abdelmassih@icloud.com" className="email-link font-display text-xl md:text-3xl text-cream/90">
                yasmina.abdelmassih@icloud.com
              </a>
            </div>

            <div className="md:col-span-4">
              <div className="font-mono text-[10px] tracking-3 uppercase text-cream/45 mb-5">Instagram</div>
              <a href="https://www.instagram.com/yasmina_abdelmassih?igsh=MXIxNjJveXlyNGdseQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="email-link font-display text-xl md:text-3xl text-cream/90">
                @yasmina_abdelmassih
              </a>
            </div>


          </div>

          {/* Footer info */}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] tracking-2 uppercase text-cream/35">
          <div>© 2026 Yasmina Abdelmasih · All rights reserved</div>
          <div className="flex items-center gap-4">
            <span>Designed with care</span>
            <span className="text-burgundy-light">·</span>
            <span>Beirut, LB</span>
            <span className="text-burgundy-light">·</span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}