"use client";

import { CONTACT_EMAILS } from "@/lib/constants";
import type { ContactFormData, FormErrors } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const CHANNELS = [
  {
    label: "Business",
    description: "Partnerships & inquiries",
    value: CONTACT_EMAILS.business,
  },
  {
    label: "Support",
    description: "Product help & assistance",
    value: CONTACT_EMAILS.support,
  },
  {
    label: "Privacy",
    description: "Data & privacy matters",
    value: CONTACT_EMAILS.privacy,
  },
];

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

function ContactFormPanel() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="lf-contact-success" role="status" aria-live="polite">
        <div className="lf-contact-success-icon" aria-hidden="true">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3>Message sent</h3>
        <p>Thank you for reaching out. We typically respond within 1–2 business days.</p>
        <button type="button" className="lf-contact-submit" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="lf-contact-form-title">Send a message</h2>
      <p className="lf-contact-form-sub">We typically respond within 1–2 business days.</p>

      <form className="lf-contact-form" onSubmit={handleSubmit} noValidate>
        <div className="lf-contact-form-row">
          <div className="lf-contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={errors.name ? "is-error" : undefined}
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="lf-contact-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div className="lf-contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email ? "is-error" : undefined}
              required
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="lf-contact-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="lf-contact-field">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            className={errors.subject ? "is-error" : undefined}
            required
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          />
          {errors.subject && (
            <p id="contact-subject-error" className="lf-contact-error" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="lf-contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your inquiry..."
            className={errors.message ? "is-error" : undefined}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="lf-contact-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="lf-contact-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Submit message"}
          {!isSubmitting && <span aria-hidden="true">→</span>}
        </button>
      </form>
    </>
  );
}

export function ContactShowcase() {
  return (
    <div className="lf-contact-page">
      <div className="lf-contact-glow" aria-hidden="true" />

      <div className="lf-contact-inner">
        <motion.header
          className="lf-contact-hero"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          <motion.p className="lf-contact-eyebrow" variants={fadeUp}>
            Contact
          </motion.p>
          <motion.h1 className="lf-contact-title" variants={fadeUp}>
            Let&apos;s start a <em>conversation</em>
          </motion.h1>
          <motion.p className="lf-contact-lead" variants={fadeUp}>
            Partnerships, product questions, or support — reach the studio directly. Based in
            Houston, USA.
          </motion.p>
        </motion.header>

        <motion.div
          className="lf-contact-grid"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.aside className="lf-contact-side" variants={fadeUp}>
            <p className="lf-contact-side-label">Direct channels</p>
            <div className="lf-contact-channels">
              {CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={`mailto:${channel.value}`}
                  className="lf-contact-channel"
                >
                  <div>
                    <strong>{channel.label}</strong>
                    <span>{channel.description}</span>
                  </div>
                  <span className="lf-contact-channel-email">{channel.value}</span>
                </a>
              ))}
            </div>
            <div className="lf-contact-meta">
              <span>
                <strong>Web</strong> lumexforge.com
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <strong>HQ</strong> Houston, USA
              </span>
            </div>
          </motion.aside>

          <motion.div className="lf-contact-form-wrap" variants={fadeUp}>
            <ContactFormPanel />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
