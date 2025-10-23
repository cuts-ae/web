import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cut - Our Mission & Story",
  description: "Learn about Cut's mission to make healthy eating accessible in the UAE. We're building a healthier future, one meal at a time.",
  keywords: ["about Cut", "healthy food mission", "UAE startup", "food delivery story", "nutrition platform"],
  openGraph: {
    title: "About Cut - Our Mission & Story",
    description: "Building a healthier UAE, one meal at a time",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
