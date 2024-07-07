import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { to, subject, text, from, phoneNumber } = body;

    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email provider here
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from,
        to,
        subject,
        text: text + `/n phoneNumber: ${phoneNumber}`,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error handling JSON payload:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
