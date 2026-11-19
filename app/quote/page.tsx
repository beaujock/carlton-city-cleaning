import type { Metadata } from "next";
import { businessEmail, businessPhone, businessPhoneHref } from "@/lib/contact";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Get a Quote | Carlton City Cleaning",
  description: "Request a free cleaning quote from Carlton City Cleaning.",
};

export default function QuotePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="mb-4 inline-block rounded-full bg-sunbeam px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
        Free quote
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
        Get a quote
      </h1>
      <p className="mt-4 max-w-xl text-lg text-steel">
        Tell us about the space and we&apos;ll get back to you with a quote. Prefer
        to talk? Call{" "}
        <a href={businessPhoneHref} className="font-semibold text-blue hover:underline">
          {businessPhone}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${businessEmail}`} className="font-semibold text-blue hover:underline">
          {businessEmail}
        </a>
        .
      </p>

      <div className="mt-10">
        <QuoteForm />
      </div>
    </section>
  );
}
