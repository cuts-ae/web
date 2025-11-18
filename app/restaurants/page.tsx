/**
 * Restaurant Partner Landing Page
 *
 * Purpose: Marketing page to attract restaurant partners to the Cuts platform
 * Features: Value proposition, partnership benefits, onboarding process, requirements
 * Performance: Client-side rendered with scroll-triggered animations
 * Accessibility: WCAG AA compliant with proper semantic HTML and ARIA labels
 *
 * @module app/restaurants/page
 */

"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  CheckCircle2,
  Zap,
  Target,
  ChefHat,
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
  /** Display value (e.g., "15%", "AED 85") */
  value: string;
  /** Description label for the stat */
  label: string;
}

/**
 * Partnership benefit card data structure
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
 * Onboarding process step
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

/* ========================================================================
   ANIMATION CONFIGURATION
   ======================================================================== */

/**
 * Global animation settings for consistent motion design
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
 * Restaurant partner landing page component
 * Showcases platform benefits and guides potential partners through onboarding
 */
export default function RestaurantsPage() {
  // ========================================================================
  // DATA CONFIGURATION
  // ========================================================================

  /**
   * Hero section statistics
   * Highlights key platform metrics for restaurant partners
   */
  const stats: StatItem[] = [
    { value: "15%", label: "Commission Rate" },
    { value: "AED 85", label: "Avg Order Value" },
    { value: "10K+", label: "Active Users" },
  ];

  /**
   * Partnership benefits displayed in grid
   * Each benefit emphasizes a unique value proposition
   */
  const benefits: BenefitItem[] = [
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      title: "Reach New Customers",
      description: "Connect with health-conscious customers actively seeking nutritious meal options",
      color: "emerald",
    },
    {
      icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
      title: "Fair Commission",
      description: "Only 15% commission with transparent pricing and no hidden fees",
      color: "yellow",
    },
    {
      icon: <BarChart3 className="w-6 h-6" aria-hidden="true" />,
      title: "Powerful Dashboard",
      description: "Track orders, manage your menu, and view analytics in real-time",
      color: "blue",
    },
    {
      icon: <Users className="w-6 h-6" aria-hidden="true" />,
      title: "Dedicated Support",
      description: "Onboarding team to help you succeed from day one",
      color: "purple",
    },
    {
      icon: <Target className="w-6 h-6" aria-hidden="true" />,
      title: "Smart Matching",
      description: "AI-powered recommendations show your menu to the right customers",
      color: "pink",
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "Fast Payments",
      description: "Weekly direct deposits with detailed earnings breakdown",
      color: "orange",
    },
  ];

  /**
   * Four-step onboarding process
   * Guides potential partners through signup to first sale
   */
  const onboardingSteps: OnboardingStep[] = [
    {
      number: "01",
      title: "Sign Up",
      description: "Quick online registration process takes just 5 minutes. Provide basic details about your restaurant and menu.",
      icon: <CheckCircle2 className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "02",
      title: "Add Your Menu",
      description: "Upload your menu items with nutrition info. Our team will help you get everything formatted perfectly.",
      icon: <ChefHat className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "03",
      title: "Receive Orders",
      description: "Get real-time notifications and manage orders through our powerful restaurant dashboard.",
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "04",
      title: "Grow Together",
      description: "We handle delivery and customer service so you can focus on what you do best — making great food.",
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
    },
  ];

  /**
   * Partner requirements list
   * Essential criteria for joining the platform
   */
  const requirements: string[] = [
    "Active food license in UAE",
    "Quality, healthy menu items",
    "Ability to provide nutrition information",
    "Commitment to food safety standards",
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
              Join the healthiest
              <br />
              <span className="text-emerald-600">food delivery platform</span>
            </h1>
          </motion.div>

          {/* Hero subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Reach health-conscious customers in UAE. Fair commission. Real growth.
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
              aria-label="Get started as a restaurant partner"
            >
              Get Started
            </button>
            <button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-200"
              aria-label="Contact our partnership team"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Statistics grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            role="list"
            aria-label="Platform statistics"
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
          Six-card grid showcasing partnership advantages
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
              Why Partner with Cuts?
            </h2>
            <p className="text-xl text-gray-600">
              Building more than a platform — building a community
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div
            className="grid md:grid-cols-3 gap-6"
            role="list"
            aria-label="Partnership benefits"
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
          Four-step guide from signup to first orders
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
              Get Started in Four Steps
            </h2>
            <p className="text-xl text-gray-600">
              From signup to serving customers in under a week
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
          Essential criteria for partnership eligibility
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
              aria-label="Partnership requirements"
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
            Ready to Partner with Us?
          </motion.h2>

          {/* CTA description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Join Cuts today and start reaching health-conscious customers
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
              aria-label="Sign up as a restaurant partner"
            >
              Sign Up Now
            </button>
            <button
              className="bg-transparent text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-white/10 transition-all duration-200"
              aria-label="Contact our partnership team"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
