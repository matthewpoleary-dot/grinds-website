"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

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

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ name, email, level, message });

  if (error) {
    console.error("Supabase error:", error);
    return { success: false, error: "Failed to send. Please try WhatsApp or email directly." };
  }

  return { success: true };
}
