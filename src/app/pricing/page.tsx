import Link from "next/link";

const plans = [
  {
    name: "Single Session",
    price: "€35",
    per: "per 60 mins",
    features: ["One-off session", "Homework or exam focus", "Online or Dublin"],
    cta: "Book one session",
  },
  {
    name: "5-Pack",
    highlight: true,
    price: "€160",
    per: "~€32/session",
    features: ["Best for short targets", "Flexible scheduling", "Progress notes each week"],
    cta: "Get 5 sessions",
  },
  {
    name: "10-Pack",
    price: "€300",
    per: "~€30/session",
    features: ["Best value", "Longer-term plan", "Free study plan template"],
    cta: "Get 10 sessions",
  },
];

export default function Page() {
  return (
    <div className="grid gap-10">
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Pricing</h1>
        <p className="mt-2 text-slate-700">
          Clear, student-friendly pricing. No hidden fees.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border p-6 shadow-sm bg-white ${
              p.highlight ? "ring-2 ring-blue-600" : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
            <div className="mt-3">
              <span className="text-3xl font-bold text-slate-900">{p.price}</span>
              <span className="ml-2 text-sm text-slate-500">{p.per}</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex btn btn-primary w-full justify-center"
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-3 grid gap-4">
          <div>
            <p className="font-medium text-slate-900">Where do sessions happen?</p>
            <p className="text-slate-700">Online (Zoom/Meet) or in-person in Dublin.</p>
          </div>
          <div>
            <p className="font-medium text-slate-900">What’s the cancellation policy?</p>
            <p className="text-slate-700">24-hour notice for rescheduling or cancellation.</p>
          </div>
          <div>
            <p className="font-medium text-slate-900">Do you set homework?</p>
            <p className="text-slate-700">Short, targeted practice if helpful; always optional.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
