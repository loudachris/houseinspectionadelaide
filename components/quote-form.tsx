"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { SUBURBS, SERVICES } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  compact,
  defaultSuburb,
  defaultService,
}: {
  compact?: boolean;
  defaultSuburb?: string;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Could not submit. Please try the phone number above.");
      }
      setStatus("success");
      if (typeof window !== "undefined" && "gtag" in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag("event", "quote_request_submitted");
      }
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not submit.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-[var(--color-line)] p-8 md:p-10 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.18)]">
        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-container)] grid place-items-center mb-4">
          <CheckCircle2 size={28} className="text-[var(--color-primary)]" />
        </div>
        <h3 className="text-[22px] font-[var(--font-display)] font-semibold text-[var(--color-primary-dark)] mb-2">
          Request received
        </h3>
        <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
          We will match you with three licensed Adelaide building inspectors and email you the
          quotes within 24 hours. Most matches are inside 4 to 6 hours during business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-[var(--color-line)] ${
        compact ? "p-6" : "p-8 md:p-10"
      } shadow-[0_24px_60px_-24px_rgba(20,41,68,0.18)]`}
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="md:col-span-2"
        />
        <Field
          label="Property address (or suburb)"
          name="property_address"
          required
          autoComplete="street-address"
          className="md:col-span-2"
        />

        <SelectField label="Suburb / region" name="suburb" defaultValue={defaultSuburb || ""}>
          <option value="">Select suburb</option>
          {SUBURBS.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other Adelaide">Other Adelaide suburb</option>
        </SelectField>

        <SelectField label="Inspection type" name="service" defaultValue={defaultService || ""}>
          <option value="">Select inspection</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.short}
            </option>
          ))}
          <option value="Not sure">Not sure - help me choose</option>
        </SelectField>

        <SelectField label="Settlement timeline" name="timeline" defaultValue="">
          <option value="">Select timeline</option>
          <option value="ASAP / cooling-off">ASAP / within cooling-off</option>
          <option value="This week">This week</option>
          <option value="Next 2 weeks">Next 2 weeks</option>
          <option value="Just looking">Just researching</option>
        </SelectField>

        <Field
          label="Property type"
          name="property_type"
          placeholder="e.g. 3br standalone, 1960s, single storey"
        />

        <TextareaField
          label="Anything we should know"
          name="notes"
          placeholder="Concerns, known issues, agent's report, urgency, anything"
          className="md:col-span-2"
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Do not fill this field
          <input
            type="text"
            name="company_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending
            </>
          ) : (
            <>
              Get 3 free quotes <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="text-[13px] text-[var(--color-muted)] leading-snug">
          No spam. No agent referrals. We only use your details to match you with three independent
          inspectors.
        </p>
      </div>

      {error && (
        <p className="mt-4 text-[14px] text-[var(--color-accent-dark)]" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-[13px] font-semibold text-[var(--color-primary-dark)] mb-1.5">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-[15px] text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-container)] transition"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  children,
  className,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-[13px] font-semibold text-[var(--color-primary-dark)] mb-1.5">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-[15px] text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-container)] transition"
      >
        {children}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-[13px] font-semibold text-[var(--color-primary-dark)] mb-1.5">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-[15px] text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-container)] transition resize-y"
      />
    </label>
  );
}
