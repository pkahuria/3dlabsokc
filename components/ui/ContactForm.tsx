"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { CONTACT_FORM_ENDPOINT, FORM_MOCK_MODE } from "@/lib/form-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      if (FORM_MOCK_MODE) {
        // Mock submission for development
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form data (mock):", data);
      } else {
        // Real Formspree submission
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
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
      <div className="text-center py-8">
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
        <h3 className="text-xl font-serif text-text-primary mb-2">
          Message Sent!
        </h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setSubmitStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          Something went wrong. Please try again or call us directly at (405)
          546-2228.
        </div>
      )}

      <FormInput
        label="Name"
        placeholder="Your name"
        required
        error={errors.name?.message}
        {...register("name")}
      />

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
        {...register("phone")}
      />

      <FormTextarea
        label="Message"
        placeholder="How can we help you?"
        rows={5}
        required
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Message
      </Button>
    </form>
  );
}
