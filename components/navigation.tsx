/**
 * Navigation Component
 *
 * Purpose: Global site navigation with responsive mobile menu
 * Features: Scroll-based backdrop blur, mobile hamburger menu, logo and CTA
 * Accessibility: WCAG AA compliant with proper ARIA labels and keyboard navigation
 *
 * @module components/navigation
 */

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/* ========================================================================
   TYPE DEFINITIONS
   ======================================================================== */

/**
 * Navigation link structure
 */
interface NavLink {
  /** Target URL path */
  href: string;
  /** Link display text */
  label: string;
}

/* ========================================================================
   CONSTANTS
   ======================================================================== */

/**
 * Main navigation links
 * Displayed in both desktop and mobile menus
 */
const NAV_LINKS: NavLink[] = [
  { href: "/restaurants", label: "For Restaurants" },
  { href: "/drivers", label: "For Drivers" },
];

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */

/**
 * Navigation component
 * Sticky header with responsive design and scroll effects
 *
 * @returns Rendered navigation bar
 */
export function Navigation() {
  // ========================================================================
  // STATE
  // ========================================================================

  /**
   * Tracks if page has been scrolled (for backdrop blur effect)
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Controls mobile menu open/close state
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ========================================================================
  // EFFECTS
  // ========================================================================

  /**
   * Set up scroll listener for backdrop blur effect
   * Adds blur when scrolled past 10px threshold
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200"
          : "bg-white"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* ================================================================
              LOGO
              Home link with logo image and brand name
              ================================================================ */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Cuts - Return to homepage"
          >
            <Image
              src="/logo.png"
              alt="Cuts logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-xl font-semibold text-black">Cuts</span>
          </Link>

          {/* ================================================================
              DESKTOP NAVIGATION
              Horizontal link list for larger screens
              ================================================================ */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ================================================================
              DESKTOP CTA BUTTON
              Primary action button for larger screens
              ================================================================ */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" aria-label="Download Cuts app">
              Download App
            </Button>
          </div>

          {/* ================================================================
              MOBILE MENU BUTTON
              Hamburger/close toggle for mobile menu
              ================================================================ */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* ================================================================
          MOBILE MENU
          Dropdown menu for small screens
          ================================================================ */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <Container>
            <div className="py-4 space-y-3">
              {/* Mobile navigation links */}
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-black text-white"
                  aria-label="Download Cuts app"
                >
                  Download App
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
