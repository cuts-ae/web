/**
 * Driver Partner Landing Page
 *
 * Purpose: Marketing page to attract delivery drivers to the Cuts platform
 * Features: Earnings potential, benefits, onboarding process, requirements
 * Performance: Client-side rendered with scroll-triggered animations
 * Accessibility: WCAG AA compliant with proper semantic HTML and ARIA labels
 *
 * @module app/drivers/page
 */

"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  Shield,
  CheckCircle2,
  Smartphone,
  MapPin,
  CreditCard,
  TrendingUp,
  Award,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ========================================================================
   TYPE DEFINITIONS
   ======================================================================== */

/**
 * Statistics displayed in the hero section
 */
interface StatItem {
  /** Display value (e.g., "AED 45-60", "4.8/5.0") */
  value: string;
  /** Description label for the stat */
  label: string;
}

/**
 * Driver benefit card data structure
 */
interface BenefitItem {
  /** Lucide React icon component */
  icon: React.ReactNode;
  /** Benefit heading */
  title: string;
  /** Detailed description of the benefit */
  description: string;
  /** Tailwind color name for icon background (e.g., "emerald", "blue") */
  color: string;
}

/**
 * Onboarding process step for drivers
 */
interface OnboardingStep {
  /** Step number displayed (e.g., "01", "02") */
  number: string;
  /** Step title */
  title: string;
  /** Detailed step description */
  description: string;
  /** Lucide React icon component */
  icon: React.ReactNode;
}

/**
 * Earnings statistic card data
 */
interface EarningsStat {
  /** Lucide React icon component */
  icon: React.ReactNode;
  /** Stat label/category */
  label: string;
  /** Display value (e.g., "AED 45-60") */
  value: string;
  /** Additional description or context */
  description: string;
  /** Tailwind color name for icon background */
  color: string;
}

/* ========================================================================
   ANIMATION CONFIGURATION
   ======================================================================== */

/**
 * Global animation settings for consistent motion design
 * Based on Vercel design system timing functions
 */
const ANIMATION_CONFIG = {
  /** Standard animation duration in seconds */
  duration: 0.6,
  /** Cubic bezier easing curve for smooth, natural motion */
  ease: [0.22, 1, 0.36, 1] as const,
  /** Viewport margin for triggering scroll animations */
  viewportMargin: "-100px",
} as const;

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */

/**
 * Driver partner landing page component
 * Showcases earning opportunities and guides potential drivers through onboarding
 */
export default function DriversPage() {
  // ========================================================================
  // DATA CONFIGURATION
  // ========================================================================

  /**
   * Hero section statistics
   * Highlights key metrics for driver partners
   */
  const stats: StatItem[] = [
    { value: "AED 45-60", label: "Avg Hourly" },
    { value: "4.8/5.0", label: "Satisfaction" },
    { value: "100+", label: "Active Drivers" },
  ];

  /**
   * Driver benefits displayed in grid
   * Each benefit emphasizes a unique value proposition
   */
  const benefits: BenefitItem[] = [
    {
      icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
      title: "Competitive Earnings",
      description: "Earn AED 45-60/hour plus tips with weekly direct deposit payouts",
      color: "emerald",
    },
    {
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      title: "Your Schedule",
      description: "Work when you want with flexible hours that fit your lifestyle",
      color: "blue",
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      title: "Support & Safety",
      description: "Insurance coverage and 24/7 support team always ready to help",
      color: "purple",
    },
  ];

  /**
   * Four-step onboarding process for drivers
   * Guides potential drivers from application to first delivery
   */
  const onboardingSteps: OnboardingStep[] = [
    {
      number: "01",
      title: "Apply Online",
      description: "Quick 10-minute application form. Upload your license and vehicle documents.",
      icon: <Smartphone className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "02",
      title: "Get Approved",
      description: "Background check completed within 1-2 business days. We'll notify you instantly.",
      icon: <CheckCircle2 className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "03",
      title: "Start Delivering",
      description: "Download the driver app, go online, and start accepting orders immediately.",
      icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "04",
      title: "Get Paid Weekly",
      description: "Receive weekly direct deposits every Monday. Track your earnings in real-time.",
      icon: <CreditCard className="w-6 h-6" aria-hidden="true" />,
    },
  ];

  /**
   * Driver requirements list
   * Essential criteria for joining the platform
   */
  const requirements: string[] = [
    "Valid UAE driver's license",
    "Own vehicle (bike, car, or motorcycle)",
    "Smartphone with GPS",
    "18+ years old",
  ];

  /**
   * Earnings potential statistics
   * Real numbers from the driver community
   */
  const earningsStats: EarningsStat[] = [
    {
      icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
      label: "Average Hourly",
      value: "AED 45-60",
      description: "Including base pay + tips",
      color: "emerald",
    },
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      label: "Top Earners",
      value: "AED 75+",
      description: "During peak hours",
      color: "blue",
    },
    {
      icon: <Award className="w-6 h-6" aria-hidden="true" />,
      label: "Driver Rating",
      value: "4.8/5.0",
      description: "Average satisfaction score",
      color: "purple",
    },
  ];

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <>
      <Navigation />

      {/* ================================================================
          HERO SECTION
          Headline, subheadline, CTAs, and key statistics
          ================================================================ */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative dot grid background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:24px_24px]"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Hero headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration }}
          >
            <h1
              id="hero-heading"
              className="text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Deliver health,
              <br />
              <span className="text-emerald-600">earn well</span>
            </h1>
          </motion.div>

          {/* Hero subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Flexible hours. Competitive pay. Join UAE&apos;s healthiest delivery platform.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.2 }}
            className="flex gap-3 justify-center mb-12"
          >
            <button
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] hover:bg-gray-800 transition-all duration-200"
              aria-label="Apply to become a driver"
            >
              Apply Now
            </button>
            <button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-200"
              aria-label="Learn more about driving with Cuts"
            >
              Learn More
            </button>
          </motion.div>

          {/* Statistics grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            role="list"
            aria-label="Driver statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
                role="listitem"
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          BENEFITS SECTION
          Three-card grid showcasing driver advantages
          ================================================================ */}
      <section
        className="py-16 bg-gray-50 relative"
        aria-labelledby="benefits-heading"
      >
        {/* Decorative line grid background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:32px_32px]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Deliver with Cuts?
            </h2>
            <p className="text-xl text-gray-600">
              Join a community of drivers who love what they do
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div
            className="grid md:grid-cols-3 gap-6"
            role="list"
            aria-label="Driver benefits"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_8px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
                role="listitem"
              >
                {/* Icon with colored background */}
                <div
                  className={`w-12 h-12 bg-${benefit.color}-100 rounded-lg flex items-center justify-center mb-6 text-${benefit.color}-600`}
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          ONBOARDING PROCESS SECTION
          Four-step guide from application to earning
          ================================================================ */}
      <section
        className="py-16"
        aria-labelledby="onboarding-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="onboarding-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Start Earning in Four Steps
            </h2>
            <p className="text-xl text-gray-600">
              From application to your first delivery in 1-2 days
            </p>
          </motion.div>

          {/* Steps list */}
          <div
            className="space-y-8"
            role="list"
            aria-label="Onboarding steps"
          >
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
                role="listitem"
              >
                {/* Step number badge */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center text-lg font-bold"
                    aria-label={`Step ${step.number}`}
                  >
                    {step.number}
                  </div>
                </div>
                {/* Step content */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          REQUIREMENTS SECTION
          Essential criteria for driver eligibility
          ================================================================ */}
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="requirements-heading"
      >
        <div className="max-w-3xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="requirements-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              What You Need
            </h2>
            <p className="text-xl text-gray-600">
              Simple requirements to get started
            </p>
          </motion.div>

          {/* Requirements card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <ul
              className="space-y-4"
              role="list"
              aria-label="Driver requirements"
            >
              {requirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Checkmark icon */}
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-lg text-gray-700">
                    {requirement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          EARNINGS SECTION
          Earnings potential with real numbers
          ================================================================ */}
      <section
        className="py-16"
        aria-labelledby="earnings-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="earnings-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Your Earnings Potential
            </h2>
            <p className="text-xl text-gray-600">
              Real numbers from our driver community
            </p>
          </motion.div>

          {/* Earnings stats grid */}
          <div
            className="grid md:grid-cols-3 gap-6"
            role="list"
            aria-label="Earnings statistics"
          >
            {earningsStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.06)] text-center"
                role="listitem"
              >
                {/* Icon with colored background */}
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-6 text-${stat.color}-600`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-emerald-600 mb-3 uppercase tracking-wide">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          Final conversion call-to-action with dark theme
          ================================================================ */}
      <section
        className="py-16 bg-gray-900 text-white relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Decorative grid background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px]"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* CTA headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="cta-heading"
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Start Earning Today
          </motion.h2>

          {/* CTA description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Join Cuts and become part of a community delivering healthy food
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg"
              aria-label="Apply to become a driver"
            >
              Apply Now
            </button>
            <button
              className="bg-transparent text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-white/10 transition-all duration-200"
              aria-label="Contact driver support"
            >
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
