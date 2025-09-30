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
    <div className="grid gap-10">
      {/* Hero */}
      <section className="rounded-2xl border bg-gradient-to-b from-blue-50 to-white p-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Junior Cycle
            </h1>
            <p className="mt-3 max-w-2xl text-slate-700">
              Strong fundamentals and exam technique for CBAs and the final exam.
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

            {/* Constant skills card */}
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-medium text-slate-900">Study skills</h3>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
                <li>Notes & checklists that actually get used</li>
                <li>Practice questions with model answers</li>
                <li>Exam language and timing practice</li>
                <li>CBA preparation & reflection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How the plan works</h2>
          <ol className="mt-4 space-y-3 text-slate-700">
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">1</span> Quick diagnostic & goals</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">2</span> Weekly topics + short practices</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">3</span> Feedback and fixes the same week</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">4</span> Confidence + timing for exams</li>
          </ol>

          <div className="mt-6 rounded-xl border bg-blue-50 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-blue-800">Tip:</span> JC improves fastest with regular short sessions — consider a 5-pack.
            </p>
            <Link href="/pricing" className="mt-3 inline-flex text-sm text-blue-700 hover:underline">
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
