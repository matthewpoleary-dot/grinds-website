import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&q=80&w=1920&fit=crop')",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,18,8,0.72)" }} />
        </div>

        <div className="relative z-10 container flex flex-col items-start justify-center min-h-[80vh] py-20">
          <p className="label-section mb-5" style={{ color: "var(--amber)" }}>
            Dublin &amp; Online · One-to-One Tuition
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight max-w-3xl text-white"
          >
            Grinds that actually{" "}
            <em className="not-italic" style={{ color: "var(--amber)" }}>
              get results
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
            Personal one-to-one tuition for{" "}
            <strong className="text-white">Leaving Certificate</strong>,{" "}
            <strong className="text-white">Junior Cycle</strong> and{" "}
            <strong className="text-white">Primary</strong> students — clear explanations, structured
            practice, exam confidence.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/subjects" className="btn btn-primary">
              View Subjects
            </Link>
            <Link
              href="/pricing"
              className="btn btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              See Pricing
            </Link>
          </div>
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

        <div className="grid gap-6 sm:grid-cols-3">
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
                <span><strong>Exam Strategy:</strong> Timing Plans, Structured Answers, Key Terms</span>
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
              <Link href="/subjects/lc" className="btn btn-outline text-sm px-4 py-2">
                Learn More
              </Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">
                Book Now
              </Link>
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
                <span><strong>Languages:</strong> Practical speaking frames &amp; listening strategies</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Study Habits:</strong> Notes, checklists, and regular short practice</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/jc" className="btn btn-outline text-sm px-4 py-2">
                Learn More
              </Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">
                Book Now
              </Link>
            </div>
          </div>

          {/* Primary */}
          <div className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Primary
              </h3>
              <span
                className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}
              >
                Literacy · Numeracy
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              Gentle, confidence-building sessions that strengthen core skills and homework routines.
            </p>
            <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Literacy:</strong> Phonics, reading fluency, comprehension &amp; writing</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Numeracy:</strong> Number sense, operations &amp; problem-solving</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--amber)" }}>→</span>
                <span><strong>Parent Updates:</strong> Brief notes after sessions &amp; clear next steps</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/primary" className="btn btn-outline text-sm px-4 py-2">
                Learn More
              </Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">
                Book Now
              </Link>
            </div>
          </div>
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
