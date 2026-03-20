import Link from "next/link";

export const metadata = {
  title: "About | Matthew's Grinds",
  description:
    "Personalised grinds for Leaving Certificate, Junior Cycle & Primary. By a Trinity College Dublin student — clear explanations, structured practice, exam confidence.",
};

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">Your tutor</p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            About Matthew
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
            I&apos;m a Trinity College Dublin student (Business &amp; Computer Science, Joint Honours)
            offering personalised grinds for Leaving Certificate, Junior Cycle, and Primary students —
            online or in person across Dublin.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              View Prices
            </Link>
            <Link href="/subjects" className="btn btn-outline">
              Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* ── SNAPSHOT CARDS ── */}
      <section className="container py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "Approach", v: "Clarity · Practice · Feedback" },
            { k: "Format", v: "Online or in person (Dublin)" },
            { k: "Levels", v: "Leaving Cert · Junior Cycle · Primary" },
          ].map((i) => (
            <div key={i.k} className="card">
              <p className="label-section mb-2">{i.k}</p>
              <p className="font-display text-lg font-semibold" style={{ color: "var(--ink)" }}>
                {i.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO I AM ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <div className="max-w-2xl">
            <p className="label-section mb-4">Who I am</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--ink)" }}>
              What I do differently
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--ink-muted)" }}>
              My teaching style is calm and structured. I simplify each idea, practise exam techniques,
              and build momentum with small weekly wins.
            </p>
            <ul className="space-y-5">
              {[
                {
                  title: "Clarity before content",
                  desc: "Short explanations, simple methods, and the why behind each topic.",
                },
                {
                  title: "Exam-first practice",
                  desc: "Focus on marking schemes, time management, and repeatable steps.",
                },
                {
                  title: "Steady accountability",
                  desc: "Weekly checklists so progress compounds without cramming.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 text-lg" style={{ color: "var(--amber)" }}>→</span>
                  <div>
                    <strong className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                      {item.title}:
                    </strong>{" "}
                    <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="container py-16">
        <p className="label-section mb-4">How it works</p>
        <h2
          className="font-display text-2xl sm:text-3xl font-bold mb-10"
          style={{ color: "var(--ink)" }}
        >
          My approach
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "1 — Diagnostic",
              d: "We map strengths, gaps, and priorities. You get a simple plan with quick wins.",
            },
            {
              t: "2 — Learn by doing",
              d: "Clear explanation → worked example → timed question, just like on the paper.",
            },
            {
              t: "3 — Feedback loop",
              d: "Targeted feedback and weekly tasks keep progress consistent and stress low.",
            },
          ].map((c) => (
            <div key={c.t} className="card">
              <h3
                className="font-display text-lg font-semibold mb-3"
                style={{ color: "var(--amber)" }}
              >
                {c.t}
              </h3>
              <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBJECTS TEASER ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-14">
          <div
            className="card flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <p className="label-section mb-2">Subjects &amp; levels</p>
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                LC · JC · Primary
              </h2>
              <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--ink-muted)" }}>
                I support LC, JC, and Primary across core subjects. We adapt content to your syllabus,
                level, and current ability. If your exact topic isn&apos;t listed, just ask.
              </p>
            </div>
            <Link href="/subjects" className="btn btn-outline shrink-0">
              Explore Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container py-16">
        <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
              Ready to make consistent progress?
            </h3>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
              Book a quick chat and let&apos;s build a study plan that works for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              View Prices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
