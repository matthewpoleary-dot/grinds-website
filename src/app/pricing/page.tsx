import Link from "next/link";

export const metadata = {
  title: "Pricing | Matthew's Grinds",
  description: "Clear, student-friendly pricing for one-to-one grinds. No hidden fees.",
};

const plans = [
  {
    name: "Single Session",
    price: "€40",
    per: "per 60 mins",
    features: ["One-off session", "Homework or exam focus", "Online or Dublin"],
    cta: "Book one session",
  },
  {
    name: "5-Pack",
    highlight: true,
    price: "€185",
    per: "~€37 / session",
    features: ["Best for short targets", "Flexible scheduling", "Progress notes each week"],
    cta: "Get 5 sessions",
  },
  {
    name: "10-Pack",
    price: "€350",
    per: "~€35 / session",
    features: ["Best value", "Longer-term plan", "Free study plan template"],
    cta: "Get 10 sessions",
  },
];

export default function Page() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">Transparent pricing</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--ink)" }}>
            Pricing
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Clear, student-friendly pricing. No hidden fees.
          </p>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="card flex flex-col relative"
              style={p.highlight ? { border: "2px solid var(--amber)" } : {}}
            >
              {p.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold whitespace-nowrap"
                  style={{ backgroundColor: "var(--amber)", color: "white" }}
                >
                  Most popular
                </div>
              )}

              <p className="label-section mb-3">{p.name}</p>
              <div className="flex items-end gap-2 mb-5">
                <span className="font-display text-4xl font-bold" style={{ color: "var(--ink)" }}>
                  {p.price}
                </span>
                <span className="text-sm pb-1" style={{ color: "var(--ink-muted)" }}>
                  {p.per}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm flex-1" style={{ color: "var(--ink)" }}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span style={{ color: "var(--amber)" }}>✓</span>
                    {f}
                  </li>
                ))}
                <li className="flex gap-2">
                  <span style={{ color: "var(--amber)" }}>✓</span>
                  Free access to StudyWith AI
                </li>
              </ul>

              <Link
                href="/contact"
                className="btn btn-primary mt-6 w-full justify-center"
                style={p.highlight ? { backgroundColor: "var(--amber)" } : {}}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* StudyWith note */}
        <div
          className="mt-8 rounded-2xl p-5"
          style={{ backgroundColor: "var(--amber-lite)" }}
        >
          <p className="font-semibold text-sm mb-1" style={{ color: "var(--ink)" }}>
            Every plan includes access to StudyWith
          </p>
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
            StudyWith is an AI study tool I built myself. Instead of giving answers, it asks
            questions to guide your thinking — so you genuinely understand the material, not just
            memorise it. Students get access when they book sessions with me.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <p className="label-section mb-4">Common questions</p>
          <h2
            className="font-display text-2xl sm:text-3xl font-bold mb-10"
            style={{ color: "var(--ink)" }}
          >
            FAQs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { q: "Where do sessions happen?", a: "Online (Zoom/Meet) or in-person in Dublin." },
              { q: "What's the cancellation policy?", a: "24-hour notice for rescheduling or cancellation." },
              { q: "Do you set homework?", a: "Short, targeted practice if helpful. Always optional." },
            ].map(({ q, a }) => (
              <div key={q} className="card">
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--ink)" }}>{q}</p>
                <p className="text-sm" style={{ color: "var(--ink-muted)" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container py-16">
        <div className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
              Ready to book?
            </h3>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
              Get in touch to choose a plan and lock in your first session.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
