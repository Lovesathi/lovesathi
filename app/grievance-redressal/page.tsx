import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Grievance Redressal Policy | Lovesathi",
  description: "Lovesathi grievance and complaint process under applicable Indian information-technology rules.",
}

export default function GrievanceRedressalPage() {
  return (
    <LegalPage
      eyebrow="Grievance Redressal Policy"
      title="A documented path for complaints and appeals."
      description="This page explains how members, families, and other affected people can raise complaints about content, accounts, privacy, safety, or Lovesathi's platform practices."
      sections={[
        {
          title: "Grievance contact",
          body: "Grievance Officer: Lovesathi Grievance Desk. Email: support@lovesathi.com. Use the subject line 'Grievance Redressal' and include your name, account email or public member ID, the issue, relevant URLs or screenshots, and the outcome you are requesting. Do not send passwords, OTPs, or complete identity documents by email.",
        },
        {
          title: "What can be reported",
          body: "You may raise a complaint about unlawful or objectionable content, impersonation, harassment, privacy, child safety, account action, profile misuse, contact-safety controls, accessibility, a support interaction, or a failure to follow Lovesathi's Terms, Privacy Policy, Community Guidelines, or Content Moderation Policy.",
        },
        {
          title: "How we review complaints",
          body: "We acknowledge and assess grievances using the information provided, relevant account and report records, applicable law, and the safety of members and the public. We may ask for reasonable verification, limit disclosure during an investigation, and take content or account action where appropriate.",
        },
        {
          title: "Response and escalation",
          body: "We aim to provide a reasoned response within the timelines required by applicable law. Urgent child-safety or imminent-harm concerns should also be reported through the in-app safety tools and to local emergency services or law enforcement where necessary. If a matter requires a statutory or appellate route, we will provide the information available under applicable law.",
        },
        {
          title: "Privacy and records",
          body: "Complaint details may be retained for safety, fraud prevention, legal compliance, audit, dispute resolution, and enforcement. We handle grievance information under the Privacy Policy and share it only with service providers, reviewers, or authorities who need it for a lawful and legitimate purpose.",
        },
        {
          title: "Important contact setup",
          body: "The role-based grievance desk is the public contact for this policy. The Lovesathi operator should keep the responsible officer's legal name, business address, and mailbox current in its statutory records and update this page when those details change.",
        },
      ]}
    />
  )
}
