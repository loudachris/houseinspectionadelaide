import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const honeypot = String(formData.get("company_url") || "");
    if (honeypot.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const propertyAddress = String(formData.get("property_address") || "").trim();
    const suburb = String(formData.get("suburb") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const propertyType = String(formData.get("property_type") || "").trim();
    const notes = String(formData.get("notes") || "").trim();

    if (!name || !phone || !email || !propertyAddress) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us on 0403 454 199." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const replyTo = process.env.RESEND_REPLY_TO || "chris@loudachris.com.au";
    const from =
      process.env.RESEND_FROM ||
      "House Inspection Adelaide <houseinspectionadelaide@loudachriswebsites.com.au>";

    const subject = `Quote request from ${name}${suburb ? ` (${suburb})` : ""}`;

    const html = `
<!doctype html>
<html lang="en">
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #14232F; background: #FAFAFA; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 28px; border: 1px solid #E6E9EE;">
    <h1 style="font-size: 20px; margin: 0 0 8px; color: #1E3A5F;">New quote request</h1>
    <p style="color: #6B7A87; margin: 0 0 20px; font-size: 14px;">House Inspection Adelaide / website form</p>

    <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr><td style="padding: 8px 0; color: #6B7A87; width: 160px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6B7A87;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeAttr(phone)}" style="color: #1E3A5F;">${escapeHtml(phone)}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #6B7A87;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeAttr(email)}" style="color: #1E3A5F;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #6B7A87;">Property</td><td style="padding: 8px 0;">${escapeHtml(propertyAddress)}</td></tr>
      ${suburb ? `<tr><td style="padding: 8px 0; color: #6B7A87;">Suburb</td><td style="padding: 8px 0;">${escapeHtml(suburb)}</td></tr>` : ""}
      ${service ? `<tr><td style="padding: 8px 0; color: #6B7A87;">Inspection</td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>` : ""}
      ${timeline ? `<tr><td style="padding: 8px 0; color: #6B7A87;">Timeline</td><td style="padding: 8px 0;">${escapeHtml(timeline)}</td></tr>` : ""}
      ${propertyType ? `<tr><td style="padding: 8px 0; color: #6B7A87;">Property type</td><td style="padding: 8px 0;">${escapeHtml(propertyType)}</td></tr>` : ""}
    </table>

    ${
      notes
        ? `<div style="margin-top: 16px; padding: 14px 16px; background: #FAF6EE; border-radius: 8px; font-size: 14px;"><strong style="color: #1E3A5F;">Notes:</strong><br />${escapeHtml(notes).replace(/\n/g, "<br />")}</div>`
        : ""
    }

    <p style="margin-top: 24px; font-size: 13px; color: #6B7A87;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
  </div>
</body>
</html>`.trim();

    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Property: ${propertyAddress}`,
      suburb && `Suburb: ${suburb}`,
      service && `Inspection: ${service}`,
      timeline && `Timeline: ${timeline}`,
      propertyType && `Property type: ${propertyType}`,
      notes && `\nNotes:\n${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from,
      to: [replyTo],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend send error", error);
      return NextResponse.json(
        { error: "Could not send right now. Please call us on 0403 454 199." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote API error", err);
    return NextResponse.json(
      { error: "Unexpected error. Please call us on 0403 454 199." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}
