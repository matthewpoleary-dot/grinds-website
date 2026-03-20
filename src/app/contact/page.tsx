import EmailButton from "@/app/components/emailbutton";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Matthew's Grinds",
  description:
    "Get in touch with Matthew's Grinds. Message on WhatsApp, email, or call to book a session or ask a question.",
};

export default function ContactPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}>
        <div className="container py-16 md:py-20">
          <p className="label-section mb-4">Get in touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--ink)" }}>
            Contact Me
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Whether you&apos;re ready to book a grind or just have a question, get in touch
            directly. I&apos;ll reply as soon as possible.
          </p>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="container py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="card flex flex-col justify-between gap-6">
            <div>
              <p className="label-section mb-2">Quickest way</p>
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                WhatsApp
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                Send a message any time. I reply fast.
              </p>
            </div>
            <a
              href="https://wa.me/353892065432"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm"
            >
              WhatsApp Me
            </a>
          </div>

          {/* Email */}
          <div className="card flex flex-col justify-between gap-6">
            <div>
              <p className="label-section mb-2">Enquiries</p>
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Email
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                Opens Gmail with my address and subject pre-filled.
              </p>
            </div>
            <EmailButton
              email="matthewsgrinds@gmail.com"
              subject="Grinds Enquiry"
              body="Hi Matthew,%0A%0AI'd like to enquire about grinds.%0A%0AThanks!"
              className="btn btn-primary text-sm text-center"
            >
              Email Me
            </EmailButton>
          </div>

          {/* Call */}
          <div className="card flex flex-col justify-between gap-6">
            <div>
              <p className="label-section mb-2">Prefer to talk</p>
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
                Call
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                Give me a call and we&apos;ll sort something out.
              </p>
            </div>
            <a href="tel:+353892065432" className="btn btn-primary text-sm">
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section style={{ backgroundColor: "var(--cream-alt)" }}>
        <div className="container py-16">
          <div className="max-w-2xl mx-auto">
            <p className="label-section mb-4 text-center">Send a message</p>
            <h2
              className="font-display text-3xl font-bold text-center mb-2"
              style={{ color: "var(--ink)" }}
            >
              Drop me a note
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: "var(--ink-muted)" }}>
              Fill in the form and I&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container py-14">
        <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
              Ready to start?
            </h3>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
              Reach out now to secure your spot. Sessions fill quickly around exam season.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/353892065432"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-5 py-2.5"
            >
              WhatsApp
            </a>
            <EmailButton
              email="matthewsgrinds@gmail.com"
              subject="Grinds Enquiry"
              body="Hi Matthew,%0A%0AI'd like to enquire about grinds.%0A%0AThanks!"
              className="btn btn-outline text-sm px-5 py-2.5"
            >
              Email
            </EmailButton>
            <a href="tel:+353892065432" className="btn btn-outline text-sm px-5 py-2.5">
              Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
