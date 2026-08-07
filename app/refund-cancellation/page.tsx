import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Lovesathi",
  description: "How Lovesathi handles plan cancellations, refunds, store purchases, and support requests.",
}

export default function RefundCancellationPage() {
  return (
    <LegalPage
      eyebrow="Refund & Cancellation Policy"
      title="Clear rules for memberships and paid features."
      description="This policy explains cancellation, refunds, failed transactions, renewals, and the support path for Lovesathi memberships and paid features."
      sections={[
        {
          title: "Which purchase rules apply",
          body: "The purchase channel controls the transaction. Purchases made through Google Play, the Apple App Store, or another payment provider are also subject to that provider's billing, cancellation, and refund rules. Where a mandatory consumer-protection rule gives you a different right, that rule applies.",
        },
        {
          title: "Cancellation",
          body: "You may stop a recurring subscription through the store or payment provider that billed you. Cancellation normally prevents the next renewal and does not automatically reverse benefits already activated. Access may continue until the end of the paid period unless the provider states otherwise.",
        },
        {
          title: "Refund requests",
          body: "Submit refund requests to the provider that processed the payment, or contact support@lovesathi.com with your account email, plan, transaction reference, date, and reason. Lovesathi may help investigate a payment issue, but the payment provider may be the party that can approve or issue the refund.",
        },
        {
          title: "When a refund may be considered",
          body: "Refunds may be considered for duplicate charges, an unauthorised transaction, a technical failure that prevented paid access, a confirmed billing error, or another situation required by applicable law or the relevant payment provider's rules. A refund is not guaranteed merely because a member did not use an activated benefit.",
        },
        {
          title: "Promotions and discounts",
          body: "A discount, offer, or promotional price may have its own eligibility, validity, plan, and expiry conditions. Unless the offer expressly says otherwise, a discount does not create a cash value, cannot be transferred, and does not retroactively change an earlier completed transaction.",
        },
        {
          title: "Account action and refunds",
          body: "Deleting, hiding, or suspending an account does not itself cancel a store subscription or guarantee a refund. Cancel the subscription through the original billing channel and contact support if a safety or account-access issue prevents you from doing so.",
        },
        {
          title: "Support response",
          body: "We aim to acknowledge billing requests promptly and may ask for reasonable information to locate the transaction and prevent fraud. Never send a password, one-time code, full payment-card number, or secret key by email or chat.",
        },
      ]}
    />
  )
}
