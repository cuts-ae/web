/**
 * Contact Page
 *
 * Purpose: Contact form and information page for customer and partner inquiries
 * Features: Interactive contact form, contact information cards, office location details
 * Performance: Client-side rendered with scroll-triggered animations and parallax effects
 * Accessibility: WCAG AA compliant with proper form labels, ARIA attributes, and keyboard navigation
 *
 * @module app/contact/page
 */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState, useRef } from "react";

/* ========================================================================
   TYPE DEFINITIONS
   ======================================================================== */

/**
 * Contact form data structure
 */
interface ContactFormData {
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** Inquiry subject category */
  subject: string;
  /** Message content */
  message: string;
}

/**
 * Contact information card structure
 */
interface ContactInfo {
  /** Icon component */
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  /** Contact method title (e.g., "Email", "Phone") */
  title: string;
  /** Contact value (e.g., email address, phone number) */
  value: string;
  /** Optional clickable link (mailto:, tel:, etc.) */
  link: string | null;
  /** Tailwind gradient class for icon background */
  gradient: string;
}

/**
 * Form subject option structure
 */
interface SubjectOption {
  /** Option value for form submission */
  value: string;
  /** Display label for the option */
  label: string;
}

/* ========================================================================
   CONSTANTS
   ======================================================================== */

/**
 * Available subject categories for contact form
 */
const SUBJECT_OPTIONS: SubjectOption[] = [
  { value: "general", label: "General Inquiry" },
  { value: "restaurant", label: "Restaurant Partnership" },
  { value: "driver", label: "Driver Application" },
  { value: "investment", label: "Investment Opportunity" },
  { value: "press", label: "Press Inquiry" },
  { value: "support", label: "Customer Support" },
];

/**
 * Contact information displayed in info cards
 */
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@cuts.ae",
    link: "mailto:hello@cuts.ae",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Abu Dhabi, UAE",
    link: null,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+971 XX XXX XXXX",
    link: "tel:+971XXXXXXXX",
    gradient: "from-purple-500 to-pink-600",
  },
];

/**
 * Animation configuration for consistent motion design
 */
const ANIMATION_CONFIG = {
  /** Standard animation duration in seconds */
  duration: 0.8,
  /** Cubic bezier easing curve */
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */

/**
 * Contact page component
 * Provides multiple ways for users to get in touch with Cuts
 */
export default function ContactPage() {
  // ========================================================================
  // STATE AND REFS
  // ========================================================================

  /**
   * Container reference for scroll-based animations
   */
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll progress tracking for parallax effects
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /**
   * Parallax transform for hero section
   */
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  /**
   * Fade-out effect for hero content on scroll
   */
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  /**
   * Contact form state
   */
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================

  /**
   * Handle form submission
   * TODO: Implement actual form submission logic (API call, email service, etc.)
   *
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Log for development - replace with actual submission logic
    console.log("Form submitted:", formData);
    // TODO: Add form validation, API call, success/error handling
  };

  /**
   * Handle form field changes
   * Updates form state as user types
   *
   * @param e - Change event from input/textarea/select
   */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <>
      <Navigation />
      <div ref={containerRef} className="relative">
        {/* ================================================================
            HERO SECTION
            Animated hero with parallax effects and floating orbs
            ================================================================ */}
        <section
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-white via-[--background-cream] to-white"
            aria-hidden="true"
          />

          {/* Floating animated orbs for visual interest */}
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[--primary]/20 to-[--accent-yellow]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[--primary-light]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <Container className="relative z-10">
            {/* Hero content with parallax effect */}
            <motion.div
              style={{ y, opacity }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--primary]/20 bg-white/50 backdrop-blur-sm"
              >
                <MessageCircle size={16} className="text-[--primary]" />
                <span className="text-sm font-medium text-[--foreground]">
                  Get in Touch
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ANIMATION_CONFIG.duration,
                  delay: 0.1,
                  ease: ANIMATION_CONFIG.ease,
                }}
                className="text-6xl md:text-8xl font-bold text-[--foreground] tracking-tight"
              >
                Let&apos;s talk
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ANIMATION_CONFIG.duration,
                  delay: 0.2,
                  ease: ANIMATION_CONFIG.ease,
                }}
                className="text-xl md:text-2xl text-[--muted-foreground] max-w-2xl mx-auto leading-relaxed"
              >
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond
                as soon as possible.
              </motion.p>
            </motion.div>
          </Container>

          {/* Scroll indicator animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[--foreground]/20 flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-[--foreground]/40 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* ================================================================
            CONTACT INFO CARDS SECTION
            Three cards with email, location, and phone information
            ================================================================ */}
        <section
          className="py-20 bg-white relative overflow-hidden"
          aria-labelledby="contact-info-heading"
        >
          {/* Decorative grid background */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"
            aria-hidden="true"
          />

          <Container className="relative z-10">
            {/* Visually hidden heading for accessibility */}
            <h2 id="contact-info-heading" className="sr-only">
              Contact Information
            </h2>

            <div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              role="list"
            >
              {CONTACT_INFO.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                  role="listitem"
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/40 to-[--primary-light]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                    aria-hidden="true"
                  />

                  <div className="relative bg-white rounded-3xl p-8 border border-[--border-light] text-center">
                    {/* Icon with gradient background */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} mb-6 shadow-xl`}
                      aria-hidden="true"
                    >
                      <info.icon size={20} color="white" />
                    </div>

                    {/* Contact method title */}
                    <h3 className="text-lg font-semibold text-[--primary] mb-2 uppercase tracking-wide">
                      {info.title}
                    </h3>

                    {/* Contact value (clickable if link provided) */}
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-xl font-medium text-[--foreground] hover:text-[--primary] transition-colors"
                        aria-label={`${info.title}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl font-medium text-[--foreground]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ================================================================
            CONTACT FORM SECTION
            Main contact form with name, email, subject, and message
            ================================================================ */}
        <section
          className="py-32 bg-gradient-to-b from-[--gray-50] to-white"
          aria-labelledby="form-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2
                  id="form-heading"
                  className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6"
                >
                  Send us a message
                </h2>
                <p className="text-xl text-[--muted-foreground]">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </p>
              </motion.div>

              {/* Form container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Gradient border glow */}
                <div
                  className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl"
                  aria-hidden="true"
                />

                <div className="relative bg-white rounded-3xl p-12 border border-[--border-light] shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name and Email fields row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-[--foreground] mb-3"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all placeholder:text-[--muted-foreground]"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-[--foreground] mb-3"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all placeholder:text-[--muted-foreground]"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject dropdown */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-[--foreground] mb-3"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all"
                      >
                        {SUBJECT_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[--foreground] mb-3"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        rows={6}
                        className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all resize-none placeholder:text-[--muted-foreground]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full group shadow-xl"
                      aria-label="Submit contact form"
                    >
                      Send Message
                      <Send
                        size={20}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ================================================================
            RESPONSE TIME SECTION
            Highlights quick response commitment
            ================================================================ */}
        <section
          className="py-20 bg-white"
          aria-labelledby="response-time-heading"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary] via-[--primary-light] to-[--primary]">
                  <div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.08)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-gradient"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative p-12 text-center">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6"
                    aria-hidden="true"
                  >
                    <Clock size={20} color="white" />
                  </div>

                  <h3
                    id="response-time-heading"
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    Quick Response Time
                  </h3>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* ================================================================
            OFFICE LOCATION SECTION
            Placeholder for future map integration
            ================================================================ */}
        <section
          className="py-32 bg-gradient-to-b from-[--gray-50] to-white"
          aria-labelledby="location-heading"
        >
          <Container>
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                id="location-heading"
                className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6"
              >
                Visit Our Office
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                We&apos;re based in the heart of Abu Dhabi
              </p>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Decorative gradient border */}
              <div
                className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl"
                aria-hidden="true"
              />

              {/* Map container - TODO: Integrate actual map service */}
              <div className="relative aspect-[16/9] rounded-3xl bg-gradient-to-br from-[--primary]/5 via-[--gray-100] to-[--accent-yellow]/5 border border-[--border-light] p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Location icon */}
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[--primary] to-[--primary-light] text-white mb-4 shadow-2xl"
                    aria-hidden="true"
                  >
                    <MapPin size={28} color="white" />
                  </div>

                  {/* Office details */}
                  <div>
                    <h3 className="text-3xl font-bold text-[--foreground] mb-3">
                      Abu Dhabi Office
                    </h3>
                    <p className="text-lg text-[--muted-foreground] mb-6">
                      Exact location to be announced
                    </p>

                    {/* Business hours badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[--border-light] text-sm font-medium text-[--foreground] shadow-lg">
                      <Clock size={16} className="text-[--primary]" />
                      <span>Mon - Fri: 9AM - 6PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
