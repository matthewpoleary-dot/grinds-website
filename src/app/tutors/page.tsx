// app/about/page.tsx
import Link from "next/link";

export const metadata = {
  title: "About | Grinds by Matthew",
  description:
    "Personalised grinds for Leaving Certificate, Junior Cycle & Primary. By a Trinity College Dublin student — clear explanations, structured practice, exam confidence.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-50 text-slate-900">
      {/* HERO */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-blue-700 md:text-5xl">
            About Matthew
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            I’m a Trinity College Dublin student (Business & Computer Science,
            Joint Honours) offering personalised grinds for Leaving Certificate,
            Junior Cycle, and Primary students. I offer grinds online or in person across
            Dublin.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
            >
              Contact me
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-50"
            >
              View prices
            </Link>
            <Link
              href="/subjects"
              className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-50"
            >
              Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* SNAPSHOT CARDS */}
      <section className="mx-auto max-w-6xl px-4 -mt-8 pb-8 md:-mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "Approach", v: "Clarity · Practice · Feedback" },
            { k: "Format", v: "Online or in person (Dublin)" },
            { k: "Levels", v: "Leaving Cert · Junior Cycle · Primary" },
          ].map((i) => (
            <div
              key={i.k}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
            >
              <div className="text-sm text-blue-600">{i.k}</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                {i.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO I AM */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700">Who I am</h2>
          <p className="mt-3 text-slate-700">
            My teaching style is calm and structured. I simplify each idea,
            practise exam techniques, and build momentum with small weekly wins.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-blue-700">
            What I do differently
          </h3>
          <ul className="mt-3 space-y-3 text-slate-700">
            <li>
              <span className="font-medium text-blue-600">Clarity before content:</span>{" "}
              short explanations, simple methods, and the why behind each topic.
            </li>
            <li>
              <span className="font-medium text-blue-600">Exam-first practice:</span>{" "}
              focus on marking schemes, time management, and repeatable steps.
            </li>
            <li>
              <span className="font-medium text-blue-600">Steady accountability:</span>{" "}
              weekly checklists so progress compounds without cramming.
            </li>
          </ul>
        </div>
      </section>

      {/* APPROACH CARDS */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700">My approach</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "1) Diagnostic",
                d: "We map strengths, gaps, and priorities. You get a simple plan with quick wins.",
              },
              {
                t: "2) Learn by doing",
                d: "Clear explanation → worked example → timed question, just like on the paper.",
              },
              {
                t: "3) Feedback loop",
                d: "Targeted feedback and weekly tasks keep progress consistent and stress low.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-medium text-blue-600">{c.t}</h3>
                <p className="mt-2 text-slate-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS & LEVELS */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700">Subjects & levels</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                I support LC, JC, and Primary across core subjects. We adapt
                content to your syllabus, level, and current ability. If your
                exact topic isn’t listed, just ask.
              </p>
            </div>
            <Link
              href="/subjects"
              className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-blue-700 shadow-sm hover:bg-blue-50"
            >
              Explore subjects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-blue-100 bg-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Ready to make consistent progress?
              </h3>
              <p className="mt-1 text-slate-700">
                Book a quick chat and let’s build a study plan that works for you.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Contact me
              </Link>
              <Link
                href="/pricing"
                className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-50"
              >
                View prices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
