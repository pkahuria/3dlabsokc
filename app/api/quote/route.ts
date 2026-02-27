import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  console.log("Quote API called");

  try {
    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    console.log("Form data received");

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      service: formData.get("service") as string,
      material: (formData.get("material") as string) || "",
      details: formData.get("details") as string,
    };

    console.log("Data extracted:", { ...data, details: "[redacted]" });

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.service || !data.details) {
      console.error("Missing required fields:", {
        hasFirstName: !!data.firstName,
        hasLastName: !!data.lastName,
        hasEmail: !!data.email,
        hasService: !!data.service,
        hasDetails: !!data.details,
      });
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get file names (for now, just capture names - S3 upload can be added later)
    const files = formData.getAll("files") as File[];
    const fileNames = files
      .filter((file) => file.size > 0)
      .map((file) => file.name);

    console.log("Sending email...");

    // Send email notification
    const result = await sendQuoteEmail({
      ...data,
      fileNames: fileNames.length > 0 ? fileNames : undefined,
    });

    if (result.error) {
      console.error("Email send error:", JSON.stringify(result.error));
      return NextResponse.json(
        { success: false, message: "Failed to send email", error: result.error },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", result.data?.id);

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote:", error instanceof Error ? error.message : error);
    console.error("Full error:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    return NextResponse.json(
      { success: false, message: "Failed to process request", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
