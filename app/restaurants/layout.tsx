import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Restaurants - Partner with Cut",
  description: "Join Cut's health-focused food delivery platform. Reach health-conscious customers in Abu Dhabi with fair 15% commission and powerful restaurant tools.",
  keywords: ["restaurant partnership", "food delivery", "Abu Dhabi restaurants", "healthy food", "restaurant platform"],
  openGraph: {
    title: "For Restaurants - Partner with Cut",
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
