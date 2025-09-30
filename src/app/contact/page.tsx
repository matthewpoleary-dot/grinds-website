// app/contact/page.tsx
import EmailButton from "@/app/components/emailbutton";

export const metadata = {
  title: "Contact | Matthew’s Grinds",
  description:
    "Get in touch with Matthew’s Grinds. Message on WhatsApp, email, or call to book a session or ask a question.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-blue-50 text-slate-900">
      {/* HERO */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-blue-700 md:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Whether you’re ready to book a grind or just have a question, get in
            touch directly. I’ll reply as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-blue-700">WhatsApp</h2>
              <p className="mt-2 text-slate-700">Quickest way to reach me.</p>
            </div>
            <a
              href="https://wa.me/353892065432"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
            >
              WhatsApp Me
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-blue-700">Email</h2>
              <p className="mt-2 text-slate-700">
                For bookings, questions, or detailed enquiries.
              </p>
            </div>
            <EmailButton
              email="matthewsgrinds@gmail.com"
              subject="Grinds Enquiry"
              body={"Hi Matthew,%0A%0AI'd like to enquire about grinds.%0A%0AThanks!"}
              className="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
            >
              Email me
            </EmailButton>
          </div>

          {/* Call */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-blue-700">Call</h2>
              <p className="mt-2 text-slate-700">
                Prefer to talk directly? Give me a call.
              </p>
            </div>
            <a
              href="tel:+353892065432"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
            >
              Call me
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-blue-100 bg-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Ready to start?</h3>
              <p className="mt-1 text-slate-700">
                Reach out now to secure your spot — sessions fill quickly around
                exam season.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://wa.me/353892065432"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                WhatsApp
              </a>

              {/* Use the same EmailButton for consistency in the CTA */}
              <EmailButton
                email="matthewsgrinds@gmail.com"
                subject="Grinds Enquiry"
                body={"Hi Matthew,%0A%0AI'd like to enquire about grinds.%0A%0AThanks!"}
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Email
              </EmailButton>

              <a
                href="tel:+353892065432"
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
