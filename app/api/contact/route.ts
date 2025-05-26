import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: "Server configuration error: Missing email credentials" },
        { status: 500 }
      );
    }

    const { email, message } = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `Portfolio Contact Form - Message from ${email}`,
      text: `
        New message from your portfolio website:
        
        From: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
