// app/subjects/page.tsx  (your SubjectsPage)
import Link from "next/link";

export default function SubjectsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Full-bleed background + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Choose a Level
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200">
          Select <span className="font-semibold">Leaving Certificate</span>,{" "}
          <span className="font-semibold">Junior Cycle</span>, or{" "}
          <span className="font-semibold">Primary</span> to see details and next steps.
        </p>

        {/* Card grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* Leaving Certificate */}
          <article className="group h-full flex flex-col rounded-2xl bg-white/90 backdrop-blur-md p-6 text-left shadow-lg ring-1 ring-black/10 hover:shadow-xl transition">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-700">Leaving Certificate</h2>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-700">HL / OL</span>
            </header>
            <p className="mt-3 text-slate-700 text-sm">
              French, Spanish, Biology, Maths, and History taught to SEC marking-scheme standards.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-2">
              <li><span className="font-medium">Exam Strategy:</span> Timing Plans, Structured Answers, Keywords.</li>
              <li><span className="font-medium">Languages:</span> Oral & Aural Preparation, High-Yield Grammar, Writing Frames.</li>
              <li><span className="font-medium">Past Papers:</span> Weekly Practice With Targeted Feedback.</li>
            </ul>
            <div className="mt-auto pt-5 flex gap-3">
              <Link href="/subjects/lc" className="inline-flex h-11 items-center justify-center rounded-xl border border-blue-300 px-4 text-blue-700 hover:bg-blue-50 transition">Learn more</Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700 transition">Book now</Link>
            </div>
          </article>

          {/* Junior Cycle */}
          <article className="group h-full flex flex-col rounded-2xl bg-white/90 backdrop-blur-md p-6 text-left shadow-lg ring-1 ring-black/10 hover:shadow-xl transition">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-700">Junior Cycle</h2>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-700">Maths • Science • French • Spanish</span>
            </header>
            <p className="mt-3 text-slate-700 text-sm">
              Build solid fundamentals and exam technique for CBAs and the final exam.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-2">
              <li><span className="font-medium">Core Skills:</span> Methods For Common Problem Types; Neat Layout.</li>
              <li><span className="font-medium">CBA Support:</span> Guidance, Reflection Prompts, Exemplars.</li>
              <li><span className="font-medium">Languages:</span> Practical Speaking Frames; Listening Strategies.</li>
              <li><span className="font-medium">Study Habits:</span> Notes, Checklists, Short Regular Practice.</li>
            </ul>
            <div className="mt-auto pt-5 flex gap-3">
              <Link href="/subjects/jc" className="inline-flex h-11 items-center justify-center rounded-xl border border-blue-300 px-4 text-blue-700 hover:bg-blue-50 transition">Learn more</Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700 transition">Book now</Link>
            </div>
          </article>

          {/* Primary */}
          <article className="group h-full flex flex-col rounded-2xl bg-white/90 backdrop-blur-md p-6 text-left shadow-lg ring-1 ring-black/10 hover:shadow-xl transition">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-700">Primary</h2>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-700">Literacy • Numeracy</span>
            </header>
            <p className="mt-3 text-slate-700 text-sm">
              Calm, confidence-building sessions that strengthen core skills and routines.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-2">
              <li><span className="font-medium">Literacy:</span> Phonics, Fluency, Comprehension, Writing.</li>
              <li><span className="font-medium">Numeracy:</span> Number Sense, Strategies For Word Problems.</li>
              <li><span className="font-medium">Routine:</span> Simple Practice Tasks; Focus & Organisation.</li>
              <li><span className="font-medium">Parent Updates:</span> Brief Notes After Sessions; Clear Next Steps.</li>
            </ul>
            <div className="mt-auto pt-5 flex gap-3">
              <Link href="/subjects/primary" className="inline-flex h-11 items-center justify-center rounded-xl border border-blue-300 px-4 text-blue-700 hover:bg-blue-50 transition">Learn more</Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700 transition">Book now</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
