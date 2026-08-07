import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lovesathi.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/auth",
          "/policies",
          "/terms",
          "/privacy",
          "/refund-cancellation",
          "/safety",
          "/community-guidelines",
          "/cookies",
          "/content-moderation",
          "/child-safety-standards",
          "/grievance-redressal",
          "/contact",
          "/contact-support",
          "/faq",
          "/account-deletion",
        ],
        disallow: ["/admin", "/api", "/profile", "/matrimony", "/onboarding"],
      },
    ],
    sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  }
}
