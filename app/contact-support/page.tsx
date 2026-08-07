import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Contact & Support Policy | Lovesathi",
  description: "How Lovesathi handles account support, safety reports, billing questions, and member complaints.",
}

export default function ContactSupportPage() {
  return (
    <LegalPage
      eyebrow="Contact & Support Policy"
      title="Help should be easy to find when it matters."
      description="This policy explains the support channels available to Lovesathi members and how requests are routed for account, safety, privacy, billing, and product help."
      sections={[
        {
          title: "General support",
          body: "For sign-in, profile, onboarding, discovery, chat, subscription, account, or product questions, email support@lovesathi.com. Include the email used on the account, public member ID if available, a short description, and screenshots that do not expose passwords or one-time codes.",
        },
        {
          title: "Safety and child-safety reports",
          body: "For abuse, scams, impersonation, harassment, threats, child-safety concerns, or verification disputes, use the in-app report and block tools and email safety@lovesathi.com. For immediate danger, contact local emergency services or law enforcement first.",
        },
        {
          title: "WhatsApp assistance",
          body: "Lovesathi may provide a WhatsApp support channel at +91 91755 54708 for profile help, launch support, and general questions. Do not send passwords, OTPs, payment-card details, or identity documents through WhatsApp unless support gives a secure, verified process.",
        },
        {
          title: "Account deletion and privacy",
          body: "Use the in-app deletion flow or the public Account Deletion page for account removal. For privacy access, correction, or data questions, contact support@lovesathi.com with 'Privacy Request' in the subject line.",
        },
        {
          title: "Billing and refunds",
          body: "For a payment or refund question, include the billing provider, plan, transaction reference, and date. Do not send full payment-card numbers. See the Refund & Cancellation Policy for the applicable purchase-channel rules.",
        },
        {
          title: "Response expectations",
          body: "Support requests are triaged by urgency. Child-safety, credible threats, account compromise, and active fraud reports receive priority. Other requests are reviewed as soon as reasonably possible, and we may ask for reasonable verification before changing an account or disclosing information.",
        },
      ]}
    />
  )
}
