import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      service: formData.get("service") as string,
      material: (formData.get("material") as string) || "",
      details: formData.get("details") as string,
    };

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.service || !data.details) {
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

    // Send email notification
    const result = await sendQuoteEmail({
      ...data,
      fileNames: fileNames.length > 0 ? fileNames : undefined,
    });

    if (result.error) {
      console.error("Email send error:", result.error);
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}
