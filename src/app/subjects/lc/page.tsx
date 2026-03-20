"use client";

import Link from "next/link";
import { useState } from "react";

type SubjectKey = "French" | "Spanish" | "Biology" | "Maths" | "History";

const SUBJECTS: Record<SubjectKey, { bullets: string[] }> = {
  French: {
    bullets: [
      "Oral exam: picture sequences, role plays, opinion questions",
      "Aural strategies: note-taking & key-word spotting",
      "Written expression: opinion pieces, emails, narratives",
      "Grammar clinic: tenses, agreement, pronouns, connectors",
      "Past papers with marking-scheme language",
    ],
  },
  Spanish: {
    bullets: [
      "Oral practice: fluency, spontaneity, and pronunciation",
      "Listening: traps, numbers, dates, and gist techniques",
      "Writing: cartas/correos, opinions, narratives with structure",
      "Core grammar: preterite vs imperfect, subjunctive basics",
      "Topic vocab packs + retrieval practice",
    ],
  },
  Biology: {
    bullets: [
      "Mandatory experiments & how to write them for marks",
      "Definitions & key terms banks per chapter",
      "Short-Q patterns + long-Q structure by topic",
      "Diagrams that commonly appear and how to label fast",
      "Topic checklist + past Q rotation",
    ],
  },
  Maths: {
    bullets: [
      "Paper structure & timing plans (HL/OL)",
      "Typical traps per section with model methods",
      "Algebra routines, functions & calculus (HL focus)",
      "Vectors, probability, stats — common question styles",
      "Past Qs by topic with worked solutions",
    ],
  },
  History: {
    bullets: [
      "DBQ/documents Qs: sourcing, bias, context — fast templates",
      "Essays: planning, paragraph structure, signposting",
      "Key personalities & case studies — what examiners expect",
      "Timing plans for long answers vs. short Qs",
      "Research & revision map for mocks and June",
    ],
  },
};

export default function LeavingCertPage() {
  const [active, setActive] = useState<SubjectKey>("French");
  const pills: SubjectKey[] = ["French", "Spanish", "Biology", "Maths", "History"];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">Level</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--ink)" }}>
            Leaving Certificate{" "}
            <span className="text-2xl font-normal" style={{ color: "var(--ink-muted)" }}>
              HL &amp; OL
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Focused preparation aligned to SEC marking schemes — timing, structure, and efficient revision.
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
          {/* Subject detail + strategy */}
          <div className="lg:col-span-2 card">
            <h2 className="font-display text-xl font-bold mb-5" style={{ color: "var(--ink)" }}>
              What we cover — {active}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "var(--cream-alt)" }}
              >
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

              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "var(--cream-alt)" }}
              >
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--ink)" }}>Skills &amp; strategy</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {[
                    "Marking-scheme language + structured answers",
                    "Timing plans per paper and section",
                    "Active recall & spaced repetition checklists",
                    "Past papers weekly with precise feedback",
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
                "Diagnostic chat → goals & weak topics",
                "Weekly plan with topic targets",
                "Practice + feedback mapped to marking scheme",
                "Exam-timed drills and confidence building",
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

            <div
              className="rounded-xl p-4 text-sm"
              style={{ backgroundColor: "var(--amber-lite)" }}
            >
              <p style={{ color: "var(--ink)" }}>
                <strong>Tip:</strong> Most LC students do a 5-pack to lock in a rhythm before mocks.
              </p>
              <Link
                href="/pricing"
                className="mt-2 inline-flex font-medium text-sm"
                style={{ color: "var(--amber)" }}
              >
                See recommended packs →
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
