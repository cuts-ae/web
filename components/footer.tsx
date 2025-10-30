/**
 * Footer Component
 *
 * Purpose: Global site footer with links and company information
 * Features: Multi-column link sections, copyright notice, consistent branding
 * Accessibility: WCAG AA compliant with semantic HTML structure
 *
 * @module components/footer
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";

/* ========================================================================
   TYPE DEFINITIONS
   ======================================================================== */

/**
 * Footer link structure
 */
interface FooterLink {
  /** Link display text */
  label: string;
  /** Target URL path */
  href: string;
}

/**
 * Footer section structure containing multiple links
 */
interface FooterSection {
  /** Section heading */
  title: string;
  /** Array of links in this section */
  links: FooterLink[];
}

/* ========================================================================
   CONSTANTS
   ======================================================================== */

/**
 * Footer link sections
 * Organized by category for easy navigation
 */
const FOOTER_SECTIONS: FooterSection[] = [
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
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
];

/**
 * Current year for copyright notice
 * Automatically updates each year
 */
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Company name for branding
 */
const COMPANY_NAME = "Cuts";

/**
 * Company tagline
 */
const COMPANY_TAGLINE = "Healthy meals, delivered with care.";

/**
 * Company location
 */
const COMPANY_LOCATION = "Abu Dhabi, United Arab Emirates";

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */

/**
 * Footer component
 * Site-wide footer with navigation links and company information
 *
 * @returns Rendered footer element
 */
export function Footer() {
  return (
    <footer
      className="border-t border-gray-200 py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container>
        {/* ================================================================
            FOOTER GRID
            Brand column + link sections
            ================================================================ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* ================================================================
              BRAND COLUMN
              Company name and tagline
              ================================================================ */}
          <div>
            <div className="font-semibold text-black mb-4">{COMPANY_NAME}</div>
            <p className="text-sm text-gray-600">{COMPANY_TAGLINE}</p>
          </div>

          {/* ================================================================
              LINK SECTIONS
              Multiple columns of categorized links
              ================================================================ */}
          {FOOTER_SECTIONS.map((section) => (
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

        {/* ================================================================
            COPYRIGHT NOTICE
            Legal text and company information
            ================================================================ */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © {CURRENT_YEAR} {COMPANY_NAME} LLC, {COMPANY_LOCATION}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
