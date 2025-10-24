"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  ChefHat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useRef } from "react";

export default function RestaurantsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Navigation />
      <div ref={containerRef} className="relative">
        {/* Hero Section with Parallax */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[--background-cream] to-white" />

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[--primary]/20 to-[--accent-yellow]/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[--primary-light]/20 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Container className="relative z-10">
            <motion.div
              style={{ y, opacity }}
              className="max-w-5xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--primary]/20 bg-white/50 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[--primary]" />
                <span className="text-sm font-medium text-[--foreground]">
                  For Restaurant Partners
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl md:text-8xl font-bold text-[--foreground] tracking-tight"
              >
                Join the healthiest
                <br />
                <span className="bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] bg-clip-text text-transparent animate-gradient">
                  food delivery platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-xl md:text-2xl text-[--muted-foreground] max-w-3xl mx-auto leading-relaxed"
              >
                Reach health-conscious customers in Abu Dhabi.
                <br />
                Fair commission. Real growth. Zero compromises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="secondary" size="lg" className="group">
                  View Partnership Details
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap justify-center gap-12 pt-12"
              >
                {[
                  { label: "Commission", value: "15%" },
                  { label: "Avg Order Value", value: "AED 85" },
                  { label: "Active Users", value: "10K+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-[--foreground] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[--muted-foreground]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
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

        {/* Benefits Section - Bento Grid */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6 tracking-tight">
                Why partner with <span className="text-[--primary]">Cuts</span>
              </h2>
              <p className="text-xl text-[--muted-foreground] max-w-2xl mx-auto">
                We&apos;re building more than a platform — we&apos;re building a community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Reach new customers",
                  description:
                    "Connect with health-conscious customers actively seeking nutritious meal options",
                  gradient: "from-[--primary] to-emerald-600",
                },
                {
                  icon: DollarSign,
                  title: "Fair commission",
                  description:
                    "Only 15% commission with transparent pricing and no hidden fees",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: BarChart3,
                  title: "Powerful dashboard",
                  description:
                    "Track orders, manage your menu, and view analytics in real-time",
                  gradient: "from-teal-500 to-cyan-600",
                },
                {
                  icon: Users,
                  title: "Dedicated support",
                  description:
                    "Onboarding team to help you succeed from day one",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  icon: Target,
                  title: "Smart matching",
                  description:
                    "AI-powered recommendations show your menu to the right customers",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Zap,
                  title: "Fast payments",
                  description:
                    "Weekly direct deposits with detailed earnings breakdown",
                  gradient: "from-indigo-500 to-purple-600",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Animated Border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/50 via-[--primary-light]/50 to-[--primary]/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                  <div className="relative h-full bg-white rounded-3xl p-8 border border-[--border-light] overflow-hidden">
                    {/* Icon Container */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}
                    >
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-[--foreground] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[--muted-foreground] leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[--primary]/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works - Timeline */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Get started in{" "}
                <span className="text-[--primary]">four steps</span>
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                From signup to serving customers in under a week
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  number: "01",
                  title: "Sign Up",
                  description:
                    "Quick online registration process takes just 5 minutes. Provide basic details about your restaurant and menu.",
                  icon: CheckCircle2,
                },
                {
                  number: "02",
                  title: "Add Your Menu",
                  description:
                    "Upload your menu items with nutrition info. Our team will help you get everything formatted perfectly.",
                  icon: ChefHat,
                },
                {
                  number: "03",
                  title: "Receive Orders",
                  description:
                    "Get real-time notifications and manage orders through our powerful restaurant dashboard.",
                  icon: Zap,
                },
                {
                  number: "04",
                  title: "Grow Together",
                  description:
                    "We handle delivery and customer service so you can focus on what you do best — making great food.",
                  icon: TrendingUp,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative group">
                    {/* Animated border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary]/40 via-blue-500/40 to-purple-500/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />

                    <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-[--primary]/30 transition-all">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                          <step.icon className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[--foreground] mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base text-[--muted-foreground] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute left-12 top-32 w-[2px] h-24 bg-gradient-to-b from-[--primary]/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Requirements */}
        <section className="py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                  What you need
                </h2>
                <p className="text-xl text-[--muted-foreground]">
                  Simple requirements to get started
                </p>
              </div>

              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl" />

                <div className="relative bg-white rounded-3xl p-12 border border-[--border-light] shadow-2xl">
                  <ul className="space-y-6">
                    {[
                      "Active food license in Abu Dhabi",
                      "Quality, healthy menu items",
                      "Ability to provide nutrition information",
                      "Commitment to food safety standards",
                    ].map((requirement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[--primary]/10 group-hover:bg-[--primary] transition-colors flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-[--primary] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-lg text-[--foreground] pt-0.5">
                          {requirement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[--primary] via-blue-500 to-purple-500 bg-[length:200%_100%] animate-gradient" />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6 max-w-3xl mx-auto py-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to partner with us?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join Cuts today and start reaching health-conscious customers
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Button
                  size="lg"
                  className="bg-white text-[--primary] hover:bg-white/90 border-0 shadow-xl px-8"
                >
                  Sign Up Now
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
