import { Resend } from "resend";

// Initialize Resend lazily to avoid build-time errors
let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

interface Attachment {
  filename: string;
  content: Buffer;
}

interface QuoteData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  material: string;
  details: string;
  attachments?: Attachment[];
}

const serviceLabels: Record<string, string> = {
  printing: "3D Printing",
  modeling: "3D Modeling / Design",
  scanning: "3D Scanning",
  reverse: "Reverse Engineering",
  batch: "Batch Production Run",
  unsure: "Not sure yet — need guidance",
};

const materialLabels: Record<string, string> = {
  "": "Not specified",
  pla: "PLA — Prototypes & display",
  petg: "PETG — Functional parts",
  abs: "ABS — Heat & impact resistant",
  tpu: "TPU — Flexible parts",
  other: "Other / need advice",
};

export async function sendQuoteEmail(data: QuoteData) {
  const { firstName, lastName, email, phone, service, material, details, attachments } = data;
  const fileNames = attachments?.map((a) => a.filename);

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
    .field-value { font-size: 16px; color: #0f172a; }
    .highlight { background: #fff7ed; border-left: 4px solid #f97316; padding: 15px; border-radius: 0 8px 8px 0; margin: 20px 0; }
    .details-box { background: #f8fafc; padding: 20px; border-radius: 8px; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none; text-align: center; font-size: 13px; color: #64748b; }
    .badge { display: inline-block; background: #f0f7ff; color: #0c8ce9; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; }
    a { color: #f97316; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📋 New Quote Request</h1>
    </div>
    <div class="content">
      <div class="highlight">
        <strong>New quote request from ${firstName} ${lastName}</strong>
      </div>

      <div class="field">
        <div class="field-label">Contact Information</div>
        <div class="field-value">
          <strong>${firstName} ${lastName}</strong><br>
          Email: <a href="mailto:${email}">${email}</a><br>
          Phone: ${phone || "Not provided"}
        </div>
      </div>

      <div class="field">
        <div class="field-label">Service Requested</div>
        <div class="field-value">
          <span class="badge">${serviceLabels[service] || service}</span>
        </div>
      </div>

      <div class="field">
        <div class="field-label">Preferred Material</div>
        <div class="field-value">${materialLabels[material] || material || "Not specified"}</div>
      </div>

      <div class="field">
        <div class="field-label">Project Details</div>
        <div class="details-box">${details}</div>
      </div>

      ${fileNames && fileNames.length > 0 ? `
      <div class="field">
        <div class="field-label">Files Attached</div>
        <div class="field-value">${fileNames.join(", ")}</div>
      </div>
      ` : ""}
    </div>
    <div class="footer">
      This quote request was submitted via the 3D Labs OKC website.<br>
      Reply directly to this email to respond to the customer.
    </div>
  </div>
</body>
</html>
  `;

  const textContent = `
NEW QUOTE REQUEST - 3D Labs OKC
================================

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Service Requested: ${serviceLabels[service] || service}
Preferred Material: ${materialLabels[material] || material || "Not specified"}

Project Details:
${details}

${fileNames && fileNames.length > 0 ? `Files Attached: ${fileNames.join(", ")}` : ""}

---
This quote request was submitted via the 3D Labs OKC website.
Reply directly to this email to respond to the customer.
  `;

  // Send to business
  const result = await getResend().emails.send({
    from: "3D Labs OKC <quotes@3dlabsokc.com>",
    to: ["Connect@3dlabsokc.com"],
    replyTo: email,
    subject: `Quote Request: ${serviceLabels[service] || service} — ${firstName} ${lastName}`,
    html: htmlContent,
    text: textContent,
    attachments: attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  });

  // Send confirmation to customer
  await sendCustomerConfirmation({ firstName, email, service });

  return result;
}

async function sendCustomerConfirmation(data: { firstName: string; email: string; service: string }) {
  const { firstName, email, service } = data;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
    .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
    .logo span { color: #36a5ff; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
    .check { width: 60px; height: 60px; background: #f0fdf4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 30px; }
    h2 { text-align: center; color: #0f172a; margin-bottom: 20px; }
    .info-box { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .footer { background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none; text-align: center; font-size: 13px; color: #64748b; }
    a { color: #f97316; }
    .btn { display: inline-block; background: #f97316; color: white !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">3D Labs <span>OKC</span></div>
    </div>
    <div class="content">
      <div class="check">✓</div>
      <h2>We received your quote request!</h2>

      <p>Hi ${firstName},</p>

      <p>Thanks for reaching out about your <strong>${serviceLabels[service] || service}</strong> project. We've received your request and will get back to you within one business day — usually much sooner.</p>

      <div class="info-box">
        <strong>What happens next?</strong>
        <ul>
          <li>We'll review your project details</li>
          <li>We may reach out with clarifying questions</li>
          <li>You'll receive a detailed quote via email</li>
        </ul>
      </div>

      <p>Need to add more details or have questions? Just reply to this email or give us a call.</p>

      <p style="text-align: center;">
        <a href="tel:4055462228" class="btn">📞 Call (405) 546-2228</a>
      </p>
    </div>
    <div class="footer">
      3D Labs OKC<br>
      10802 Quail Plaza Dr, STE 120A, Oklahoma City, OK 73120<br>
      <a href="https://3dlabsokc.com">3dlabsokc.com</a>
    </div>
  </div>
</body>
</html>
  `;

  await getResend().emails.send({
    from: "3D Labs OKC <quotes@3dlabsokc.com>",
    to: [email],
    subject: "We received your quote request — 3D Labs OKC",
    html: htmlContent,
  });
}
