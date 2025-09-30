"use client";

import { useState } from "react";

type Props = {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function EmailButton({
  email,
  subject = "Grinds Enquiry",
  body = "Hi Matthew,%0A%0AI'd like to enquire about grinds.%0A%0AThanks!",
  className = "",
  children,
}: Props) {
  const [copied, setCopied] = useState(false);

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

  const handleClick = () => {
    try {
      window.location.href = mailto;
      navigator.clipboard?.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch {
      navigator.clipboard?.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <span className="relative block w-full">
      <button
        onClick={handleClick}
        type="button"
        className={`w-full rounded-lg text-center ${className}`}
        aria-label="Email"
      >
        {children ?? "Email me"}
      </button>

      {/* Tiny toast */}
      <span
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 translate-y-2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        Email copied ✓
      </span>
    </span>
  );
}
