import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { to, subject, text, from, phoneNumber, name } = body;

    try {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.ADMIN_EMAIL,
          pass: process.env.ADMIN_PASSWORD,
        },
      });

      var mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: to,
        subject: `${subject} from Portfolio`,
        text: `I am ${name} \n
          I want to connect with you \n
          Below are my details
          Email: ${from}
          Phonenumber: ${phoneNumber}
          Message: ${text}
        `,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Mail Error", error);
          throw new Error("Mail Error", error);
        }
      });
      return NextResponse.json({
        data: {
          message: "Send Mail Successfully",
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error handling JSON payload:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
