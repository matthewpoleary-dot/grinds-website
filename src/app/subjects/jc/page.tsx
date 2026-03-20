"use client";

import Link from "next/link";
import { useState } from "react";

type SubjectKey = "Maths" | "Science" | "French" | "Spanish";

const SUBJECTS: Record<SubjectKey, { bullets: string[] }> = {
  Maths: {
    bullets: [
      "Methods for common problem types + worked examples",
      "Timing plans, calculator tips, and neat layout",
      "Topic rotation: algebra, functions, probability, geometry",
      "Past questions with fast marking guides",
    ],
  },
  Science: {
    bullets: [
      "Experiments: how to write method, results, conclusion",
      "Key definitions & diagrams that score",
      "Short-Q strategies vs longer structured answers",
      "CBA support and reflection prompts",
    ],
  },
  French: {
    bullets: [
      "Core vocab packs + retrieval practice",
      "Speaking frames for everyday topics",
      "Listening strategies and common traps",
      "Writing basics: emails, notes, short messages",
    ],
  },
  Spanish: {
    bullets: [
      "High-use vocab + phrases for speaking",
      "Listening numbers/dates + gist vs detail",
      "Grammar foundations: present, preterite, future",
      "Short writings with templates",
    ],
  },
};

export default function JuniorCyclePage() {
  const [active, setActive] = useState<SubjectKey>("Maths");
  const pills: SubjectKey[] = ["Maths", "Science", "French", "Spanish"];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">Level</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--ink)" }}>
            Junior Cycle
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Strong fundamentals and exam technique for CBAs and the final exam.
          </p>

          {/* Subject pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((p) => (
              <button
                key={p}
                onClick={() => setActive(p)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-all"
                style={
                  p === active
                    ? { backgroundColor: "var(--ink)", color: "white" }
                    : { border: "1.5px solid rgba(26,26,26,0.2)", color: "var(--ink-muted)", backgroundColor: "transparent" }
                }
                aria-pressed={p === active}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="container py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Subject detail + skills */}
          <div className="lg:col-span-2 card">
            <h2 className="font-display text-xl font-bold mb-5" style={{ color: "var(--ink)" }}>
              What we cover — {active}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl p-5" style={{ backgroundColor: "var(--cream-alt)" }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--ink)" }}>{active}</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {SUBJECTS[active].bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span style={{ color: "var(--amber)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "var(--cream-alt)" }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--ink)" }}>Study skills</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {[
                    "Notes & checklists that actually get used",
                    "Practice questions with model answers",
                    "Exam language and timing practice",
                    "CBA preparation & reflection",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <span style={{ color: "var(--amber)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Plan sidebar */}
          <div className="card flex flex-col gap-5">
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
              How the plan works
            </h2>
            <ol className="space-y-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              {[
                "Quick diagnostic & goals",
                "Weekly topics + short practices",
                "Feedback and fixes the same week",
                "Confidence + timing for exams",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 items-start">
                  <span
                    className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--amber)" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: "var(--amber-lite)" }}>
              <p style={{ color: "var(--ink)" }}>
                <strong>Tip:</strong> JC improves fastest with regular short sessions — consider a 5-pack.
              </p>
              <Link
                href="/pricing"
                className="mt-2 inline-flex font-medium text-sm"
                style={{ color: "var(--amber)" }}
              >
                See pricing →
              </Link>
            </div>

            <Link href="/contact" className="btn btn-primary text-sm">
              Book a session
            </Link>
          </div>
        </div>
      </section>

      {/* ── STUDYWITH BENEFIT ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-12">
          <div className="card">
            <p className="label-section mb-2">Included with every session</p>
            <h3 className="font-display text-lg font-bold mb-2" style={{ color: "var(--ink)" }}>
              Access to StudyWith — my AI study tool
            </h3>
            <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
              Every student I work with gets access to StudyWith, an AI tutor I built myself.
              It guides you through problems by asking questions rather than giving answers — so
              you genuinely understand the material between sessions, not just copy a solution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
