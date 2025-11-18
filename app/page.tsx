/**
 * Home Page - Main Landing Page
 *
 * This is the primary landing page for Cuts food delivery platform.
 * Features: Hero section, feature showcase, how it works, testimonials, CTA
 *
 * Performance: Client-side rendered with Framer Motion animations
 * SEO: Handled by root layout metadata
 * Accessibility: WCAG AA compliant with proper semantic HTML
 */

"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Leaf,
  Zap,
  Heart,
  Clock,
  Shield,
  Star,
  Apple,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

/**
 * Interface for stat cards in hero section
 */
interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

/**
 * Interface for feature cards
 */
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

/**
 * Interface for trust badge items
 */
interface TrustBadgeItem {
  icon: React.ReactNode;
  text: string;
}

/**
 * Interface for how-it-works steps
 */
interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

/**
 * Interface for testimonials
 */
interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

/**
 * Animation configuration for consistent motion
 */
const ANIMATION_CONFIG = {
  /** Standard fade-in-up animation duration */
  duration: 0.6,
  /** Smooth easing curve for animations */
  ease: [0.22, 1, 0.36, 1] as const,
  /** Viewport margin for triggering scroll animations */
  viewportMargin: "-100px",
} as const;

/**
 * Home page component
 * @returns The rendered home page
 */
export default function Home() {
  // Hero section stats data
  const stats: StatItem[] = [
    { value: "50+", label: "Partner Restaurants", icon: <Users className="w-5 h-5" aria-hidden="true" /> },
    { value: "10K+", label: "Happy Customers", icon: <TrendingUp className="w-5 h-5" aria-hidden="true" /> },
    { value: "4.9", label: "Average Rating", icon: <Star className="w-5 h-5" aria-hidden="true" /> },
  ];

  // Features section data
  const features: FeatureItem[] = [
    {
      icon: <Leaf className="w-6 h-6" aria-hidden="true" />,
      title: "Nutrition First",
      description:
        "Every meal is crafted with nutritional balance in mind. Macros, calories, and ingredients clearly labeled.",
      color: "emerald",
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "Lightning Fast",
      description:
        "Average delivery time of 25 minutes. Your healthy meal arrives fresh and hot, right when you need it.",
      color: "yellow",
    },
    {
      icon: <Heart className="w-6 h-6" aria-hidden="true" />,
      title: "Made with Love",
      description:
        "Premium quality at competitive prices. No hidden fees, transparent pricing on every order.",
      color: "rose",
    },
  ];

  // Trust badges data
  const trustBadges: TrustBadgeItem[] = [
    { icon: <Clock className="w-4 h-4" aria-hidden="true" />, text: "Real-time tracking" },
    { icon: <Shield className="w-4 h-4" aria-hidden="true" />, text: "Food safety certified" },
    { icon: <Award className="w-4 h-4" aria-hidden="true" />, text: "4.9 average rating" },
  ];

  // How it works steps data
  const howItWorksSteps: HowItWorksStep[] = [
    {
      number: "01",
      title: "Browse & Select",
      description:
        "Choose from 50+ restaurants offering healthy, nutritious meals with detailed nutritional information.",
    },
    {
      number: "02",
      title: "Customize & Order",
      description:
        "Personalize your meal to fit your dietary preferences and fitness goals. Place your order in seconds.",
    },
    {
      number: "03",
      title: "Enjoy Fresh Food",
      description:
        "Track your order in real-time. Your meal arrives fresh, hot, and ready to fuel your day. Average delivery time: 25 minutes.",
    },
  ];

  // Testimonials data
  const testimonials: TestimonialItem[] = [
    {
      name: "Sarah M.",
      role: "Fitness Enthusiast",
      text: "Finally, a delivery app that actually cares about nutrition! The macro breakdowns are incredibly helpful for my fitness goals.",
    },
    {
      name: "Ahmed K.",
      role: "Business Professional",
      text: "Super fast delivery and the food quality is outstanding. This has become my go-to for lunch every day.",
    },
    {
      name: "Layla H.",
      role: "Nutrition Coach",
      text: "Game changer for meal prep. The variety of healthy options means I never get bored with my diet.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative dot grid background - purely visual */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:24px_24px]"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Main heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
          >
            <h1 id="hero-heading" className="text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Healthy meals.
              <br />
              <span className="text-emerald-600">Delivered with care.</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.1, ease: ANIMATION_CONFIG.ease }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            UAE&apos;s first nutrition-focused food delivery platform.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.2, ease: ANIMATION_CONFIG.ease }}
            className="flex gap-3 justify-center mb-16"
          >
            <button
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] hover:bg-gray-800 transition-all duration-200"
              aria-label="Download Cuts app"
            >
              Download App
            </button>
            <button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-200"
              aria-label="Learn about restaurant partnerships"
            >
              For Restaurants
            </button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            role="region"
            aria-label="Platform statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-gray-400">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-16 bg-gray-50 relative"
        aria-labelledby="features-heading"
      >
        {/* Decorative grid background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:32px_32px]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Choose Cuts?
            </h2>
            <p className="text-xl text-gray-600">
              Making healthy eating easier than ever
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_8px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6 text-${feature.color}-600`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
            role="list"
            aria-label="Trust indicators"
          >
            {trustBadges.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.06)] text-sm"
                role="listitem"
              >
                <div className="text-gray-600">{item.icon}</div>
                <span className="font-medium text-gray-900">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works + Download App Section */}
      <section
        className="py-16"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: How it works steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center text-lg font-bold"
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Download app card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_40px_-8px_rgba(0,0,0,0.2)]">
                <h3 className="text-3xl font-bold mb-4">
                  Download the app today
                </h3>
                <p className="text-lg text-gray-300 mb-3">
                  Available on iOS. Start your journey to healthier eating with the tap of a button.
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Meals starting from د.إ 25 • Free delivery on orders over د.إ 100
                </p>

                <div className="space-y-3">
                  <button
                    className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    aria-label="Download Cuts app from App Store"
                  >
                    <Apple className="w-5 h-5" aria-hidden="true" />
                    Download on App Store
                  </button>
                  <button
                    className="w-full bg-transparent text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-white/10 transition-all duration-200"
                    aria-label="Learn more about Cuts"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 bg-gray-50 relative"
        aria-labelledby="testimonials-heading"
      >
        {/* Decorative grid background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:32px_32px]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: ANIMATION_CONFIG.viewportMargin }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* 5-star rating */}
                <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                  {testimonial.text}
                </p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Ready to start eating healthier?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Join thousands of customers who have transformed their eating habits with Cuts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg"
              aria-label="Download Cuts app"
            >
              Download App
            </button>
            <button
              className="bg-transparent text-white px-6 py-3 rounded-lg font-medium text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-white/10 transition-all duration-200"
              aria-label="Learn more about Cuts"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
