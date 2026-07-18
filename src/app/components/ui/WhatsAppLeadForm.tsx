"use client";

import { FormEvent, ReactNode } from "react";
import { COMPANY_CONTACT, whatsappUrl } from "../../constants/brandResources";

type Field = {
  name: string;
  label?: string;
  labelClassName?: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  options?: string[];
  className?: string;
  wrapperClassName?: string;
  rows?: number;
};

type WhatsAppLeadFormProps = {
  /** Prefixed in the WhatsApp message, e.g. "Lubnas Dental appointment" */
  topic: string;
  fields: Field[];
  submitLabel: string;
  submitClassName: string;
  className?: string;
  /** Override destination WhatsApp number (digits with country code) */
  phone?: string;
  children?: ReactNode;
};

function readFields(form: HTMLFormElement, fields: Field[]): string[] {
  return fields
    .map((field) => {
      const el = form.elements.namedItem(field.name);
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) {
        return null;
      }
      const value = el.value.trim();
      if (!value) return null;
      const label = field.label || field.placeholder || field.name;
      return `${label}: ${value}`;
    })
    .filter((line): line is string => Boolean(line));
}

export function WhatsAppLeadForm({
  topic,
  fields,
  submitLabel,
  submitClassName,
  className,
  phone = COMPANY_CONTACT.whatsappNumber,
  children,
}: WhatsAppLeadFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const lines = readFields(form, fields);
    const message = [`Hi Ekho Future — ${topic}`, ...lines].join("\n");
    window.open(whatsappUrl(message, phone), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {fields.map((field) => {
        const shared = {
          name: field.name,
          placeholder: field.placeholder,
          autoComplete: field.autoComplete,
          required: field.required ?? true,
          className: field.className,
        };
        const wrap = field.wrapperClassName ?? "space-y-2";
        const labelEl = field.label ? (
          <label className={field.labelClassName ?? "form-label"}>{field.label}</label>
        ) : null;

        if (field.type === "textarea") {
          return (
            <div key={field.name} className={wrap}>
              {labelEl}
              <textarea {...shared} rows={field.rows ?? 4} />
            </div>
          );
        }

        if (field.type === "select") {
          return (
            <div key={field.name} className={wrap}>
              {labelEl}
              <select {...shared} className={`${field.className ?? ""} appearance-none`}>
                {(field.options ?? []).map((opt) => (
                  <option key={opt} value={opt === field.placeholder ? "" : opt} disabled={opt === field.placeholder}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={field.name} className={wrap}>
            {labelEl}
            <input {...shared} type={field.type ?? "text"} />
          </div>
        );
      })}
      {children}
      <button type="submit" className={submitClassName}>
        {submitLabel}
      </button>
    </form>
  );
}
