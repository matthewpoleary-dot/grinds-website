"use server";

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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
    // Save to Supabase
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, level, message });

    if (error) {
      return { success: false, error: `DB: ${error.message} [${error.code}]` };
    }

    // Send email notification
    await transporter.sendMail({
      from: `"Matthew's Grinds" <${process.env.GMAIL_USER}>`,
      to: "matthewpoleary@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${level ? ` — ${level}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nLevel: ${level || "Not specified"}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { success: false, error: `Exception: ${msg}` };
  }
}
