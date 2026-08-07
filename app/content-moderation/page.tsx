import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Content Moderation Policy | Lovesathi",
  description: "How Lovesathi reviews reports, moderates profiles and messages, and protects the matrimony community.",
}

export default function ContentModerationPage() {
  return (
    <LegalPage
      eyebrow="Content Moderation Policy"
      title="A clear review process for safer introductions."
      description="Lovesathi combines member reporting, blocking, safety review, profile controls, and operational moderation to reduce harmful or deceptive content."
      sections={[
        {
          title: "What we moderate",
          body: "We may review profile details, photos, messages, event submissions, verification signals, reports, and behavior connected to safety, fraud, impersonation, harassment, spam, child safety, privacy, or these policies.",
        },
        {
          title: "How reports work",
          body: "Members can report and block profiles or conversations from in-app controls. Reports should explain what happened and include the relevant profile or message context. A report does not automatically prove a violation, but it creates a review signal for the trust and safety team.",
        },
        {
          title: "Review actions",
          body: "Depending on the evidence and risk, we may request clarification or verification, limit visibility, remove a photo or message, pause contact features, hide a profile, suspend or delete an account, preserve relevant records, or refer a matter to lawful authorities.",
        },
        {
          title: "Automated and human review",
          body: "We may use technical checks to detect phone-number sharing, spam, suspicious patterns, unsafe links, or policy signals. Important enforcement decisions may require human review, and automated signals are not a guarantee that content is safe or accurate.",
        },
        {
          title: "Appeals and corrections",
          body: "If you believe content or an account action was incorrect, contact support@lovesathi.com with the account identifier, action date, and a concise explanation. Do not create another account to evade an active restriction while an appeal is under review.",
        },
        {
          title: "Response and confidentiality",
          body: "We prioritize urgent child-safety, credible threats, exploitation, fraud, and imminent harm reports. We may limit the information we disclose about an investigation to protect reporters, members, evidence, privacy, and lawful processes.",
        },
      ]}
    />
  )
}
