import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { formSchema } from "@/schema/validation"

// Put contacting email here
const MAIN_EMAIL = process.env.NEXT_PUBLIC_GMAIL_SMTP_EMAIL

export async function POST(request: Request) {
  const body = await request.json()
  
  try {
    // Validate the form data
    const validatedData = formSchema.parse(body)

    // Create transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: MAIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: validatedData.email,
      to: MAIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <div style="padding:50px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Service:</strong> ${validatedData.service}</p>
          <p><strong>Message:</strong> ${validatedData.message}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}