import { useState, useEffect } from "react"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  bg: "#ffffff",
  bgAlt: "#f8fafc",
  bgNavy: "#0f172a",
  navy: "#0f172a",
  navyMid: "#1e3a8a",
  blue: "#2563eb",
  blueMid: "#3b82f6",
  blueLight: "#eff6ff",
  slate: "#64748b",
  slateLight: "#94a3b8",
  border: "#e2e8f0",
  borderMid: "#cbd5e1",
  white: "#ffffff",
  text: "#0f172a",
  textMid: "#334155",
  textMuted: "#64748b",
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const SKILLS = [
  "TypeScript", "React", "Node.js", "Go", "PostgreSQL", "Redis",
  "Docker", "Kubernetes", "AWS", "GraphQL", "Rust", "Next.js",
]

const PROJECTS = [
  {
    title: "Helix — Real-time Collaboration Engine",
    description:
      "A CRDT-based multiplayer editing engine for structured documents. Handles conflict resolution for 1,000+ concurrent users with sub-50ms latency.",
    stack: ["Go", "WebSockets", "Redis", "React"],
    demo: "#",
    source: "#",
  },
  {
    title: "Orbit — Distributed Task Queue",
    description:
      "A durable, exactly-once job processing system built on PostgreSQL. Supports fan-out patterns, priority queues, and dead-letter handling.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
    demo: "#",
    source: "#",
  },
  {
    title: "Lens — Query Observability Platform",
    description:
      "Traces and profiles slow queries across distributed Postgres clusters, annotates execution plans, and surfaces optimization suggestions.",
    stack: ["Rust", "Next.js", "ClickHouse", "Kubernetes"],
    demo: "#",
    source: "#",
  },
]

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Meridian Systems",
    period: "2022 — Present",
    bullets: [
      "Led re-architecture of the core data pipeline, reducing p99 latency from 4.2s to 340ms",
      "Designed a multi-tenant RBAC system now used across 6 product lines",
      "Mentored 4 engineers; established the team's RFC-driven design process",
    ],
  },
  {
    role: "Software Engineer",
    company: "Vantage Cloud",
    period: "2019 — 2022",
    bullets: [
      "Built the ingestion layer handling 2M events/day across 40+ customer tenants",
      "Migrated monolith to a service mesh — 0 downtime over 14-month rollout",
      "Shipped real-time anomaly detection that drove 18% ARR expansion",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Axiom Labs",
    period: "Summer 2018",
    bullets: [
      "Implemented OAuth 2.0 integration with 5 identity providers from scratch",
      "Built a CLI tool for internal secret rotation used by the security team",
    ],
  },
]

// ─── App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: C.text, background: C.bg }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, color: C.navy, textDecoration: "none", letterSpacing: "-0.02em" }}>
            Alex Kim
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                style={{ fontSize: 14, fontWeight: 500, color: C.slate, textDecoration: "none", transition: "color 0.18s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}
              >{l.label}</a>
            ))}
            <a href="#contact"
              style={{ fontSize: 14, fontWeight: 600, color: C.white, background: C.blue, padding: "9px 22px", borderRadius: 8, textDecoration: "none", transition: "background 0.18s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.navyMid)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.blue)}
            >Hire Me</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: C.bgNavy, minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 2rem 80px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%" }}>

          {/* Status pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1e3a8a30", border: "1px solid #3b82f620", borderRadius: 100, padding: "6px 16px 6px 10px", marginBottom: 40 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#94a3b8", letterSpacing: "0.08em" }}>OPEN TO OPPORTUNITIES</span>
          </div>

          <h1 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: C.white,
            margin: "0 0 1.5rem",
            maxWidth: 820,
          }}>
            Building systems<br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>that scale</em> with<br />
            your ambition.
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#94a3b8", maxWidth: 560, lineHeight: 1.7, margin: "0 0 3rem", fontWeight: 400 }}>
            Backend-focused engineer with 6 years building distributed systems, data pipelines, and developer tooling. Based in San Francisco.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects"
              style={{ fontSize: 15, fontWeight: 600, color: C.white, background: C.blue, padding: "14px 32px", borderRadius: 8, textDecoration: "none", transition: "background 0.18s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.blue)}
            >View My Work</a>
            <a href="#contact"
              style={{ fontSize: 15, fontWeight: 600, color: "#cbd5e1", background: "transparent", padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #334155", transition: "all 0.18s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#64748b"; e.currentTarget.style.color = C.white }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#cbd5e1" }}
            >Get In Touch</a>
          </div>

          {/* Stats strip */}
          <div style={{ display: "flex", gap: "3rem", marginTop: 80, paddingTop: 48, borderTop: "1px solid #1e293b", flexWrap: "wrap" }}>
            {[["6+", "Years Experience"], ["50M+", "Daily Requests Served"], ["3", "Startups Scaled"], ["12", "Open Source Projects"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 32, fontWeight: 700, color: C.white, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" style={{ background: C.bgAlt, padding: "120px 2rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Label>About Me</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", marginTop: 48, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 1.5rem", color: C.navy }}>
                I make slow things fast and complex things simple.
              </h2>
              <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: 16, margin: "0 0 1rem" }}>
                I specialize in backend systems and infrastructure — the kind of work that's invisible when done well. I've shipped production systems handling millions of daily requests at companies ranging from early-stage startups to Series C.
              </p>
              <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: 16, margin: 0 }}>
                Currently looking for senior IC or tech lead roles where I can do deep technical work on hard problems with a thoughtful team.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.slateLight, letterSpacing: "0.1em", margin: "0 0 1.25rem" }}>CORE SKILLS</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" style={{ background: C.bg, padding: "120px 2rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Label>Featured Projects</Label>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "1rem 0 3rem", color: C.navy, lineHeight: 1.15 }}>
            Selected Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" style={{ background: C.bgAlt, padding: "120px 2rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Label>Experience</Label>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "1rem 0 3rem", color: C.navy, lineHeight: 1.15 }}>
            Where I've Worked
          </h2>
          {EXPERIENCE.map((e, i) => <ExperienceRow key={e.company} item={e} last={i === EXPERIENCE.length - 1} />)}
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" style={{ background: C.bg, padding: "120px 2rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Label>Contact</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", marginTop: 48, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 1rem", color: C.navy, lineHeight: 1.15 }}>
                Let's build something together.
              </h2>
              <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: 16, margin: "0 0 2.5rem" }}>
                I'm actively interviewing for senior backend and platform roles. If you have something interesting, I'd love to hear from you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <SocialLink href="https://github.com" icon={<GithubIcon />} label="github.com/alexkim" />
                <SocialLink href="https://linkedin.com" icon={<LinkedinIcon />} label="linkedin.com/in/alexkim" />
                <SocialLink href="mailto:alex@kim.dev" icon={<MailIcon />} label="alex@kim.dev" />
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ padding: "2.5rem", borderRadius: 12, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#16a34a", letterSpacing: "0.08em", marginBottom: 8 }}>MESSAGE SENT</div>
                  <p style={{ color: "#374151", fontSize: 15, margin: 0, lineHeight: 1.65 }}>Thanks for reaching out. I'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <Field label="Name" type="text" placeholder="Jane Smith" value={formState.name} onChange={(v) => setFormState((s) => ({ ...s, name: v }))} />
                  <Field label="Email" type="email" placeholder="jane@company.com" value={formState.email} onChange={(v) => setFormState((s) => ({ ...s, email: v }))} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.slateLight, letterSpacing: "0.08em" }}>MESSAGE</label>
                    <textarea rows={5} required placeholder="Tell me about the role or project..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", color: C.text, fontSize: 15, fontFamily: "'Inter', system-ui, sans-serif", resize: "vertical", outline: "none", transition: "border-color 0.18s" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = C.blue)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>
                  <button type="submit"
                    style={{ background: C.blue, color: C.white, border: "none", borderRadius: 8, padding: "14px 28px", fontSize: 15, fontWeight: 600, fontFamily: "'Inter', system-ui, sans-serif", cursor: "pointer", alignSelf: "flex-start", transition: "background 0.18s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.blue)}
                  >Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: C.bgNavy, padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#334155" }}>
          © 2026 Alex Kim — Built with React + Vite
        </span>
      </footer>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Label({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
      <div style={{ width: 3, height: 16, background: C.blue, borderRadius: 2 }} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.blue, letterSpacing: "0.12em" }}>
        {children.toUpperCase()}
      </span>
    </div>
  )
}

function Divider() {
  return <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}><div style={{ height: 1, background: C.border }} /></div>
}

function SkillBadge({ children }: { children: string }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-block", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, padding: "5px 12px", borderRadius: 6, border: hov ? `1px solid ${C.blue}` : `1px solid ${C.border}`, color: hov ? C.blue : C.slate, background: hov ? C.blueLight : C.bg, transition: "all 0.18s", cursor: "default" }}
    >{children}</span>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? C.bgAlt : C.bg, border: `1px solid ${hov ? C.borderMid : C.border}`, borderRadius: 12, padding: "2rem", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.2s", boxShadow: hov ? "0 4px 24px rgba(15,23,42,0.08)" : "none" }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: hov ? C.blue : C.slateLight, transition: "color 0.2s" }}>
          <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em", lineHeight: 1.3, color: C.navy }}>{project.title}</h3>
        <p style={{ fontSize: 14, color: C.textMuted, margin: 0, lineHeight: 1.65 }}>{project.description}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {project.stack.map((t) => (
          <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "3px 9px", borderRadius: 4, background: C.blueLight, color: C.navyMid, border: `1px solid #bfdbfe`, letterSpacing: "0.02em" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
        <a href={project.demo} style={{ fontSize: 13, color: C.blue, textDecoration: "none", fontWeight: 500, transition: "opacity 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>Live Demo ↗</a>
        <a href={project.source} style={{ fontSize: 13, color: C.slate, textDecoration: "none", fontWeight: 500, transition: "color 0.18s" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)} onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}>Source ↗</a>
      </div>
    </div>
  )
}

function ExperienceRow({ item, last }: { item: typeof EXPERIENCE[0]; last: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "3rem", padding: "2.5rem 0", borderBottom: last ? "none" : `1px solid ${C.border}` }}>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.slateLight, letterSpacing: "0.08em", marginBottom: 6 }}>{item.period}</div>
        <div style={{ fontSize: 14, color: C.textMuted, fontWeight: 500 }}>{item.company}</div>
      </div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 1rem", letterSpacing: "-0.01em", color: C.navy }}>{item.role}</h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {item.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
              <span style={{ color: C.blue, fontSize: 14, flexShrink: 0 }}>—</span>
              <span style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.65 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Field({ label, type, placeholder, value, onChange }: { label: string; type: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.slateLight, letterSpacing: "0.08em" }}>{label.toUpperCase()}</label>
      <input type={type} required placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}
        style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", color: C.text, fontSize: 15, fontFamily: "'Inter', system-ui, sans-serif", outline: "none", transition: "border-color 0.18s" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = C.blue)}
        onBlur={(e) => (e.currentTarget.style.borderColor = C.border)}
      />
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: C.textMuted, transition: "color 0.18s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)}
      onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
    >
      {icon}
      <span style={{ fontSize: 14 }}>{label}</span>
    </a>
  )
}

function GithubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
}

function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
}

function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>
}
