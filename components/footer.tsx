import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Download App", href: "/download" },
        { label: "How it Works", href: "/how-it-works" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "For Partners",
      links: [
        { label: "Restaurants", href: "/restaurants" },
        { label: "Drivers", href: "/drivers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-semibold text-black mb-4">Cuts</div>
            <p className="text-sm text-gray-600">
              Healthy meals, delivered with care.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-black text-sm mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Cuts LLC, Abu Dhabi. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
