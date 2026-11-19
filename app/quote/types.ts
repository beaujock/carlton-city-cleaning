export const quoteFields = [
  "fullName",
  "phone",
  "email",
  "preferredContact",
  "postalCode",
  "description",
] as const;

export type QuoteField = (typeof quoteFields)[number];

export type QuoteFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: Partial<Record<QuoteField, string>>;
  /** Submitted values, echoed back so the form keeps them after an error. */
  values?: Partial<Record<QuoteField, string>>;
};

export const initialQuoteState: QuoteFormState = { status: "idle" };
