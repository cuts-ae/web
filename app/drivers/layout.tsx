import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Drivers - Deliver with Cuts",
  description: "Earn competitive pay with flexible hours delivering healthy meals in UAE. Join Cuts&apos;s driver community with weekly payouts and 24/7 support.",
  keywords: ["delivery driver jobs", "Abu Dhabi jobs", "flexible work", "driver earnings", "food delivery"],
  openGraph: {
    title: "For Drivers - Deliver with Cuts",
    description: "Flexible hours, competitive pay, supportive community",
    type: "website",
  },
};

export default function DriversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
