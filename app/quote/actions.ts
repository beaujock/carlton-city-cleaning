"use server";

import {
  quoteFields,
  type QuoteField,
  type QuoteFormState,
} from "./types";

type QuoteRequest = Record<QuoteField, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Canadian postal code, e.g. "K1A 0B1" (space optional).
const POSTAL_RE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

function validate(values: QuoteRequest) {
  const errors: Partial<Record<QuoteField, string>> = {};

  if (values.fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (values.fullName.length > 100) errors.fullName = "Name is too long.";

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  if (!EMAIL_RE.test(values.email) || values.email.length > 254)
    errors.email = "Please enter a valid email address.";

  if (values.preferredContact !== "email" && values.preferredContact !== "phone")
    errors.preferredContact = "Choose how you'd like us to contact you.";

  if (!POSTAL_RE.test(values.postalCode))
    errors.postalCode = "Please enter a valid postal code (e.g. K1A 0B1).";

  if (values.description.length < 10)
    errors.description = "Tell us a little more about the work (at least 10 characters).";
  else if (values.description.length > 2000)
    errors.description = "Please keep the description under 2000 characters.";

  return errors;
}

/**
 * Where a valid quote request goes. Replace the body with an email provider
 * (e.g. Resend, Postmark) or a CRM/database call.
 */
async function deliverQuoteRequest(request: QuoteRequest) {
  console.log("[quote request]", JSON.stringify(request));
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Honeypot: real users never fill this hidden field.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success" };
  }

  const values = Object.fromEntries(
    quoteFields.map((f) => [f, String(formData.get(f) ?? "").trim()]),
  ) as QuoteRequest;

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  const pc = values.postalCode.replace(/\s/g, "").toUpperCase();
  values.postalCode = `${pc.slice(0, 3)} ${pc.slice(3)}`;

  try {
    await deliverQuoteRequest(values);
  } catch (err) {
    console.error("[quote request] delivery failed", err);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or contact us directly.",
      values,
    };
  }

  return {
    status: "success",
    message: `Thanks, ${values.fullName.split(" ")[0]}! We'll reach out by ${values.preferredContact} shortly with your quote.`,
  };
}
