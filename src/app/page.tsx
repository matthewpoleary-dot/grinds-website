// app/page.tsx (Home)
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&q=80&w=1920&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
            One-to-One Grinds That Get Results
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-200">
            Personal one-to-one tuition for <strong>Leaving Certificate</strong>,{" "}
            <strong>Junior Cycle</strong> and <strong>Primary</strong> students.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/subjects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition"
            >
              View Subjects
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl bg-white/90 px-6 py-3 text-base font-medium text-blue-700 shadow-lg hover:bg-white transition"
            >
              Pricing
            </Link>
          </div>

          <p className="mt-6 text-base text-slate-200">Online or in person across Dublin.</p>
        </div>
      </div>

      {/* PROGRAMMES */}
      <section className="container mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Programmes</h2>
          <p className="mt-2 text-slate-600">
            Targeted support tailored to each stage, with clear plans and measurable progress.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Leaving Certificate */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-700">Leaving Certificate</h3>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700 border border-blue-200">HL & OL</span>
            </div>
            <p className="mt-3 text-slate-700 text-sm">
              French, Spanish, Biology, Mathematics, and History taught in line with SEC marking schemes.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li><span className="font-medium">Exam Strategy:</span> Timing Plans, Structured Answers, and Key Terms.</li>
              <li><span className="font-medium">Weekly Past Papers:</span> Practice With Targeted Feedback.</li>
              <li><span className="font-medium">Languages:</span> Oral and Aural Preparation, High-Yield Grammar, and Writing Frames.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Link href="/subjects/lc" className="btn btn-outline">Learn More</Link>
              <Link href="/contact" className="btn btn-primary">Book Now</Link>
            </div>
          </div>

          {/* Junior Cycle */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-700">Junior Cycle</h3>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700 border border-blue-200">
                Mathematics • Science • French • Spanish
              </span>
            </div>
            <p className="mt-3 text-slate-700 text-sm">
              Build strong fundamentals and exam technique for CBAs and final exams.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li><span className="font-medium">Core Skills:</span> Methods for Common Problem Types and Clear Presentation.</li>
              <li><span className="font-medium">CBA Support:</span> Guidance, Reflection Prompts, and Exemplars.</li>
              <li><span className="font-medium">Languages:</span> Practical Speaking Frames and Listening Strategies.</li>
              <li><span className="font-medium">Study Habits:</span> Notes, Checklists, and Regular Short Practice.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Link href="/subjects/jc" className="btn btn-outline">Learn More</Link>
              <Link href="/contact" className="btn btn-primary">Book Now</Link>
            </div>
          </div>

          {/* Primary */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-700">Primary</h3>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700 border border-blue-200">
                Literacy • Numeracy
              </span>
            </div>
            <p className="mt-3 text-slate-700 text-sm">
              Gentle, confidence-building sessions that strengthen core skills and homework routines.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li><span className="font-medium">Literacy:</span> Phonics, Reading Fluency, Comprehension, and Writing.</li>
              <li><span className="font-medium">Numeracy:</span> Number Sense, Operations, and Problem-Solving Strategies.</li>
              <li><span className="font-medium">Parent Updates:</span> Brief Notes After Sessions and Clear Next Steps.</li>
              <li><span className="font-medium">Routine:</span> Light Practice Tasks That Are Consistently Completed.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Link href="/subjects/primary" className="btn btn-outline">Learn More</Link>
              <Link href="/contact" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl bg-blue-600 text-white p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Not Sure Where to Start?</h3>
            <p className="mt-2 text-slate-100">
              Book a 15-minute consultation to map out your goals and select the best plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-white px-6 py-3 text-blue-700 font-medium shadow hover:bg-slate-100 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
