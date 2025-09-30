export const metadata = {
    title: "Privacy Policy | Matthew’s Grinds",
    description: "How we handle and protect your personal data at Matthew’s Grinds.",
  };
  
  export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-blue-50 text-slate-900">
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-700">Privacy Policy</h1>
          <p className="mt-4 text-slate-700">
            Your privacy is important. This policy explains how we collect, use,
            and protect your information when you use Matthew’s Grinds.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            1. Information We Collect
          </h2>
          <p className="mt-2 text-slate-700">
            We may collect personal details you provide directly (such as your
            name, email, phone number) when contacting us or booking a session.
            We do not collect unnecessary or sensitive information.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            2. How We Use Your Information
          </h2>
          <p className="mt-2 text-slate-700">
            Information is used only to arrange lessons, respond to enquiries, and
            provide tutoring services. We never sell or share your data with third
            parties.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            3. Data Storage & Security
          </h2>
          <p className="mt-2 text-slate-700">
            Your data is stored securely and only for as long as necessary. We use
            secure platforms (e.g. WhatsApp, Gmail) to communicate with you.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            4. Your Rights
          </h2>
          <p className="mt-2 text-slate-700">
            You have the right to request access to, correction of, or deletion of
            your personal data at any time. Simply contact us by email.
          </p>
  
          <h2 className="mt-8 text-2xl font-semibold text-blue-700">
            5. Contact
          </h2>
          <p className="mt-2 text-slate-700">
            If you have any questions about this policy, contact us at{" "}
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
  