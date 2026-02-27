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

    // Process file attachments
    const files = formData.getAll("files") as File[];
    const attachments: { filename: string; content: Buffer }[] = [];

    for (const file of files) {
      if (file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(arrayBuffer),
        });
      }
    }

    console.log(`Sending email with ${attachments.length} attachment(s)...`);

    // Send email notification
    const result = await sendQuoteEmail({
      ...data,
      attachments: attachments.length > 0 ? attachments : undefined,
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
