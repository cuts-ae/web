import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Cuts",
  description: "Have questions? Contact Cuts&apos;s team in UAE. We&apos;re here to help with restaurant partnerships, driver applications, and customer inquiries.",
  keywords: ["contact Cuts", "customer support", "UAE contact", "get in touch", "help"],
  openGraph: {
    title: "Contact Us - Get in Touch with Cuts",
    description: "We&apos;d love to hear from you",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
