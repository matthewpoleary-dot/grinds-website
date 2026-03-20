import Link from "next/link";

export const metadata = {
  title: "Subjects | Matthew's Grinds",
  description: "One-to-one grinds for Leaving Certificate and Junior Cycle — French, Spanish, Biology, Maths, History, Science.",
};

export default function SubjectsPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">What I teach</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--ink)" }}>
            Choose a Level
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Select <strong style={{ color: "var(--ink)" }}>Leaving Certificate</strong> or{" "}
            <strong style={{ color: "var(--ink)" }}>Junior Cycle</strong> to see subjects and next steps.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
          {/* Leaving Certificate */}
          <div className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Leaving Certificate
              </h2>
              <span
                className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}
              >
                HL &amp; OL
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              French, Spanish, Biology, Maths, and History taught to SEC marking-scheme standards.
            </p>
            <ul className="space-y-2 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Exam Strategy:</strong> Timing plans, structured answers, key terms</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Languages:</strong> Oral &amp; aural prep, high-yield grammar</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Past Papers:</strong> Weekly practice with targeted feedback</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/lc" className="btn btn-outline text-sm px-4 py-2">Learn more</Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">Book now</Link>
            </div>
          </div>

          {/* Junior Cycle */}
          <div className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Junior Cycle
              </h2>
              <span
                className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "var(--amber-lite)", color: "var(--amber)" }}
              >
                Maths · Science · Languages
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              Build solid fundamentals and exam technique for CBAs and the final exam.
            </p>
            <ul className="space-y-2 text-sm flex-1" style={{ color: "var(--ink)" }}>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Core Skills:</strong> Methods for common problem types</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>CBA Support:</strong> Guidance, reflection prompts &amp; exemplars</span></li>
              <li className="flex gap-2"><span style={{ color: "var(--amber)" }}>→</span><span><strong>Languages:</strong> Speaking frames &amp; listening strategies</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/subjects/jc" className="btn btn-outline text-sm px-4 py-2">Learn more</Link>
              <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">Book now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDYWITH BENEFIT ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-14">
          <div className="card">
            <p className="label-section mb-2">Included with every session</p>
            <h3 className="font-display text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
              Access to StudyWith — my AI study tool
            </h3>
            <p className="text-sm max-w-2xl" style={{ color: "var(--ink-muted)" }}>
              Every student I work with gets access to StudyWith, an AI tutor I built myself.
              It guides you through problems by asking questions rather than giving answers — so you
              genuinely understand the material rather than just copy a solution. Designed to work
              between sessions so progress doesn&apos;t stop when the session does.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
