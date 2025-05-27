"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendEmail, type FormData } from "@/actions/send-email"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ContactFormProps {
  title?: string
  description?: string
  compact?: boolean
  className?: string
}

export default function ContactForm({
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you as soon as possible.",
  compact = false,
  className = "",
}: ContactFormProps) {
  // Update the state to include field-specific errors
  const [formState, setFormState] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
    country: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  // Add this to the handleChange function to clear field errors when the user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear the error for this field when the user changes it
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Add client-side validation before submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setFieldErrors({})

    // Basic client-side validation
    const errors: Record<string, string> = {}

    if (formState.name.length < 2) {
      errors.name = "Name must be at least 2 characters."
    }

    if (!formState.email.includes("@")) {
      errors.email = "Please enter a valid email address."
    }

    if (!formState.country) {
      errors.country = "Please select your country."
    }

    if (formState.message.length < 10) {
      errors.message = "Message must be at least 10 characters."
    }

    // If there are validation errors, don't submit the form
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      const result = await sendEmail(formState)

      if (result.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          interest: "general",
          country: "",
        })
      } else {
        setFormError(result.message)

        // Handle field-specific validation errors
        if (result.errors && Array.isArray(result.errors)) {
          const errors: Record<string, string> = {}
          result.errors.forEach((error) => {
            if (error.path && error.path.length > 0) {
              errors[error.path[0].toString()] = error.message
            }
          })
          setFieldErrors(errors)
        }
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again later.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={`border-0 shadow-lg overflow-hidden ${className}`}>
      <CardHeader className={`${compact ? "p-4" : "p-6"} bg-rajasthani-green text-white`}>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-white/80">{description}</CardDescription>
      </CardHeader>
      <CardContent className={compact ? "p-4" : "p-6"}>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
          >
            <CheckCircle className="h-12 w-12 text-rajasthani-green mx-auto mb-4" />
            <h3 className="text-lg font-bold text-rajasthani-green mb-2">Thank You!</h3>
            <p className="text-gray-600 text-sm">
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </p>
            <Button
              className="mt-4 bg-rajasthani-green hover:bg-rajasthani-darkGreen"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            {/* Update the form fields to display field-specific errors */}
            {/* For example, for the name field: */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={fieldErrors.name ? "border-red-500" : ""}
              />
              {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
            </div>

            {/* Update the email field: */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className={fieldErrors.email ? "border-red-500" : ""}
              />
              {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm">
                Phone (optional)
              </Label>
              <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} />
            </div>

            {/* Update the country field: */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-sm">
                Country
              </Label>
              <select
                id="country"
                name="country"
                value={formState.country}
                onChange={handleChange}
                className={`w-full rounded-md border ${fieldErrors.country ? "border-red-500" : "border-input"} bg-background px-3 py-2`}
                required
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="SG">Singapore</option>
                <option value="JP">Japan</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="NL">Netherlands</option>
                <option value="BR">Brazil</option>
                <option value="ZA">South Africa</option>
                <option value="AE">United Arab Emirates</option>
                <option value="other">Other</option>
              </select>
              {fieldErrors.country && <p className="text-red-500 text-xs mt-1">{fieldErrors.country}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="text-sm">
                Elephant Activities
              </Label>
              <select
                id="interest"
                name="interest"
                value={formState.interest}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              >
                <option value="general">General Information</option>
                <option value="meet">Meet With Elephant</option>
                <option value="feed">Feed With Elephant</option>
                <option value="paint">Paint With Elephant</option>
                <option value="shower">Elephant Shower</option>
                <option value="walk">Elephant Walk</option>
                <option value="treat">Treat With Elephant</option>
              </select>
            </div>

            {/* For the message field, add the error display: */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={compact ? 3 : 4}
                value={formState.message}
                onChange={handleChange}
                required
                className={fieldErrors.message ? "border-red-500" : ""}
              />
              {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-rajasthani-green hover:bg-rajasthani-darkGreen flex items-center justify-center text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
