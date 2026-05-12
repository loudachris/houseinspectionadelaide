"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { SUBURBS, SERVICES } from "@/lib/site";

type Status = "idle" | "submitting" | "error";

export function QuoteForm({
  compact,
  defaultSuburb,
  defaultService,
}: {
  compact?: boolean;
  defaultSuburb?: string;
  defaultService?: string;
}) {
  const router = useRouter();
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
        throw new Error(j.error || "Could not submit right now. Please try again in a few minutes.");
      }
      form.reset();
      router.push("/thank-you");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not submit.");
    }
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
