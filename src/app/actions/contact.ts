"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const level = String(formData.get("level") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Matthew's Grinds <onboarding@resend.dev>",
      to: "matthewsgrinds@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${level ? ` — ${level}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nLevel: ${level || "Not specified"}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Failed to send. Please try WhatsApp or email directly." };
  }
}
