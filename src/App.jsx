import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, AudioWaveform, Command, ChevronDown,
  ExternalLink, MoveUpRight, Sparkles, Menu, X
} from "lucide-react";
import { navigation, ventures, technologyProjects, services } from "./data/portfolio.js";

function BrandMark() {
  return (
    <a className="brand-lockup" href="#home" aria-label="SynovaMedia home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-name">SYNOVA<span>MEDIA</span></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") { setMenuOpen(false); setActiveDropdown(null); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  const closeMenus = () => { setMenuOpen(false); setActiveDropdown(null); };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.menu ? (
                <>
                  <button className={activeDropdown === item.label ? "nav-link nav-trigger active" : "nav-link nav-trigger"}
                    type="button" aria-expanded={activeDropdown === item.label}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}>
                    {item.label}<ChevronDown size={13} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="mega-menu">
                      {item.menu.map((entry, index) => (
                        <a href={entry.href} key={entry.label} onClick={closeMenus}>
                          <span className="mega-number">0{index + 1}</span>
                          <span><strong>{entry.label}</strong><small>{entry.detail}</small></span>
                          <ArrowUpRight size={15} />
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : <a className="nav-link" href={item.href} onClick={closeMenus}>{item.label}</a>}
            </div>
          ))}
        </nav>
        <a className="header-contact" href="#contact">Let's talk <ArrowUpRight size={14} /></a>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div className="mobile-nav-group" key={item.label}>
              <a href={item.href} onClick={closeMenus}>{item.label}<ArrowUpRight size={15} /></a>
              {item.menu && item.menu.map((entry) => (
                <a className="mobile-sub-link" href={entry.href} key={entry.label} onClick={closeMenus}>{entry.label}</a>
              ))}
            </div>
          ))}
          <a className="mobile-nav-cta" href="#contact" onClick={closeMenus}>Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
      )}
      {activeDropdown && <button className="menu-dismiss" aria-label="Close menu" onClick={() => setActiveDropdown(null)} />}
    </header>
  );
}

function SectionIntro({ index, label, title, copy }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{index}</span><i />{label}</div>
      <div className="section-intro-row"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-orbit orbit-outer" aria-hidden="true" />
      <div className="hero-orbit orbit-inner" aria-hidden="true" />
      <div className="hero-orbit orbit-core" aria-hidden="true" />
      <div className="hero-content page-container">
        <div className="hero-overline"><span className="status-pulse" /> INDEPENDENT TECHNOLOGY & CREATIVE COMPANY</div>
        <div className="hero-emblem" aria-hidden="true">
          <div className="emblem-ring emblem-ring-one" /><div className="emblem-ring emblem-ring-two" />
          <div className="emblem-core"><Command size={43} strokeWidth={1.15} /></div>
          <span className="emblem-node node-one" /><span className="emblem-node node-two" /><span className="emblem-node node-three" />
        </div>
        <p className="hero-pretitle">IDEAS WITHOUT BOUNDARIES</p>
        <h1>A universe of ideas.<br /><span>Engineered into reality.</span></h1>
        <p className="hero-description">Technology, intelligence, and creative expression. One independent ecosystem built to explore what's possible.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#ventures">Explore the ecosystem <ArrowUpRight size={16} /></a>
          <a className="button-quiet" href="#about">Discover SynovaMedia <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-foot page-container"><span>FRESNO, CALIFORNIA <i /> WORKING EVERYWHERE</span><span>TECHNOLOGY <b>×</b> CREATIVITY <b>×</b> POSSIBILITY</span></div>
      <div className="hero-side-note" aria-hidden="true">SYNOVA / 001</div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="ecosystem-section section-space" id="ventures">
      <div className="page-container">
        <SectionIntro index="01" label="THE ECOSYSTEM"
          title={<>Different disciplines.<br /><span>One connected vision.</span></>}
          copy="SynovaMedia brings technology and creative ventures together under one independent company. Each branch has its own purpose, identity, and room to grow." />
        <div className="venture-grid">
          {ventures.map((venture) => {
            const Icon = venture.icon;
            return (
              <article className="venture-card glass-panel" id={venture.id} key={venture.id}>
                <div className="venture-card-top"><span>{venture.number} / 04</span><span className="venture-icon"><Icon size={20} strokeWidth={1.4} /></span></div>
                <div className="venture-card-body"><p className="card-eyebrow">{venture.eyebrow}</p><h3>{venture.title}</h3><p>{venture.description}</p></div>
                <a className="text-link" href={venture.href}>{venture.linkLabel}<ArrowUpRight size={15} /></a>
                <div className="card-sheen" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="technology-section section-space" id="technology">
      <div className="page-container">
        <SectionIntro index="02" label="THE TECHNOLOGY PORTFOLIO"
          title={<>Built from curiosity.<br /><span>Designed for possibility.</span></>}
          copy="A selection of software and technical explorations across AI, audio, productivity, and developer tooling. The portfolio will grow as each project is ready to be presented." />
        <div className="technology-toolbar"><div><span className="toolbar-dot" /> SELECTED PROJECTS</div><span>PORTFOLIO / 2026</span></div>
        <div className="project-grid">
          {technologyProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-icon"><Icon size={19} strokeWidth={1.35} /></span>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={15} /></a> : <span className="project-icon-placeholder"><ArrowUpRight size={15} /></span>}
                </div>
                <p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
                <div className="project-card-bottom"><span>{project.status}</span><span className="project-line" /></div>
              </article>
            );
          })}
        </div>
        <p className="portfolio-note"><Sparkles size={14} /> More experiments and independent builds will be introduced as the portfolio expands.</p>
      </div>
    </section>
  );
}

function Creative() {
  return (
    <section className="creative-section section-space" id="creative">
      <div className="page-container creative-layout">
        <div className="creative-copy">
          <SectionIntro index="03" label="THE CREATIVE SIDE"
            title={<>Technology has logic.<br /><span>Creativity gives it soul.</span></>}
            copy="Music, visual storytelling, animation, and digital experiences are not separate from the technology. They're another way to explore what can be made." />
          <a className="button-outline" href="https://lilsynn.com" target="_blank" rel="noreferrer">Explore LIL SYNN <ArrowUpRight size={16} /></a>
        </div>
        <div className="creative-art" aria-label="Abstract soundwave-inspired visual">
          <div className="creative-art-halo" />
          <div className="soundwave">{Array.from({ length: 39 }, (_, index) =>
            <span key={index} style={{ "--bar": 12 + Math.abs(Math.sin(index * .56) * 72) + Math.abs(Math.cos(index * .19) * 30) + "px", "--delay": (index * -.035) + "s" }} />)}
          </div>
          <div className="creative-art-caption"><span>CREATIVE FREQUENCY / 001</span><AudioWaveform size={17} /></div>
          <div className="creative-art-label">SOUND<br />BECOMES<br /><span>FORM.</span></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section section-space" id="services">
      <div className="page-container">
        <SectionIntro index="04" label="COLLABORATE WITH SYNOVA"
          title={<>Complex ideas.<br /><span>Practical outcomes.</span></>}
          copy="Creative and technical services for people and teams looking to make something useful, distinctive, or entirely new." />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-item" key={service.title}>
                <div className="service-index">0{index + 1}</div><div className="service-icon"><Icon size={19} strokeWidth={1.5} /></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={17} />
              </article>
            );
          })}
        </div>
        <div className="services-footnote"><span>✳</span> Every engagement starts with the problem, not a predetermined tool.</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-space" id="about">
      <div className="page-container">
        <div className="about-panel">
          <div className="about-watermark" aria-hidden="true">S</div>
          <div className="about-panel-copy">
            <div className="section-kicker"><span>05</span><i /> THE THINKING BEHIND IT</div>
            <h2>Build with intent.<br /><span>Explore without limits.</span></h2>
            <p>SynovaMedia is an independent company at the intersection of technology and creative expression. The work spans software, artificial intelligence, music, and digital media, connected by a simple belief: ambitious ideas deserve thoughtful engineering and room to evolve.</p>
            <div className="about-values"><span>INDEPENDENT THINKING</span><span>EXPERIMENTAL BY NATURE</span><span>BUILT TO EVOLVE</span></div>
          </div>
          <div className="about-coordinate"><span>SM / PRINCIPLE 001</span><span>IDEAS → SYSTEMS → EXPERIENCES</span></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-space" id="contact">
      <div className="page-container">
        <div className="contact-panel">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-content">
            <div className="section-kicker"><span>06</span><i /> HAVE SOMETHING IN MIND?</div>
            <h2>Let's make<br /><span>something matter.</span></h2>
            <p>Have a project, a question, or an idea worth exploring? Start a conversation and let's see where it can go.</p>
            <div className="contact-actions">
              <a className="button-primary" href="https://x.com/SynovaMedia" target="_blank" rel="noreferrer">Connect with SynovaMedia <ArrowUpRight size={16} /></a>
              <a className="button-quiet" href="https://discord.gg/yJrKFqbJ" target="_blank" rel="noreferrer">Join the community <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="contact-aside"><span>OPEN TO</span><strong>Ideas</strong><strong>Projects</strong><strong>Collaboration</strong><span className="contact-aside-bottom">SYNOVA / CONTACT</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <div><BrandMark /><p>Technology. Intelligence.<br />Creative expression.</p></div>
        <div className="footer-links">
          <div><span>EXPLORE</span><a href="#ventures">Ventures</a><a href="#technology">Technology</a><a href="#creative">Creative</a></div>
          <div><span>CONNECT</span><a href="https://x.com/SynovaMedia" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight size={12} /></a><a href="https://discord.gg/yJrKFqbJ" target="_blank" rel="noreferrer">Discord <ArrowUpRight size={12} /></a></div>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <span>© {new Date().getFullYear()} SYNOVAMEDIA. ALL RIGHTS RESERVED.</span>
        <span>INDEPENDENT BY DESIGN <i /> BUILT TO EVOLVE</span>
        <a href="#home">BACK TO TOP <MoveUpRight size={12} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: .12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <div data-reveal><Ecosystem /></div>
        <div data-reveal><Technology /></div>
        <div data-reveal><Creative /></div>
        <div data-reveal><Services /></div>
        <div data-reveal><About /></div>
        <div data-reveal><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}