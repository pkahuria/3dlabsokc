// Formspree Configuration
// Replace these with your actual Formspree form IDs after creating forms at https://formspree.io
// Free tier includes 50 submissions/month

export const FORMSPREE_CONTACT_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "YOUR_CONTACT_FORM_ID";
export const FORMSPREE_QUOTE_ID = process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID || "YOUR_QUOTE_FORM_ID";

// Formspree endpoints
export const CONTACT_FORM_ENDPOINT = `https://formspree.io/f/${FORMSPREE_CONTACT_ID}`;
export const QUOTE_FORM_ENDPOINT = `https://formspree.io/f/${FORMSPREE_QUOTE_ID}`;

// For development/testing, you can use a mock mode
export const FORM_MOCK_MODE = process.env.NODE_ENV === "development" && FORMSPREE_CONTACT_ID === "YOUR_CONTACT_FORM_ID";
