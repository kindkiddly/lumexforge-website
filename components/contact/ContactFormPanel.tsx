"use client";

import type { ContactFormData, FormErrors } from "@/types";
import { useState } from "react";

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

export function ContactFormPanel() {
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
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="lf-contact-success" role="status" aria-live="polite">
        <div className="lf-contact-success-icon" aria-hidden="true">✓</div>
        <h3>
          Message <em>sent</em>
        </h3>
        <p>Thanks — we typically respond within 1–2 business days.</p>
        <button type="button" className="lf-contact-submit lf-contact-submit--ghost" onClick={() => setSubmitted(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="lf-contact-form-title">
        Send a <em>message</em>
      </h2>
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
            />
            {errors.name && <p className="lf-contact-error">{errors.name}</p>}
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
            />
            {errors.email && <p className="lf-contact-error">{errors.email}</p>}
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
          />
          {errors.subject && <p className="lf-contact-error">{errors.subject}</p>}
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
          />
          {errors.message && <p className="lf-contact-error">{errors.message}</p>}
        </div>
        <button type="submit" className="lf-contact-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Submit message"}
          {!isSubmitting && <span aria-hidden="true">→</span>}
        </button>
      </form>
    </>
  );
}
