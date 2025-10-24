import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Cut",
  description: "Have questions? Contact Cut&apos;s team in Abu Dhabi. We&apos;re here to help with restaurant partnerships, driver applications, and customer inquiries.",
  keywords: ["contact Cut", "customer support", "Abu Dhabi contact", "get in touch", "help"],
  openGraph: {
    title: "Contact Us - Get in Touch with Cut",
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
