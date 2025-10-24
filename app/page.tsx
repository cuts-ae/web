"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  Smartphone,
} from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        style={{ opacity, scale }}
        className="pt-32 pb-20 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Healthy meals.
              <br />
              <span className="text-emerald-600">Delivered with care.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl text-gray-600 mb-12"
          >
            UAE&apos;s first nutrition-focused food delivery platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 px-8 py-4 rounded-full font-medium hover:border-black transition-colors"
            >
              For Restaurants
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "50+", label: "Partner Restaurants" },
              { value: "10K+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-5xl font-semibold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-semibold mb-4">Why Choose Cuts?</h2>
            <p className="text-xl text-gray-600">
              Making healthy eating easier than ever
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-7 h-7" />,
                color: "emerald",
                title: "Nutrition First",
                description:
                  "Every meal is crafted with nutritional balance in mind. Macros, calories, and ingredients clearly labeled.",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                color: "yellow",
                title: "Lightning Fast",
                description:
                  "Average delivery time of 25 minutes. Your healthy meal arrives fresh and hot, right when you need it.",
              },
              {
                icon: <Heart className="w-7 h-7" />,
                color: "orange",
                title: "Made with Love",
                description:
                  "Premium quality at competitive prices. No hidden fees, transparent pricing on every order.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 text-${feature.color}-600`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                text: "Real-time tracking",
                color: "blue",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                text: "Food safety certified",
                color: "green",
              },
              {
                icon: <Star className="w-5 h-5" />,
                text: "4.9 average rating",
                color: "yellow",
              },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full border border-gray-200"
              >
                <div className={`text-${item.color}-600`}>{item.icon}</div>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-semibold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "1",
                title: "Browse & Select",
                description:
                  "Choose from 50+ restaurants offering healthy, nutritious meals with detailed nutritional information.",
                delay: 0,
              },
              {
                number: "2",
                title: "Customize & Order",
                description:
                  "Personalize your meal to fit your dietary preferences and fitness goals. Place your order in seconds.",
                delay: 0.2,
              },
              {
                number: "3",
                title: "Enjoy Fresh Food",
                description:
                  "Track your order in real-time. Your meal arrives fresh, hot, and ready to fuel your day.",
                delay: 0.4,
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: step.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-semibold mb-6">
                Download the app today
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Available on iOS. Start your journey to healthier eating with
                the tap of a button.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Meals starting from د.إ 25 • Free delivery on orders over د.إ
                100
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-6 py-4 rounded-xl font-medium flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg"
                >
                  <Apple className="w-6 h-6" />
                  App Store
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl h-[500px] flex items-center justify-center text-white text-2xl font-semibold shadow-2xl"
              >
                <div className="text-center">
                  <Smartphone className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p>App Preview</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-semibold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Fitness Enthusiast",
                text: "Finally, a delivery app that actually cares about nutrition! The macro breakdowns are incredibly helpful for my fitness goals.",
                delay: 0,
              },
              {
                name: "Ahmed K.",
                role: "Business Professional",
                text: "Super fast delivery and the food quality is outstanding. This has become my go-to for lunch every day.",
                delay: 0.1,
              },
              {
                name: "Layla H.",
                role: "Nutrition Coach",
                text: "Game changer for meal prep. The variety of healthy options means I never get bored with my diet.",
                delay: 0.2,
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold mb-6"
          >
            Ready to start eating healthier?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Join thousands of customers who have transformed their eating habits
            with Cuts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-xl"
            >
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
