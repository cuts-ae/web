"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Target,
  Users,
  TrendingUp,
  Mail,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useRef } from "react";

export default function AboutPage() {
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

          {/* Floating Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[--primary]/20 to-[--accent-yellow]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[--primary-light]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 50, 0],
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
                  Our Story
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
                Building a healthier UAE,
                <br />
                <span className="bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] bg-clip-text text-transparent animate-gradient">
                  one meal at a time
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
                We're on a mission to make healthy eating accessible,
                convenient, and enjoyable for everyone in Abu Dhabi.
              </motion.p>
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

        {/* Story Section - Split Layout */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

          <Container className="relative z-10">
            <div className="max-w-6xl mx-auto space-y-32">
              {/* Our Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--primary]/10 text-[--primary] text-sm font-medium">
                    <Heart className="w-4 h-4" />
                    Our Story
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[--foreground]">
                    Born from a simple observation
                  </h2>
                  <div className="space-y-4 text-lg text-[--muted-foreground] leading-relaxed">
                    <p>
                      People want to eat healthy, but finding nutritious meals
                      that are convenient, delicious, and transparent about
                      ingredients is surprisingly difficult.
                    </p>
                    <p>
                      We saw an opportunity to bridge this gap in the UAE
                      market. While food delivery has made ordering meals
                      convenient, most platforms focus on speed and variety
                      without prioritizing nutrition or transparency.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[--primary]/20 to-[--primary-light]/20 rounded-3xl blur-2xl" />
                  <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[--primary]/10 to-[--accent-yellow]/10 p-12 flex items-center justify-center border border-[--border-light]">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[--primary] to-[--primary-light] flex items-center justify-center shadow-2xl">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-5xl font-bold text-[--foreground]">
                          10K+
                        </div>
                        <div className="text-[--muted-foreground]">
                          Healthy meals delivered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                <div className="order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-[--primary]/20 rounded-3xl blur-2xl" />
                  <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-500/5 to-[--primary]/10 p-12 flex items-center justify-center border border-[--border-light]">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-5xl font-bold text-[--foreground]">
                          50+
                        </div>
                        <div className="text-[--muted-foreground]">
                          Partner restaurants
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">
                    <Target className="w-4 h-4" />
                    Our Mission
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[--foreground]">
                    Making healthy eating effortless
                  </h2>
                  <div className="space-y-4 text-lg text-[--muted-foreground] leading-relaxed">
                    <p>
                      We believe that good nutrition shouldn't be a luxury or
                      require hours of meal prep — it should be as easy as
                      ordering from your favorite restaurant.
                    </p>
                    <p>
                      That's why we created Cuts - the first food delivery
                      platform in the UAE that puts health and nutrition at the
                      center.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Values - Bento Grid */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white relative">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Our <span className="text-[--primary]">Values</span>
              </h2>
              <p className="text-xl text-[--muted-foreground] max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Health First",
                  description:
                    "We believe nutrition is the foundation of wellbeing and make healthy eating accessible to everyone",
                  gradient: "from-rose-500 to-pink-600",
                },
                {
                  icon: Users,
                  title: "Community Focused",
                  description:
                    "We're building a supportive ecosystem that connects restaurants, drivers, and customers",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Shield,
                  title: "Transparency",
                  description:
                    "Complete nutrition information and honest communication in everything we do",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "Using technology to solve real problems and make healthy choices effortless",
                  gradient: "from-amber-500 to-orange-600",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/50 via-[--primary-light]/50 to-[--primary]/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                  <div className="relative bg-white rounded-3xl p-10 border border-[--border-light] h-full overflow-hidden">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 shadow-xl`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[--foreground] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[--muted-foreground] leading-relaxed">
                      {value.description}
                    </p>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[--primary]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Impact by the numbers
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                Growing together with our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Users,
                  label: "Partner Restaurants",
                  value: "50+",
                  gradient: "from-emerald-500 to-teal-600",
                  description: "Healthy restaurants in Abu Dhabi",
                },
                {
                  icon: Heart,
                  label: "Meals Delivered",
                  value: "10K+",
                  gradient: "from-rose-500 to-pink-600",
                  description: "Nutritious meals to happy customers",
                },
                {
                  icon: TrendingUp,
                  label: "Customer Satisfaction",
                  value: "4.9/5",
                  gradient: "from-blue-500 to-indigo-600",
                  description: "Average rating across all orders",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  {/* Glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/40 to-[--primary-light]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />

                  <div className="relative bg-white rounded-3xl p-10 border border-[--border-light] text-center">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="text-5xl font-bold text-[--foreground] mb-2">
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

        {/* Investors Section */}
        <section className="py-32 bg-gradient-to-br from-[--background-cream] via-white to-[--gray-50] relative overflow-hidden">
          {/* Subtle animated gradient orb */}
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[--primary]/10 to-[--accent-yellow]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--primary]/10 text-[--primary] text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  For Investors
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-[--foreground]">
                  Interested in investing?
                </h2>

                <p className="text-xl text-[--muted-foreground] leading-relaxed max-w-3xl mx-auto">
                  We're addressing a massive market opportunity in the UAE's
                  food delivery space by focusing on the rapidly growing health
                  and wellness segment. Our unique positioning combines
                  nutrition transparency, quality partnerships, and technology
                  to create a platform that serves an underserved market.
                </p>

                <div className="pt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group shadow-2xl"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Key metrics for investors */}
                <div className="grid md:grid-cols-3 gap-8 pt-12">
                  {[
                    { label: "Market Growth", value: "23% YoY" },
                    { label: "Customer Retention", value: "85%" },
                    { label: "Avg Order Value", value: "AED 85" },
                  ].map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-[--foreground] mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-[--muted-foreground]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Press Section */}
        <section className="py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium">
                <Mail className="w-4 h-4" />
                Press & Media
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground]">
                In the News
              </h2>

              <p className="text-lg text-[--muted-foreground]">
                For press inquiries, partnership opportunities, or media
                coverage, we'd love to hear from you.
              </p>

              <div className="pt-4">
                <Button variant="outline" size="lg" className="group border-2">
                  <Mail className="mr-2 h-5 w-5" />
                  Press Contact
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
