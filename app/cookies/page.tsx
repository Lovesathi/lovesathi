import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Cookie Policy | Lovesathi",
  description: "How Lovesathi uses cookies and similar technologies on its website and web app.",
}

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Small, purposeful technologies that keep Lovesathi working."
      description="This policy explains cookies and similar storage used to keep sessions secure, remember preferences, understand reliability, and improve the product."
      sections={[
        {
          title: "What cookies are",
          body: "Cookies are small files or values stored by a browser. Similar technologies may include session storage, local storage, pixels, SDK identifiers, and security tokens. They can be first-party, created by Lovesathi, or provided by a service used to operate a specific feature.",
        },
        {
          title: "Essential cookies and storage",
          body: "We use essential storage for authentication sessions, security, consent state, load balancing, accessibility, and basic preferences. These technologies are required for sign-in, account protection, and core app functionality and generally cannot be disabled without affecting the service.",
        },
        {
          title: "Preference and reliability technologies",
          body: "Where enabled, we may remember interface preferences and use limited technical signals to diagnose errors, measure performance, protect against abuse, and keep pages reliable. We do not use cookies to sell member profiles or messages to advertisers.",
        },
        {
          title: "Third-party services",
          body: "Authentication, hosting, analytics, payment, security, or embedded services may set their own technical identifiers when needed for the feature they provide. Their processing is governed by their own policies and the agreements in place with Lovesathi.",
        },
        {
          title: "Your choices",
          body: "You can control cookies through browser settings, clear stored data, use private browsing, or adjust available consent controls. Blocking essential cookies may sign you out or prevent profile, chat, and account features from working properly.",
        },
        {
          title: "Updates and questions",
          body: "We may update this policy when technologies or legal requirements change. For questions about a cookie, storage item, or privacy request, contact support@lovesathi.com and include the page or feature involved without sending passwords or authentication codes.",
        },
      ]}
    />
  )
}
