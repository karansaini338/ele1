"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Email validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  country: z.string().min(1, { message: "Please select your country." }),
  interest: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

// Type for the form data
export type FormData = z.infer<typeof formSchema>

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // In production, these would be environment variables
    user: "deepakmittald129@gmail.com", // Replace with your email or use env variable
    pass:  "@02", // Replace with your app password or use env variable
  },
})

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)
    console.log("Sending mails")
    // Prepare email content
    const mailOptions = {
      from: "deepshikhu2@gmail.com", // Replace with your email
      to: "deepakmittald129@gmail.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: "Hello my name is deepak"
    //   html: `
    //     <h1>New Contact Form Submission</h1>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
    //     <p><strong>Country:</strong> ${validatedData.country}</p>
    //     <p><strong>Interest:</strong> ${validatedData.interest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
    //   `,
    }

    // Send email
   const res = await transporter.sendMail(mailOptions)
   console.log(res, "from mails")
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error. Please check your inputs.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}
