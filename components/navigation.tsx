/**
 * Navigation Component
 *
 * Purpose: Global site navigation with shared dropdown menu
 * Features: Sliding content transition, smooth animations, responsive mobile menu
 * Accessibility: WCAG AA compliant
 */

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Store,
  Plus,
  FileText,
  Package,
  Users,
  MessageCircle,
  BarChart,
  File,
  Mail,
  Utensils,
  TrendingUp,
  PieChart,
  Info,
  DollarSign,
  Target,
  Award,
  Globe,
  Calendar,
  Shield,
  Zap
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavLink {
  href: string;
  label: string;
  dropdownSections?: DropdownSection[];
  dropdownItems?: DropdownItem[];
}

const NAV_LINKS: NavLink[] = [
  {
    href: "/investors",
    label: "For Investors",
    dropdownSections: [
      {
        title: "Performance",
        items: [
          { label: "Financial Reports", href: "/investors/reports", description: "Quarterly metrics", icon: <BarChart size={18} /> },
          { label: "Growth Metrics", href: "/investors/growth", description: "Track our expansion", icon: <TrendingUp size={18} /> },
          { label: "Market Position", href: "/investors/market", description: "Industry leadership", icon: <Target size={18} /> },
          { label: "Revenue Breakdown", href: "/investors/revenue", description: "Financial overview", icon: <DollarSign size={18} /> },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "Investment Thesis", href: "/investors/thesis", description: "Why invest in Cuts", icon: <Award size={18} /> },
          { label: "Expansion Strategy", href: "/investors/strategy", description: "Global growth plans", icon: <Globe size={18} /> },
          { label: "Leadership Team", href: "/investors/team", description: "Meet our executives", icon: <Shield size={18} /> },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Investor Presentations", href: "/investors/presentations", description: "Latest deck", icon: <File size={18} /> },
          { label: "Events & Calendar", href: "/investors/events", description: "Upcoming calls", icon: <Calendar size={18} /> },
          { label: "Press Releases", href: "/investors/press", description: "Recent news", icon: <Zap size={18} /> },
          { label: "Contact IR Team", href: "/investors/contact", description: "Get in touch", icon: <Mail size={18} /> },
        ],
      },
    ],
  },
  {
    href: "/restaurants",
    label: "For Restaurants",
    dropdownSections: [
      {
        title: "Get Inspired",
        items: [
          { label: "How It Works", href: "/restaurants/how-it-works", description: "Simple steps to success", icon: <Package size={18} /> },
          { label: "Success Stories", href: "/restaurants/success-stories", description: "Real growth, real numbers", icon: <TrendingUp size={18} /> },
          { label: "Pricing & Fees", href: "/restaurants/pricing", description: "Clear and competitive", icon: <FileText size={18} /> },
        ],
      },
      {
        title: "Get Started",
        items: [
          { label: "Restaurant Portal", href: "/restaurants/portal", description: "Manage everything in one place", icon: <Store size={18} /> },
          { label: "Join Our Platform", href: "/restaurants/join", description: "Start growing today", icon: <Plus size={18} /> },
          { label: "Request a Demo", href: "/restaurants/demo", description: "See the power firsthand", icon: <Users size={18} /> },
          { label: "For Home Caterers", href: "/restaurants/home-caterers", description: "Built for your kitchen", icon: <Utensils size={18} /> },
        ],
      },
      {
        title: "Help & Support",
        items: [
          { label: "Resources & Guides", href: "/restaurants/resources", description: "Tips from top partners", icon: <FileText size={18} /> },
          { label: "Frequently Asked Questions", href: "/restaurants/faq", description: "Find quick answers", icon: <Info size={18} /> },
          { label: "Support Center", href: "/restaurants/support", description: "We're here to help", icon: <MessageCircle size={18} /> },
          { label: "Contact Us", href: "/restaurants/contact", description: "Let's talk", icon: <Mail size={18} /> },
        ],
      },
    ],
  },
  {
    href: "/drivers",
    label: "For Drivers",
    dropdownSections: [
      {
        title: "Get Inspired",
        items: [
          { label: "How It Works", href: "/drivers/how-it-works", description: "Deliver on your schedule", icon: <Package size={18} /> },
          { label: "Earnings & Benefits", href: "/drivers/earnings", description: "Know what you'll make", icon: <TrendingUp size={18} /> },
          { label: "Pricing & Fees", href: "/drivers/pricing", description: "Clear and competitive", icon: <FileText size={18} /> },
        ],
      },
      {
        title: "Get Started",
        items: [
          { label: "Driver App", href: "/drivers/app", description: "Access your account", icon: <Users size={18} /> },
          { label: "Sign Up to Drive", href: "/drivers/apply", description: "Start earning today", icon: <Plus size={18} /> },
        ],
      },
      {
        title: "Help & Support",
        items: [
          { label: "Driver Resources", href: "/drivers/resources", description: "Tips and guides", icon: <FileText size={18} /> },
          { label: "Frequently Asked Questions", href: "/drivers/faq", description: "Find quick answers", icon: <Info size={18} /> },
          { label: "Support Center", href: "/drivers/support", description: "We're here to help", icon: <MessageCircle size={18} /> },
          { label: "Contact Us", href: "/drivers/contact", description: "Let's talk", icon: <Mail size={18} /> },
        ],
      },
    ],
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>("For Restaurants"); // DEV: Keep dropdown open
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const activeLink = NAV_LINKS.find((link) => link.label === activeDropdown);

  // Determine dropdown dimensions based on content
  const getDropdownDimensions = (link: NavLink | undefined) => {
    if (!link) return { width: 420, height: 280 };

    // For sectioned dropdowns (like "For Restaurants")
    if (link.dropdownSections) {
      const sectionCount = link.dropdownSections.length;
      // Find max items in any section to determine height
      const maxItems = Math.max(...link.dropdownSections.map(s => s.items.length));
      // Each section gets its own column, tighter spacing
      return { width: sectionCount * 300, height: 320 };
    }

    // For simple dropdowns
    if (!link.dropdownItems) return { width: 420, height: 280 };

    const itemCount = link.dropdownItems.length;

    // For Drivers (3 items) - 1 column
    if (link.label === "For Drivers") {
      return { width: 300, height: 220 };
    }

    // For Investors (8 items) - 3 columns (3, 3, 2 items)
    if (link.label === "For Investors") {
      return { width: 680, height: 220 };
    }

    return { width: 420, height: 280 };
  };

  const activeDimensions = getDropdownDimensions(activeLink);

  // Render dropdown content based on structure
  const renderDropdownContent = (link: NavLink) => {
    // Sectioned layout (like Vercel's nav)
    if (link.dropdownSections) {
      return (
        <div className="flex gap-4">
          {link.dropdownSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex-1">
              <div className="mb-4 pl-2">
                <h3 className="text-base font-medium text-gray-700 capitalize">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg transition-colors duration-150 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 text-gray-700 group-hover:text-white transition-colors bg-white group-hover:bg-black border border-gray-200 group-hover:border-black rounded-md p-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 flex-1 min-w-0">
                      <div className="font-medium text-[15px] text-black">
                        {item.label}
                      </div>
                      <div className="text-[13px] text-gray-500 group-hover:text-gray-700 leading-relaxed truncate">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Non-sectioned layout (existing logic)
    if (!link.dropdownItems) return null;

    if (link.label === "For Drivers") {
      return (
        <div className="flex flex-col gap-1">
          {link.dropdownItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
            >
              <div className="flex-shrink-0 text-gray-600 group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900 group-hover:text-black">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    // Multi-column layout for other dropdowns
    const columnCount = link.label === "For Investors" ? 3 : 2;
    return (
      <div className="grid grid-cols-3 gap-x-8">
        {Array.from({ length: columnCount }, (_, colIndex) => {
          const itemsPerCol = Math.ceil(link.dropdownItems!.length / columnCount);
          const colItems = link.dropdownItems!.slice(colIndex * itemsPerCol, (colIndex + 1) * itemsPerCol);

          return colItems.length > 0 ? (
            <div key={colIndex} className="flex flex-col gap-1">
              {colItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <div className="flex-shrink-0 text-gray-600 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-900 group-hover:text-black">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null;
        })}
      </div>
    );
  };

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
      <Container size="wide">
        <div className="flex items-center h-16">
          {/* Left side: Logo + Nav Links */}
          <div className="flex items-center gap-8" ref={navRef}>
            {/* Logo */}
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

            {/* Desktop Navigation with Dropdowns */}
            <div
              className="hidden md:flex items-center gap-2 relative"
              onMouseLeave={handleMouseLeave}
            >
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "group flex items-center gap-1.5 px-3 py-2 text-sm rounded-full transition-all duration-200 whitespace-nowrap",
                      activeDropdown === link.label
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.label && "-rotate-180"
                      )}
                    />
                  </Link>
                </div>
              ))}

              {/* Shared Dropdown Container */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 transition-opacity duration-150",
                  activeDropdown && activeLink
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
                style={{
                  width: `${activeDimensions.width}px`,
                }}
              >
                <div
                  className={cn(
                    "w-full p-4 transition-opacity duration-200",
                    activeDropdown && activeLink
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                >
                  {activeLink && (activeLink.dropdownItems || activeLink.dropdownSections) && renderDropdownContent(activeLink)}
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Download App Button */}
          <div className="hidden md:block ml-auto">
            <Button variant="primary" size="sm" aria-label="Download Cuts app">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <Container>
            <div className="py-4 space-y-3">
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
