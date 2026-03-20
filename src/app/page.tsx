import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-24 md:py-32">
          <p className="label-section mb-5">Dublin &amp; Online · One-to-One Tuition</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight max-w-3xl" style={{ color: "var(--ink)" }}>
            Grinds that actually{" "}
            <em className="not-italic" style={{ color: "var(--amber)" }}>
              get results
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            Personal one-to-one tuition for{" "}
            <strong style={{ color: "var(--ink)" }}>Leaving Certificate</strong> and{" "}
            <strong style={{ color: "var(--ink)" }}>Junior Cycle</strong> students. Clear explanations,
            structured practice, exam confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/subjects" className="btn btn-primary">View Subjects</Link>
            <Link href="/pricing" className="btn btn-outline">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <p className="label-section mb-3">What I offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: "var(--ink)" }}>
            Programmes
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: "var(--ink-muted)" }}>
            Targeted support tailored to each stage, with clear plans and measurable progress.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Leaving Certificate */}
          <div className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Leaving Certificate
              </h3>
              <span className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}>
                HL &amp; OL
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              French, Spanish, Biology, Mathematics, and History taught in line with SEC marking schemes.
            </p>
            <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Exam Strategy:</strong> Timing plans, structured answers, key terms</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Weekly Past Papers:</strong> Practice with targeted feedback</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Languages:</strong> Oral &amp; aural prep, high-yield grammar</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/lc" className="btn btn-outline text-sm px-4 py-2">Learn More</Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">Book Now</Link>
            </div>
          </div>

          {/* Junior Cycle */}
          <div className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Junior Cycle
              </h3>
              <span className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}>
                Maths · Science · Languages
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              Build strong fundamentals and exam technique for CBAs and final exams.
            </p>
            <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Core Skills:</strong> Methods for common problem types</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>CBA Support:</strong> Guidance, reflection prompts &amp; exemplars</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Languages:</strong> Speaking frames &amp; listening strategies</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/jc" className="btn btn-outline text-sm px-4 py-2">Learn More</Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDYWITH BENEFIT ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center max-w-4xl">
            <div>
              <p className="label-section mb-3">Included with every session</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--ink)" }}>
                Access to my AI study tool, StudyWith
              </h2>
              <p className="text-base mb-3" style={{ color: "var(--ink-muted)" }}>
                Every student I work with gets access to StudyWith — an AI tutor I built myself.
                Unlike tools that just give you answers, StudyWith asks you questions to guide your
                thinking, so you genuinely understand the material rather than copy a solution.
              </p>
              <p className="text-base" style={{ color: "var(--ink-muted)" }}>
                It&apos;s designed to work between sessions — paste in any problem and work through
                it step by step, building real understanding that shows up in exams.
              </p>
            </div>
            <div className="card">
              <p className="label-section mb-3">How it works</p>
              <ul className="space-y-4 text-sm" style={{ color: "var(--ink)" }}>
                {[
                  { t: "Paste your question", d: "Any subject, any topic — homework, past papers, anything." },
                  { t: "Get guided, not given", d: "Instead of an answer, it asks what you already know and builds from there." },
                  { t: "Reach the answer yourself", d: "You arrive at the solution with real understanding, not just a copied response." },
                ].map((s) => (
                  <li key={s.t} className="flex gap-3">
                    <span style={{ color: "var(--amber)" }} className="mt-0.5">→</span>
                    <div>
                      <strong style={{ color: "var(--ink)" }}>{s.t}:</strong>{" "}
                      <span style={{ color: "var(--ink-muted)" }}>{s.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="container py-16">
        <div className="mb-10 text-center">
          <p className="label-section mb-3">The process</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "var(--ink)" }}>
            How it works
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {[
            { n: "01", t: "Diagnostic", d: "We map your strengths, gaps, and priorities and build a simple plan with quick wins." },
            { n: "02", t: "Learn by doing", d: "Clear explanation, worked example, timed question. Just like on the actual paper." },
            { n: "03", t: "Feedback loop", d: "Targeted feedback and weekly tasks keep progress consistent and stress low." },
          ].map((s) => (
            <div key={s.n} className="card text-center">
              <p className="font-display text-3xl font-bold mb-3" style={{ color: "var(--amber)" }}>{s.n}</p>
              <h3 className="font-semibold mb-2" style={{ color: "var(--ink)" }}>{s.t}</h3>
              <p className="text-sm" style={{ color: "var(--ink-muted)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div className="max-w-xl">
              <p className="label-section mb-3">Free consultation</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "var(--ink)" }}>
                Not sure where to start?
              </h3>
              <p className="mt-3 text-base" style={{ color: "var(--ink-muted)" }}>
                Book a 15-minute consultation to map out your goals and select the best plan.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0 text-sm px-7 py-3">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
