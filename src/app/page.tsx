import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--ink)" }}>
        <div className="container py-24 md:py-32">
          <p className="label-section mb-5" style={{ color: "var(--amber)" }}>
            Dublin &amp; Online · One-to-One Tuition
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight max-w-3xl text-white">
            Grinds that actually{" "}
            <em className="not-italic" style={{ color: "var(--amber)" }}>
              get results
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Personal one-to-one tuition for{" "}
            <strong className="text-white">Leaving Certificate</strong> and{" "}
            <strong className="text-white">Junior Cycle</strong> students. Clear explanations,
            structured practice, exam confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/subjects" className="btn btn-primary">
              View Subjects
            </Link>
            <Link
              href="/pricing"
              className="btn"
              style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "white", borderRadius: "9999px" }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREE AI CALLOUT ── */}
      <section style={{ backgroundColor: "var(--amber)", color: "var(--ink)" }}>
        <div className="container py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm font-semibold">
            🎓 Every student gets free access to <strong>StudyWith</strong> — an AI study tool I built myself.
          </p>
          <a
            href="https://studywith-phi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline underline-offset-2 shrink-0"
            style={{ color: "var(--ink)" }}
          >
            Try it free →
          </a>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="container mx-auto py-20">
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
              <span
                className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}
              >
                HL &amp; OL
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              French, Spanish, Biology, Mathematics, and History taught in line with SEC marking schemes.
            </p>
            <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Exam Strategy:</strong> Timing plans, structured answers, key terms</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Weekly Past Papers:</strong> Practice with targeted feedback</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Languages:</strong> Oral &amp; aural prep, high-yield grammar</span>
              </li>
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
              <span
                className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}
              >
                Maths · Science · Languages
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              Build strong fundamentals and exam technique for CBAs and final exams.
            </p>
            <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Core Skills:</strong> Methods for common problem types</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>CBA Support:</strong> Guidance, reflection prompts &amp; exemplars</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Languages:</strong> Speaking frames &amp; listening strategies</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/jc" className="btn btn-outline text-sm px-4 py-2">Learn More</Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <div className="mb-10 text-center">
            <p className="label-section mb-3">The process</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "var(--ink)" }}>
              How it works
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              { n: "01", t: "Diagnostic", d: "We map your strengths, gaps, and priorities and build a simple plan with quick wins." },
              { n: "02", t: "Learn by doing", d: "Clear explanation → worked example → timed question, just like on the actual paper." },
              { n: "03", t: "Feedback loop", d: "Targeted feedback and weekly tasks keep progress consistent and stress low." },
            ].map((s) => (
              <div key={s.n} className="card text-center">
                <p className="font-display text-3xl font-bold mb-3" style={{ color: "var(--amber)" }}>{s.n}</p>
                <h3 className="font-semibold mb-2" style={{ color: "var(--ink)" }}>{s.t}</h3>
                <p className="text-sm" style={{ color: "var(--ink-muted)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="container py-16">
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
      </section>
    </div>
  );
}
