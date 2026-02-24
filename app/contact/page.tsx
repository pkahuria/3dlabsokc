import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | 3D Labs OKC | Oklahoma City",
  description:
    "Get in touch with 3D Labs OKC. Call (405) 546-2228 or visit us at 10802 Quail Plaza Dr STE 120, OKC.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #0EA5E9 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Have a question or want to discuss a project? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif text-text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">
                      Address
                    </h3>
                    <p className="text-text-secondary">
                      10802 Quail Plaza Dr STE 120
                      <br />
                      Oklahoma City, OK 73120
                    </p>
                    <a
                      href="https://maps.google.com/?q=10802+Quail+Plaza+Dr+STE+120+Oklahoma+City+OK+73120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-sm mt-2 hover:underline"
                    >
                      Get Directions
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">Phone</h3>
                    <a
                      href="tel:+14055462228"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      (405) 546-2228
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:connect@3dlabsokc.com"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      connect@3dlabsokc.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-text-secondary">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-xl bg-slate-100 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center text-slate-400">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="text-sm">Google Map Embed</p>
                </div>
              </div>

              {/* Quote Link */}
              <div className="mt-8 p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-medium text-text-primary mb-2">
                  Ready to request a quote?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  For project-specific inquiries with detailed requirements, use
                  our quote request form.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Request a Quote
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif text-text-primary mb-8">
                Send Us a Message
              </h2>
              <div className="bg-white rounded-xl border border-border p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
