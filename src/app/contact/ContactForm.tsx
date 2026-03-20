"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const inputStyle = {
  border: "1.5px solid rgba(26,26,26,0.15)",
  backgroundColor: "var(--cream)",
  color: "var(--ink)",
};

const labelStyle = {
  color: "var(--ink-muted)",
};

const initialState: ContactState = { success: false };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);

  if (state.success) {
    return (
      <div
        className="card text-center py-12"
        style={{ borderColor: "var(--amber)" }}
      >
        <p className="font-display text-2xl font-bold mb-2" style={{ color: "var(--ink)" }}>
          Message sent!
        </p>
        <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
          Thanks — I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="card flex flex-col gap-5">
      {state.error && (
        <p className="text-sm rounded-xl px-4 py-3" style={{ backgroundColor: "#fef2f2", color: "#b91c1c" }}>
          {state.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider"
            style={labelStyle}
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Sarah Murphy"
            className="rounded-xl px-4 py-2.5 text-sm outline-none"
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider"
            style={labelStyle}
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl px-4 py-2.5 text-sm outline-none"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="level"
          className="text-xs font-semibold uppercase tracking-wider"
          style={labelStyle}
        >
          Programme
        </label>
        <select
          id="level"
          name="level"
          className="rounded-xl px-4 py-2.5 text-sm outline-none"
          style={inputStyle}
        >
          <option value="">Select a level…</option>
          <option value="Leaving Certificate">Leaving Certificate</option>
          <option value="Junior Cycle">Junior Cycle</option>
          <option value="Not sure">Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wider"
          style={labelStyle}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about what you need — subject, upcoming exam, availability, etc."
          className="rounded-xl px-4 py-2.5 text-sm outline-none resize-none"
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary self-start px-8 py-3"
        style={pending ? { opacity: 0.6 } : {}}
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
