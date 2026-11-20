export const businessEmail = process.env.BUSINESS_EMAIL ?? "";
export const businessPhone = process.env.BUSINESS_PHONE ?? "";

/** Phone number formatted for a `tel:` link (digits and leading +). */
export const businessPhoneHref = `tel:${businessPhone.replace(/[^\d+]/g, "")}`;
