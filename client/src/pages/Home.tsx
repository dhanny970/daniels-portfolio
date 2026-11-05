import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Menu,
  MousePointer2,
  PenTool,
  X,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { portfolio } from "../content/portfolio";
import "./portfolio.css";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const processIcons = [MousePointer2, PenTool, Code2, Check];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <span className="section-label__rule" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="site-header__inner page-shell">
          <a className="brand" href="#top" aria-label={`${portfolio.name}, home`} onClick={closeMobileMenu}>
            <img className="brand-logo" src="/manus-storage/async-images/O95JqMrFxn1SUP3qaEzGtb/image-1.webp" alt="" aria-hidden="true" />
            <span className="brand-name">{portfolio.name}<b>.</b></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            className={`primary-navigation${mobileMenuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMobileMenu}>
              Let’s talk <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section page-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-dot" /> WEBSITE DEVELOPER <span className="kicker-divider">/</span> 2 YEARS’ EXPERIENCE</div>
            <h1 id="hero-title">{portfolio.heroTitle}</h1>
            <p className="hero-introduction">{portfolio.introduction}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                Explore my work <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className="button button--text" href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
            <a className="hero-scroll" href="#work"><ArrowDown aria-hidden="true" size={14} /> SCROLL TO EXPLORE</a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="hero-art__grid" />
            <div className="code-window">
              <div className="code-window__topbar">
                <span className="window-dots"><i /><i /><i /></span>
                <span className="code-window__file">portfolio.tsx</span>
                <span className="code-window__status">LIVE PREVIEW</span>
              </div>
              <div className="code-window__body">
                <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">experience</span> = <span className="code-green">"thoughtful"</span>;</div>
                <div className="code-line"><span className="line-number">02</span><span className="code-purple">function</span> <span className="code-yellow">build</span>(idea) {'{'}</div>
                <div className="code-line code-indent"><span className="line-number">03</span><span className="code-purple">return</span> idea.<span className="code-blue">toWebsite</span>();</div>
                <div className="code-line"><span className="line-number">04</span>{'}'}</div>
                <div className="code-line code-line--empty"><span className="line-number">05</span></div>
                <div className="code-line"><span className="line-number">06</span><span className="code-comment">// made for people, first</span></div>
              </div>
              <div className="code-window__footer"><span><i /> responsive</span><span>100% human-friendly</span></div>
            </div>
            <div className="art-note art-note--top"><span className="art-note__icon"><Layers3 size={15} /></span><span>Built with care<br /><b>down to the details</b></span></div>
            <div className="art-note art-note--bottom"><span className="art-note__number">02</span><span>YEARS BUILDING<br />FOR THE WEB</span></div>
            <div className="art-spark art-spark--one">✳</div>
            <div className="art-spark art-spark--two">✳</div>
          </div>
        </section>

        <div className="ticker" aria-label="Portfolio focus">
          <div className="ticker__inner page-shell">
            <span>Thoughtful interfaces</span><i />
            <span>Responsive by nature</span><i />
            <span>Built for people</span><i />
            <span>Thoughtful interfaces</span>
          </div>
        </div>

        <section className="section work-section page-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading--split">
            <div>
              <SectionLabel number="01">SELECTED WORK</SectionLabel>
              <h2 id="work-title">A few things <em>in progress.</em></h2>
            </div>
            <p className="section-heading__aside">Your projects tell the story. Replace these cards with the work you’re proud to share.</p>
          </div>
          <div className="project-grid">
            {portfolio.projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-section__inner page-shell">
            <div className="about-stamp" aria-hidden="true">
              <div className="about-stamp__rings"><span>{"{ }"}</span><i /></div>
              <span className="about-stamp__caption">CURIOUS BY DEFAULT</span>
            </div>
            <div className="about-copy">
              <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
              <h2 id="about-title">Good work starts with <em>good questions.</em></h2>
              <p>{portfolio.about}</p>
              <div className="about-facts">
                <div className="about-fact"><span className="about-fact__number">02</span><span>YEARS OF<br />WEBSITE DEVELOPMENT</span></div>
                <div className="about-fact"><span className="about-fact__number">↗</span><span>ALWAYS ROOM<br />TO MAKE IT BETTER</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section page-shell" id="skills" aria-labelledby="skills-title">
          <div className="section-heading section-heading--split">
            <div>
              <SectionLabel number="03">TOOLS OF THE TRADE</SectionLabel>
              <h2 id="skills-title">My <em>toolkit.</em></h2>
            </div>
            <p className="section-heading__aside">Add only the technologies and tools you’re comfortable discussing.</p>
          </div>
          <div className="skills-grid">
            {portfolio.skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card__top"><span>0{index + 1}</span><Code2 aria-hidden="true" size={18} /></div>
                <h3>{group.title}</h3>
                <p>{group.prompt}</p>
                <ul className="skill-tags">
                  {group.items.map((item, itemIndex) => <li key={`${group.title}-${itemIndex}`}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="page-shell">
            <div className="section-heading section-heading--split process-heading">
              <div>
                <SectionLabel number="04">HOW I WORK</SectionLabel>
                <h2 id="process-title">From first thought <em>to final polish.</em></h2>
              </div>
              <p className="section-heading__aside">A clear process turns a well-understood brief into a polished, responsive website.</p>
            </div>
            <div className="process-grid">
              {portfolio.process.map((step, index) => {
                const Icon = processIcons[index] ?? Code2;
                return (
                  <article className="process-step" key={step.number}>
                    <div className="process-step__top"><span>{step.number}</span><Icon size={18} aria-hidden="true" /></div>
                    <h3>{step.title}</h3>
                    <p>{step.note}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-panel__decoration" aria-hidden="true"><span /><span /><span /></div>
            <div className="contact-panel__content">
              <SectionLabel number="05">LET’S TALK</SectionLabel>
              <h2 id="contact-title">Let’s<br /><em>talk.</em></h2>
              <p>Have a project, a question, or a full-time opportunity to discuss? I’m open to freelance and full-time roles and would be glad to hear from you.</p>
              <a className="contact-email" href={`mailto:${portfolio.email}?subject=Hello%20from%20your%20portfolio`}>
                {portfolio.email} <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
            <div className="contact-panel__side-note" aria-hidden="true">LET’S MAKE<br />SOMETHING<br />MEANINGFUL</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner page-shell">
          <a className="brand brand--footer" href="#top" aria-label="Back to top">
            <img className="brand-logo" src="/manus-storage/async-images/O95JqMrFxn1SUP3qaEzGtb/image-1.webp" alt="" aria-hidden="true" />
            <span className="brand-name">{portfolio.name}<b>.</b></span>
          </a>
          <p className="footer-copyright">© {new Date().getFullYear()} {portfolio.name}. Replace with your preferred copyright details.</p>
          <div className="footer-links" aria-label="Social profile links">
            {portfolio.socials.map((social) => social.url ? (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight aria-hidden="true" size={13} /></a>
            ) : (
              <span className="footer-link-placeholder" key={social.label}>{social.label} <small>add URL</small></span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
