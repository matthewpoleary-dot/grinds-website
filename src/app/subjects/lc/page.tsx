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
    <div className="grid gap-10">
      {/* Hero */}
      <section className="rounded-2xl border bg-gradient-to-b from-blue-50 to-white p-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Leaving Certificate <span className="text-slate-500 text-2xl">(HL & OL)</span>
            </h1>
            <p className="mt-3 max-w-2xl text-slate-700">
              Focused preparation aligned to SEC marking schemes — timing, structure, and efficient revision.
            </p>

            {/* Subject pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {pills.map((p) => {
                const selected = p === active;
                return (
                  <button
                    key={p}
                    onClick={() => setActive(p)}
                    className={[
                      "rounded-full border px-3 py-1 text-sm shadow-sm transition",
                      selected
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-700 hover:border-blue-400",
                    ].join(" ")}
                    aria-pressed={selected}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          <Link href="/book" className="btn btn-primary">Book a consult</Link>
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Left: What we cover (changes by subject) */}
        <div className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">What we cover — {active}</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Active subject detail */}
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-medium text-slate-900">{active}</h3>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
                {SUBJECTS[active].bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Constant strategy card */}
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-medium text-slate-900">Skills & strategy</h3>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
                <li>Marking-scheme language + structured answers</li>
                <li>Timing plans per paper and section</li>
                <li>Active recall & spaced repetition checklists</li>
                <li>Past papers weekly with precise feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How the plan works</h2>
          <ol className="mt-4 space-y-3 text-slate-700">
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">1</span> Diagnostic chat → goals & weak topics</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">2</span> Weekly plan with topic targets</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">3</span> Practice + feedback mapped to marking scheme</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">4</span> Exam-timed drills and confidence building</li>
          </ol>

          <div className="mt-6 rounded-xl border bg-blue-50 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-blue-800">Tip:</span> Most LC students do a 5-pack to lock in a rhythm before mocks.
            </p>
            <Link href="/pricing" className="mt-3 inline-flex text-sm text-blue-700 hover:underline">
              See recommended packs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
