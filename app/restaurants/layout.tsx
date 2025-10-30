import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Restaurants - Partner with Cuts",
  description: "Join Cuts&apos;s health-focused food delivery platform. Reach health-conscious customers in UAE with fair 15% commission and powerful restaurant tools.",
  keywords: ["restaurant partnership", "food delivery", "Abu Dhabi restaurants", "healthy food", "restaurant platform"],
  openGraph: {
    title: "For Restaurants - Partner with Cuts",
    description: "Join the healthiest food delivery platform in UAE",
    type: "website",
  },
};

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
