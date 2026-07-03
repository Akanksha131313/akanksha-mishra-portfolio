import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroPortrait from "@/assets/hero-portrait.png";
import projectBank from "@/assets/project-bank.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import {
  Award, Download, Mail, Linkedin, Github, MapPin, Send,
  Database, BarChart3, LineChart, Wrench,
  Briefcase, GraduationCap, BadgeCheck, ExternalLink, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

const EMAIL = "akankshamishra1302003@gmail.com";
const LINKEDIN = "https://linkedin.com/in/akankshamishra13";
const GITHUB = "https://github.com/Akanksha131313";

function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
  ];
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1200px,94%)]">
      <nav className="flex items-center justify-between rounded-full bg-card/95 px-6 py-3 shadow-float backdrop-blur">
        <a href="#home" className="text-xl font-extrabold text-navy">Akanksha<span className="text-primary">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-navy/70 transition hover:text-navy">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-float transition hover:opacity-90">
          Contact Me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10">
      <div className="mx-auto grid w-[min(1200px,94%)] grid-cols-1 items-center gap-10 rounded-[2.5rem] bg-gradient-hero px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-xs font-semibold text-navy shadow-float">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Open to Relocate – PAN India
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.05] text-navy md:text-7xl">
            Hey! I am Akanksha Mishra
          </h1>
          <h2 className="mt-4 text-xl font-bold text-navy md:text-2xl">
            Data Analyst | SQL | Python | Power BI | Tableau | Advanced Excel | Data Science (IIT Roorkee)
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/90 md:text-lg">
            Data Analyst with an Executive PG Certification in Data Science & Artificial Intelligence from IIT Roorkee, skilled in SQL, Python, Power BI, Tableau, PostgreSQL and Advanced Excel. Passionate about transforming raw data into actionable business insights through ETL, KPI dashboards, business intelligence and analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-float transition hover:opacity-90">
              View Projects
            </a>
            <a
              href="/Akanksha_Mishra_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/10 bg-card px-7 py-3.5 text-sm font-bold text-navy shadow-float transition hover:border-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-10 top-6 h-3 w-3 rounded-full border-2 border-primary" />
          <div className="absolute left-6 top-24 h-4 w-4 rounded-full border-2 border-navy" />
          <div className="absolute bottom-8 left-2 text-primary"><Sparkles className="h-6 w-6" /></div>
          <img
            src={heroPortrait}
            alt="Illustration of Akanksha Mishra, data analyst, surrounded by dashboards"
            width={1024}
            height={1024}
            className="relative z-10 mx-auto w-full max-w-[480px]"
          />
          <div className="absolute -left-2 top-10 z-20 hidden items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Database className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-bold text-navy">Advanced SQL</div>
              <div className="text-xs text-muted-foreground">CTEs · Window Fns</div>
            </div>
          </div>
          <div className="absolute -right-2 bottom-16 z-20 hidden items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-navy"><Award className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-bold text-navy">IIT Roorkee</div>
              <div className="text-xs text-muted-foreground">Certified · 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="mx-auto mt-10 w-[min(1200px,94%)]">
        <p className="text-sm font-bold tracking-wide text-navy">Tools I Work With Every Day</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {["SQL", "Python", "Power BI", "Tableau", "Excel", "PostgreSQL", "DAX", "Jupyter", "GitHub"].map((t) => (
            <span key={t} className="rounded-full bg-card px-5 py-2 text-sm font-semibold text-navy shadow-float">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Summary() {
  const stats = [
    { value: "300K+", label: "Records Analyzed" },
    { value: "4", label: "End-to-End Analytics Projects" },
    { value: "4", label: "Professional Certifications" },
    { value: "Open to Relocate", label: "PAN India" },
  ];
  return (
    <section className="mx-auto mt-24 w-[min(1200px,94%)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">About</span>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Professional<br /><span className="text-primary">Summary</span></h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Data Analyst with an Executive PG Certification in Data Science & Artificial Intelligence from IIT Roorkee and a BBA (Finance) background. Proficient in SQL, Python, Power BI, Tableau, PostgreSQL and Advanced Excel with hands-on experience analyzing datasets up to 300,000+ records across finance, telecom, retail and marketing domains. Skilled in ETL, data cleaning, exploratory data analysis (EDA), data modeling, KPI development, MIS reporting and business intelligence to deliver actionable insights that support data-driven decision-making.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl bg-card p-6 shadow-card">
            <div className="text-3xl font-extrabold text-primary md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    {
      icon: Database, title: "Programming & Databases",
      items: ["SQL", "PostgreSQL", "Python"],
    },
    {
      icon: BarChart3, title: "Business Intelligence",
      items: ["Power BI", "Tableau", "Advanced Excel", "Power Query", "DAX"],
    },
    {
      icon: LineChart, title: "Data Analytics",
      items: ["ETL", "Data Cleaning", "Data Validation", "Exploratory Data Analysis (EDA)", "Data Modeling", "Feature Engineering", "KPI Development", "SQL Query Optimization", "Root Cause Analysis", "Financial Analytics", "Customer Analytics", "Business Intelligence"],
    },
    {
      icon: Sparkles, title: "Machine Learning",
      items: ["Classification", "Regression", "Model Evaluation"],
    },
    {
      icon: Wrench, title: "Tools",
      items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab"],
    },
  ];
  return (
    <section id="skills" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Toolkit</span>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">My<br /><span className="text-primary">Skills</span></h2>
        </div>
        <p className="text-muted-foreground">
          A blend of querying, visualization, machine learning and analytical thinking — the full stack a modern data analyst needs to ship insight.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="group rounded-3xl bg-gradient-card p-[2px] shadow-card transition hover:-translate-y-1">
            <div className="h-full rounded-[1.75rem] bg-card p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <g.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy/80">{i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const sims = [
    {
      org: "Deloitte (Forage)", role: "Data Analyst Simulation", date: "Mar 2026",
      bullets: [
        "Analyzed IoT telemetry datasets to identify downtime patterns and inefficiencies.",
        "Performed data cleaning, validation and transformation for reporting accuracy.",
        "Optimized reporting workflows, cutting manual dependency.",
        "Applied ETL and statistical techniques for scalable analysis.",
      ],
    },
    {
      org: "Tata Group (Forage)", role: "Data Visualization Simulation", date: "Mar 2026",
      bullets: [
        "Built KPI dashboards in Power BI and Tableau to monitor business performance.",
        "Produced 20+ insights enhancing visibility into revenue and customer trends.",
        "Translated business requirements into clear visual analytics for stakeholders.",
      ],
    },
  ];
  return (
    <section id="experience" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Virtual Experience</span>
        <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Industry <span className="text-primary">Simulations</span></h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {sims.map((s) => (
          <div key={s.org} className="rounded-3xl bg-card p-8 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Briefcase className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-extrabold leading-tight">{s.role}</h3>
                  <p className="text-sm font-semibold text-primary">{s.org}</p>
                </div>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-navy">{s.date}</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Bank Loan Performance & Risk Analysis",
      date: "Nov 2024 – Mar 2025",
      bg: projectBank,
      technologies: ["SQL", "Python", "Power BI", "Tableau"],
      problem: "High default risk and unclear portfolio quality were delaying credit decisions.",
      solution: "Built ETL pipelines, risk dashboards and customer segmentation models.",
      kpis: "38,000+ loan records · Default rate · DTI · Portfolio quality",
      impact: "Enabled faster risk assessment and identification of high-risk segments.",
    },
    {
      title: "Retail Customer Analytics & Purchase Trends",
      date: "Mar 2025 – May 2025",
      bg: projectRetail,
      technologies: ["Python", "PostgreSQL", "Power BI"],
      problem: "Low repeat-purchase visibility and poor customer segmentation were limiting growth.",
      solution: "Segmented customers, analyzed purchase patterns and built KPI dashboards.",
      kpis: "3,900+ transactions · CTEs · Window Functions · RFM segmentation",
      impact: "Improved customer targeting and repeat-purchase strategy.",
    },
    {
      title: "Marketing Campaign Performance (Meta Ads)",
      date: "Jun 2025 – Jul 2025",
      bg: projectMarketing,
      technologies: ["Power BI", "DAX", "Data Modeling"],
      problem: "Unclear ROI and budget allocation across Meta campaigns were hurting conversions.",
      solution: "Designed a star-schema model and campaign performance dashboards.",
      kpis: "300K+ impressions · 40K+ clicks · Star schema · Conversion rate",
      impact: "Refined budget allocation toward top-converting campaigns.",
    },
  ];
  return (
    <section id="projects" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</span>
        <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Recent <span className="text-primary">Projects</span></h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative h-[480px] overflow-hidden rounded-3xl shadow-card transition hover:-translate-y-1"
          >
            <img
              src={p.bg}
              alt=""
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/80 to-navy/30" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <h3 className="text-lg font-extrabold text-white md:text-xl">{p.title}</h3>

              <div className="mt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">Key Technologies</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.technologies.map((s) => (
                    <span key={s} className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-1.5 text-xs leading-snug text-white/85">
                <p><span className="font-bold text-white">Business Problem:</span> {p.problem}</p>
                <p><span className="font-bold text-white">Solution:</span> {p.solution}</p>
                <p><span className="font-bold text-white">Key KPIs:</span> {p.kpis}</p>
                <p><span className="font-bold text-white">Business Impact:</span> {p.impact}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/60">{p.date}</span>
                <a
                  href={GITHUB}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                >
                  View on GitHub <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    {
      school: "IIT Roorkee",
      degree: "Executive PG Certification in Data Science & AI",
      date: "2024 – 2025",
    },
    {
      school: "CCS University",
      degree: "Bachelor of Business Administration (Finance)",
      date: "2021 – 2024",
    },
  ];
  return (
    <section id="education" className="mx-auto mt-28 w-[min(1200px,94%)]">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Academics</span>
        <h2 className="mt-2 text-4xl font-extrabold md:text-5xl"><span className="text-primary">Education</span></h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {edu.map((e) => (
          <div key={e.school} className="flex items-start gap-5 rounded-3xl bg-card p-6 shadow-card">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-white">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold">{e.school}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{e.degree}</p>
              <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-navy">{e.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { name: "Data Analytics Job Simulation", org: "Deloitte (Forage)", date: "Mar 2026" },
    { name: "Data Visualization", org: "Tata Group (Forage)", date: "Mar 2026" },
    { name: "Executive PG in Data Science & AI", org: "IIT Roorkee", date: "2025" },
    { name: "Microsoft SQL Certification", org: "Intellipaat", date: "2025" },
  ];
  return (
    <section className="mx-auto mt-28 w-[min(1200px,94%)]">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Credentials</span>
        <h2 className="mt-2 text-4xl font-extrabold md:text-5xl"><span className="text-primary">Certifications</span></h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
        {certs.map((c) => (
          <div key={c.name} className="rounded-3xl bg-card p-6 text-center shadow-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-sm font-extrabold leading-tight">{c.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
            <span className="mt-3 inline-block text-[11px] font-bold text-primary">{c.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\nFrom: ${fd.get("name")} <${fd.get("email")}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto mt-28 mb-16 w-[min(1200px,94%)]">
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-hero px-6 py-14 md:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Let's Talk</span>
            <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Ready to turn data into<br /><span className="text-primary">decisions?</span></h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              I'm open to Data Analyst, Business Analyst and BI roles across PAN India. Drop a message — I reply within a day.
            </p>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-float"><Mail className="h-4 w-4 text-primary" /></span>
                {EMAIL}
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-float"><Linkedin className="h-4 w-4 text-primary" /></span>
                linkedin.com/in/akankshamishra13
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-float"><Github className="h-4 w-4 text-primary" /></span>
                github.com/Akanksha131313
              </a>
              <div className="flex items-center gap-3 text-sm font-semibold text-navy">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-float"><MapPin className="h-4 w-4 text-primary" /></span>
                Delhi, India · +91-7982840649
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-card p-7 shadow-card">
            <h3 className="text-xl font-extrabold">Send a message</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-bold text-navy/70" htmlFor="name">Full Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs font-bold text-navy/70" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs font-bold text-navy/70" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-float transition hover:opacity-90">
                <Send className="h-4 w-4" /> {sent ? "Opening your mail app…" : "Let's Connect"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Akanksha Mishra. Crafted with data & care.</p>
        <div className="flex items-center gap-4">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary"><Github className="h-4 w-4" /></a>
          <a href={`mailto:${EMAIL}`} className="hover:text-primary"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
