import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Policies | Lovesathi",
  description: "Lovesathi terms, privacy, safety, moderation, support, and account policies.",
}

const policies = [
  ["Terms & Conditions", "/terms", "The rules for using Lovesathi and participating in matrimonial introductions."],
  ["Privacy Policy", "/privacy", "How profile, verification, message, support, and safety data are handled."],
  ["Refund & Cancellation Policy", "/refund-cancellation", "Purchase-channel rules for cancellations, refunds, renewals, and billing support."],
  ["Child Safety Standards", "/child-safety-standards", "Lovesathi's CSAE, CSAM prevention, reporting, and safety contact standards."],
  ["Community Guidelines", "/community-guidelines", "The behavior and content standards for a respectful matrimony community."],
  ["Cookie Policy", "/cookies", "How cookies and similar technologies support sessions, preferences, and reliability."],
  ["Content Moderation Policy", "/content-moderation", "How reports, blocking, automated signals, human review, and appeals work."],
  ["Account Deletion Policy", "/account-deletion", "How to request account deletion and what records may be retained."],
  ["Grievance Redressal Policy", "/grievance-redressal", "How to raise complaints and appeals under applicable Indian rules."],
  ["Contact & Support Policy", "/contact-support", "How to reach support, safety, privacy, billing, and WhatsApp assistance."],
] as const

export default function PoliciesPage() {
  return (
    <main className="luxe-light-page min-h-screen px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-10 flex items-center justify-between rounded-lg border border-[#482b1a]/10 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3 text-[#26364A] no-underline">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E83262] text-white">
              <Heart className="h-5 w-5 fill-current" />
            </span>
            <span className="font-serif text-2xl font-bold tracking-[-0.05em]">Lovesathi</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-[#E83262] hover:underline">Back home</Link>
        </nav>

        <header className="luxe-card rounded-lg p-6 sm:p-10">
          <p className="luxe-kicker text-[#E83262]">Trust, privacy, and support</p>
          <h1 className="mt-3 font-serif text-5xl font-bold tracking-[-0.055em] text-[#26364A] sm:text-7xl">Lovesathi policies</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6F7C8B]">Read the policies that govern profiles, conversations, safety, paid features, support, and account control across Lovesathi.</p>
          <p className="mt-5 rounded-2xl border border-[#E83262]/20 bg-white/70 p-4 text-sm leading-6 text-[#6F7C8B]">Last updated: August 7, 2026. These pages describe the live product experience and should receive final legal review before statutory or store submission.</p>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {policies.map(([title, href, description]) => (
            <Link key={href} href={href} className="group rounded-lg border border-[#482b1a]/10 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#E83262]/35">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-serif text-2xl font-bold text-[#26364A]">{title}</h2>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#E83262] transition group-hover:translate-x-1" />
              </div>
              <p className="mt-3 leading-7 text-[#6F7C8B]">{description}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
