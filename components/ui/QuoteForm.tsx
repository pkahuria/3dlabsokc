"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";
import { QUOTE_FORM_ENDPOINT, FORM_MOCK_MODE } from "@/lib/form-config";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  timeline: z.string().optional(),
  description: z.string().min(20, "Please provide more details about your project (at least 20 characters)"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "3d-printing", label: "3D Printing" },
  { value: "3d-scanning", label: "3D Scanning" },
  { value: "3d-modeling", label: "3D Modeling / CAD Design" },
  { value: "training", label: "Training" },
  { value: "other", label: "Other / Multiple Services" },
];

const timelineOptions = [
  { value: "", label: "Select timeline (optional)" },
  { value: "flexible", label: "Flexible - No rush" },
  { value: "2-weeks", label: "Within 2 weeks" },
  { value: "1-week", label: "Within 1 week" },
  { value: "urgent", label: "Urgent - ASAP" },
];

export default function QuoteForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: "",
      timeline: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitStatus("idle");

    try {
      if (FORM_MOCK_MODE) {
        // Mock submission for development
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Quote form data (mock):", data);
      } else {
        // Real Formspree submission
        const response = await fetch(QUOTE_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `Quote Request: ${data.serviceType} - ${data.name}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-text-primary mb-4">
          Quote Request Received!
        </h3>
        <p className="text-text-secondary mb-6">
          Thank you for your request. We&apos;ll review your project details
          and get back to you within 24 hours.
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setSubmitStatus("idle")}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          Something went wrong. Please try again or call us at (405) 546-2228.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <FormInput
          label="Name"
          placeholder="Your name"
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <FormInput
          label="Company"
          placeholder="Company name (optional)"
          {...register("company")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormInput
          label="Email"
          type="email"
          placeholder="your@email.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          label="Phone"
          type="tel"
          placeholder="(555) 123-4567"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormSelect
          label="Service Type"
          options={serviceOptions}
          required
          error={errors.serviceType?.message}
          {...register("serviceType")}
        />

        <FormSelect
          label="Timeline"
          options={timelineOptions}
          {...register("timeline")}
        />
      </div>

      <FormTextarea
        label="Project Description"
        placeholder="Tell us about your project. Include details like dimensions, materials, quantity, and any specific requirements."
        rows={6}
        required
        error={errors.description?.message}
        {...register("description")}
      />

      <div className="bg-surface rounded-lg p-4 text-sm text-text-secondary">
        <p className="flex items-start gap-2">
          <svg
            className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Have a 3D file? Email it to{" "}
            <a
              href="mailto:connect@3dlabsokc.com"
              className="text-accent hover:underline"
            >
              connect@3dlabsokc.com
            </a>{" "}
            with your request details and we&apos;ll include it in your quote.
          </span>
        </p>
      </div>

      <Button type="submit" isLoading={isSubmitting} size="lg" className="w-full">
        Submit Quote Request
      </Button>
    </form>
  );
}
