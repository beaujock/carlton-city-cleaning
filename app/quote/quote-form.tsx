"use client";

import { useActionState } from "react";
import { submitQuote } from "./actions";
import { initialQuoteState, type QuoteField } from "./types";

const inputClass =
  "mt-2 block w-full rounded-lg border border-sky bg-white px-4 py-3 text-ink placeholder:text-steel/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30 aria-[invalid=true]:border-red-600";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-700">
      {message}
    </p>
  );
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialQuoteState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sky">
        <h2 className="text-2xl font-extrabold text-navy">Request received</h2>
        <p className="mt-3 text-steel">
          {state.message ?? "Thanks! We'll be in touch shortly."}
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const err = (f: QuoteField) => state.errors?.[f];
  const a11y = (f: QuoteField) => ({
    "aria-invalid": err(f) ? true : undefined,
    "aria-describedby": err(f) ? `${f}-error` : undefined,
  });

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky sm:p-8"
    >
      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="fullName" className="font-semibold text-navy">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          defaultValue={v.fullName}
          className={inputClass}
          {...a11y("fullName")}
        />
        <FieldError id="fullName-error" message={err("fullName")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold text-navy">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            defaultValue={v.phone}
            className={inputClass}
            {...a11y("phone")}
          />
          <FieldError id="phone-error" message={err("phone")} />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-navy">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            className={inputClass}
            {...a11y("email")}
          />
          <FieldError id="email-error" message={err("email")} />
        </div>
      </div>

      <fieldset {...a11y("preferredContact")}>
        <legend className="font-semibold text-navy">Preferred contact method</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {(["email", "phone"] as const).map((method) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-sky bg-white px-5 py-2.5 has-[:checked]:border-blue has-[:checked]:bg-sky"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                required
                defaultChecked={(v.preferredContact ?? "email") === method}
                className="accent-blue"
              />
              <span className="font-medium capitalize text-ink">{method}</span>
            </label>
          ))}
        </div>
        <FieldError id="preferredContact-error" message={err("preferredContact")} />
      </fieldset>

      <div className="sm:max-w-xs">
        <label htmlFor="postalCode" className="font-semibold text-navy">
          Postal code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          autoComplete="postal-code"
          placeholder="K1A 0B1"
          required
          maxLength={7}
          defaultValue={v.postalCode}
          className={`${inputClass} uppercase`}
          {...a11y("postalCode")}
        />
        <FieldError id="postalCode-error" message={err("postalCode")} />
      </div>

      <div>
        <label htmlFor="description" className="font-semibold text-navy">
          Description of the work
        </label>
        <p className="mt-1 text-sm text-steel">
          Type of space, size, how often, and anything we should know.
        </p>
        <textarea
          id="description"
          name="description"
          rows={6}
          required
          maxLength={2000}
          defaultValue={v.description}
          className={inputClass}
          {...a11y("description")}
        />
        <FieldError id="description-error" message={err("description")} />
      </div>

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-blue disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Request my quote"}
      </button>
    </form>
  );
}
