"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  DollarSign,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Smartphone,
  Award,
  Zap,
  TrendingUp,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useRef } from "react";

export default function DriversPage() {
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
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[--background-cream] to-white" />

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-32 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[--primary]/20 via-[--accent-yellow]/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-[--primary-light]/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 22,
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
                <MapPin className="w-4 h-4 text-[--primary]" />
                <span className="text-sm font-medium text-[--foreground]">
                  For Delivery Partners
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
                Deliver health,
                <br />
                <span className="bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] bg-clip-text text-transparent animate-gradient">
                  earn well
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
                Flexible hours. Competitive pay. Supportive community.
                <br />
                Join Abu Dhabi&apos;s healthiest delivery platform.
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
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="secondary" size="lg" className="group">
                  Learn More
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
                  { label: "Avg Hourly", value: "AED 45-60" },
                  { label: "Satisfaction", value: "4.8/5.0" },
                  { label: "Active Drivers", value: "100+" },
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

        {/* Benefits - Spotlight Cards */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6 tracking-tight">
                Why deliver with <span className="text-[--primary]">Cuts</span>
              </h2>
              <p className="text-xl text-[--muted-foreground] max-w-2xl mx-auto">
                Join a community of drivers who love what they do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: DollarSign,
                  title: "Competitive Earnings",
                  description:
                    "Earn AED 45-60/hour plus tips with weekly direct deposit payouts",
                  gradient: "from-emerald-500 to-teal-600",
                  stats: "Weekly Payouts",
                },
                {
                  icon: Clock,
                  title: "Your Schedule",
                  description:
                    "Work when you want with flexible hours that fit your lifestyle",
                  gradient: "from-blue-500 to-indigo-600",
                  stats: "100% Flexible",
                },
                {
                  icon: Shield,
                  title: "Support & Safety",
                  description:
                    "Insurance coverage and 24/7 support team always ready to help",
                  gradient: "from-purple-500 to-pink-600",
                  stats: "24/7 Support",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary]/30 via-[--primary-light]/30 to-[--primary]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

                  <div className="relative bg-white rounded-3xl p-10 border border-[--border-light] h-full overflow-hidden">
                    {/* Gradient Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-xl shadow-${benefit.gradient}/20`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[--foreground] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-[--muted-foreground] leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--gray-50] text-sm font-medium text-[--foreground]">
                      <Zap className="w-4 h-4 text-[--primary]" />
                      {benefit.stats}
                    </div>

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[--primary]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works - Modern Timeline */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white relative">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Start earning in{" "}
                <span className="text-[--primary]">four steps</span>
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                From application to your first delivery in 1-2 days
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    number: "01",
                    title: "Apply Online",
                    description:
                      "Quick 10-minute application form. Upload your license and vehicle documents.",
                    icon: Smartphone,
                    color: "from-emerald-500 to-teal-600",
                  },
                  {
                    number: "02",
                    title: "Get Approved",
                    description:
                      "Background check completed within 1-2 business days. We'll notify you instantly.",
                    icon: CheckCircle2,
                    color: "from-blue-500 to-indigo-600",
                  },
                  {
                    number: "03",
                    title: "Start Delivering",
                    description:
                      "Download the driver app, go online, and start accepting orders immediately.",
                    icon: MapPin,
                    color: "from-purple-500 to-pink-600",
                  },
                  {
                    number: "04",
                    title: "Get Paid Weekly",
                    description:
                      "Receive weekly direct deposits every Monday. Track your earnings in real-time.",
                    icon: CreditCard,
                    color: "from-orange-500 to-red-600",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="relative bg-white rounded-3xl p-8 border border-[--border-light] hover:shadow-2xl transition-all duration-500">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -left-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                        >
                          <span className="text-2xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-end mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center`}
                        >
                          <step.icon className="w-6 h-6 text-[--primary]" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[--foreground] mb-3 mt-4">
                        {step.title}
                      </h3>
                      <p className="text-[--muted-foreground] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[--primary]/0 to-[--primary]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Requirements Section */}
        <section className="py-32 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                  What you need
                </h2>
                <p className="text-xl text-[--muted-foreground]">
                  Simple requirements to get started
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Animated Border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl" />

                <div className="relative bg-white rounded-3xl p-12 border border-[--border-light] shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: CheckCircle2,
                        text: "Valid UAE driver's license",
                      },
                      {
                        icon: CheckCircle2,
                        text: "Own vehicle (bike, car, or motorcycle)",
                      },
                      {
                        icon: CheckCircle2,
                        text: "Smartphone with GPS",
                      },
                      {
                        icon: CheckCircle2,
                        text: "18+ years old",
                      },
                    ].map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--primary]/10 group-hover:bg-[--primary] transition-all duration-300 flex items-center justify-center">
                          <requirement.icon className="w-5 h-5 text-[--primary] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-lg text-[--foreground] pt-1.5 font-medium">
                          {requirement.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Earnings Showcase */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Your earnings potential
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                Real numbers from our driver community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: DollarSign,
                  label: "Average Hourly",
                  value: "AED 45-60",
                  gradient: "from-emerald-500 to-teal-600",
                  description: "Including base pay + tips",
                },
                {
                  icon: TrendingUp,
                  label: "Top Earners",
                  value: "AED 75+",
                  gradient: "from-blue-500 to-indigo-600",
                  description: "During peak hours",
                },
                {
                  icon: Award,
                  label: "Driver Rating",
                  value: "4.8/5.0",
                  gradient: "from-purple-500 to-pink-600",
                  description: "Average satisfaction score",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/40 to-[--primary-light]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />

                  <div className="relative bg-white rounded-3xl p-8 border border-[--border-light] text-center">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-[--foreground] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-[--primary] mb-3 uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <p className="text-sm text-[--muted-foreground]">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[--primary] via-blue-500 to-purple-500 bg-[length:200%_100%] animate-gradient" />

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6 max-w-3xl mx-auto py-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Start earning today
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join Cuts and become part of a community delivering healthy food
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Button
                  size="lg"
                  className="bg-white text-[--primary] hover:bg-white/90 border-0 shadow-xl px-8 group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8"
                >
                  Contact Support
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 pt-4">
                <Heart className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-sm">
                  Join 100+ happy drivers across Abu Dhabi
                </span>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
