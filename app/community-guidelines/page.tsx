import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Community Guidelines | Lovesathi",
  description: "The behavior, content, and trust standards for the Lovesathi matrimony community.",
}

export default function CommunityGuidelinesPage() {
  return (
    <LegalPage
      eyebrow="Community Guidelines"
      title="A respectful community for marriage-minded introductions."
      description="These guidelines set expectations for profiles, photos, messages, events, family participation, and reports across Lovesathi."
      sections={[
        {
          title: "Be truthful",
          body: "Use your real identity, age, relationship status, location, education, profession, family context, and intentions. Do not impersonate another person, operate a profile without consent, use stolen or misleading photos, or create duplicate profiles to evade enforcement.",
        },
        {
          title: "Use Lovesathi for matrimony",
          body: "Lovesathi is for lawful, serious matrimonial introductions. Do not use it for casual solicitation, escorting, commercial promotion, recruiting, lead generation, political campaigning, or any activity unrelated to respectful partner discovery.",
        },
        {
          title: "Communicate with consent",
          body: "Respect a member's boundaries, pace, family choices, and decision to stop communicating. Do not threaten, pressure, manipulate, stalk, repeatedly contact after a block, or request private information before trust has been established.",
        },
        {
          title: "No money, fraud, or exploitation",
          body: "Never ask for or send money, gifts, loans, investments, travel payments, emergency funds, or financial credentials because of a Lovesathi introduction. Report requests for money, blackmail, extortion, trafficking, dowry demands, or suspicious links immediately.",
        },
        {
          title: "Keep content appropriate",
          body: "Do not upload sexually explicit, exploitative, hateful, violent, abusive, discriminatory, illegal, infringing, or child-endangering content. Photos and descriptions must be relevant to a matrimonial profile and must not expose another person's private information without consent.",
        },
        {
          title: "Report and block",
          body: "Use the in-app report and block controls for profiles, photos, conversations, and suspicious behavior. Reports help the trust team investigate, limit reach, remove content, suspend accounts, preserve evidence where appropriate, and respond to lawful requests.",
        },
        {
          title: "Enforcement and appeals",
          body: "We may remove content, limit discovery, pause messaging, require verification, suspend, or permanently delete accounts when safety, law, fraud prevention, or community trust requires it. Contact support@lovesathi.com if you believe an action was incorrect and include the relevant account or report details.",
        },
      ]}
    />
  )
}
