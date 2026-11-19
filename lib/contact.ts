export const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "";
export const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "";

/** Phone number formatted for a `tel:` link (digits and leading +). */
export const businessPhoneHref = `tel:${businessPhone.replace(/[^\d+]/g, "")}`;
