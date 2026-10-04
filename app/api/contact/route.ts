import { CONTACT_EMAILS } from "@/lib/constants";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const LIMITS = {
  name: 200,
  email: 254,
  subject: 200,
  message: 5000,
} as const;

function validatePayload(body: ContactPayload) {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > LIMITS.name) {
    return { ok: false as const, error: "Please enter a valid name." };
  }
  if (!email || email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }
  if (!subject || subject.length > LIMITS.subject) {
    return { ok: false as const, error: "Please enter a subject." };
  }
  if (!message || message.length < 10 || message.length > LIMITS.message) {
    return {
      ok: false as const,
      error: "Message must be at least 10 characters.",
    };
  }

  return { ok: true as const, data: { name, email, subject, message } };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY or RESEND_FROM is not configured.");
    return NextResponse.json(
      { error: "Unable to send your message right now. Please email us directly." },
      { status: 503 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const validated = validatePayload(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { name, email, subject, message } = validated.data;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAILS.business],
      reply_to: email,
      subject: `[LumexForge Contact] ${subject}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Contact form: Resend error", resendResponse.status, await resendResponse.text());
    return NextResponse.json(
      { error: "Unable to send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
