import Link from "next/link";

export default function PrimaryPage() {
  return (
    <div className="grid gap-10">
      {/* Hero */}
      <section className="rounded-2xl border bg-gradient-to-b from-blue-50 to-white p-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Primary
            </h1>
            <p className="mt-3 max-w-2xl text-slate-700">
              Gentle, supportive sessions to build confidence in literacy and numeracy.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Literacy", "Numeracy", "Homework support"].map((t) => (
                <span key={t} className="rounded-full bg-white border px-3 py-1 text-sm text-slate-700 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Link href="/book" className="btn btn-primary">Book a consult</Link>
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Card: Focus */}
        <div className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">What we focus on</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-medium text-slate-900">Literacy</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Reading fluency & comprehension</li>
                <li>Spelling & grammar</li>
                <li>Writing confidence and structure</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-medium text-slate-900">Numeracy</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Number sense & operations</li>
                <li>Word problems & strategies</li>
                <li>Confidence with methods</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card: Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How the plan works</h2>
          <ol className="mt-4 space-y-3 text-slate-700">
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">1</span> Parent chat → key goals</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">2</span> Gentle diagnostics & simple plan</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">3</span> Fun practice + weekly notes home</li>
            <li><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">4</span> Confidence building and review</li>
          </ol>

          <div className="mt-6 rounded-xl border bg-blue-50 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-blue-800">Tip:</span> Shorter, regular sessions work best for Primary.
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
