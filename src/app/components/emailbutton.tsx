import React from "react";

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
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${body}`;

  return (
    <a
      href={gmailUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Email via Gmail"
    >
      {children ?? "Email Me"}
    </a>
  );
}
