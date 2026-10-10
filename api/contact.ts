import type { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";

// Simple helper to parse json body in node serverless function
const parseBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
};

export default async function handler(req: any, res: any) {
  // Enable CORS if needed
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const data = req.body || (await parseBody(req));
    const { name, email, subject, company, message } = data;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields." });
    }

    const gmailUser = process.env.GMAIL_USER || "as8009067@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      return res.status(500).json({
        error: "GMAIL_APP_PASSWORD is not configured in Vercel environment variables.",
      });
    }

    // Direct Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ""), // clean any spaces in app password
      },
    });

    const emailSubject = subject
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] New message from ${name}`;

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: gmailUser,
      subject: emailSubject,
      text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nCompany: ${
        company || "N/A"
      }\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #000; background: #ffffff; color: #111;">
          <div style="border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #e50914; text-transform: uppercase; font-size: 20px;">New Message from Portfolio</h2>
            <p style="margin: 4px 0 0 0; color: #666; font-size: 12px; font-family: monospace;">Recipient: ${gmailUser}</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #333;">Sender Name:</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Sender Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #e50914; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Company / Org:</td>
              <td style="padding: 8px 0; color: #111;">${company || "Individual / Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
              <td style="padding: 8px 0; color: #111;">${subject || "Portfolio Inquiry"}</td>
            </tr>
          </table>

          <div style="border-top: 2px dashed #ccc; padding-top: 16px;">
            <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #555;">Message Content:</h3>
            <div style="background: #f4f4f4; padding: 16px; border-left: 4px solid #e50914; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #222;">
              ${message}
            </div>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; text-align: center; font-size: 11px; color: #888; font-family: monospace;">
            Hit 'Reply' in Gmail to respond directly to ${email}.
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully to Gmail!" });
  } catch (error: any) {
    console.error("Gmail SMTP error:", error);
    return res.status(500).json({
      error: error.message || "Failed to send email via Gmail SMTP.",
    });
  }
}
