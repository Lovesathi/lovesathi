import type { MetadataRoute } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://lovesathi.com").replace(/\/$/, "")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    "/",
    "/auth",
    "/events",
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
    "/faq",
    "/contact",
    "/contact-support",
    "/account-deletion",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/events" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/events" ? 0.85 : 0.7,
  }))
}
