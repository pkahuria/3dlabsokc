"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  // Don't render anything if no GA ID is configured
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Helper function to track custom events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Common event tracking functions
export const analytics = {
  // Track form submissions
  trackFormSubmission: (formName: string) => {
    trackEvent("submit", "form", formName);
  },

  // Track CTA clicks
  trackCTAClick: (ctaName: string) => {
    trackEvent("click", "cta", ctaName);
  },

  // Track service page views
  trackServiceView: (serviceName: string) => {
    trackEvent("view", "service", serviceName);
  },

  // Track portfolio item views
  trackPortfolioView: (projectName: string) => {
    trackEvent("view", "portfolio", projectName);
  },

  // Track blog post reads
  trackBlogRead: (postTitle: string) => {
    trackEvent("read", "blog", postTitle);
  },

  // Track phone clicks
  trackPhoneClick: () => {
    trackEvent("click", "contact", "phone");
  },

  // Track email clicks
  trackEmailClick: () => {
    trackEvent("click", "contact", "email");
  },
};
