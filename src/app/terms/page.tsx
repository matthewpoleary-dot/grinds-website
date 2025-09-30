export const metadata = {
    title: "Terms & Conditions | Matthew’s Grinds",
    description: "The terms of using Matthew’s Grinds tutoring services.",
  };
  
  export default function TermsPage() {
    return (
      <main className="min-h-screen bg-blue-50 text-slate-900">
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-700">Terms & Conditions</h1>
          <p className="mt-4 text-slate-700">
            By booking a grind with Matthew’s Grinds, you agree to the following
            terms and conditions.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            1. Lessons & Scheduling
          </h2>
          <p className="mt-2 text-slate-700">
            Sessions are arranged directly via WhatsApp, email, or phone. Lesson
            times are subject to availability and confirmation by Matthew.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            2. Payments
          </h2>
          <p className="mt-2 text-slate-700">
            Payment is required per session, unless otherwise agreed. Accepted
            payment methods will be confirmed when booking.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            3. Cancellations
          </h2>
          <p className="mt-2 text-slate-700">
            Please provide at least 24 hours’ notice for cancellations. Late
            cancellations may be charged at full session rate.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            4. Responsibilities
          </h2>
          <p className="mt-2 text-slate-700">
            Tutoring is intended to support learning but does not guarantee exam
            results. Students are responsible for their own progress and study
            outside sessions.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            5. Contact
          </h2>
          <p className="mt-2 text-slate-700">
            For any questions about these terms, please contact{" "}
            <a
              href="mailto:matthewsgrinds@gmail.com"
              className="text-blue-600 hover:underline"
            >
              matthewsgrinds@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    );
  }
  