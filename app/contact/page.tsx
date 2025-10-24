"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState, useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <div ref={containerRef} className="relative">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[--background-cream] to-white" />

          {/* Floating Orbs */}
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
          />

          <Container className="relative z-10">
            <motion.div
              style={{ y, opacity }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--primary]/20 bg-white/50 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-[--primary]" />
                <span className="text-sm font-medium text-[--foreground]">
                  Get in Touch
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
                Let&apos;s talk
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-xl md:text-2xl text-[--muted-foreground] max-w-2xl mx-auto leading-relaxed"
              >
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond
                as soon as possible.
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

        {/* Contact Info Cards */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

          <Container className="relative z-10">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
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
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[--primary]/40 to-[--primary-light]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />

                  <div className="relative bg-white rounded-3xl p-8 border border-[--border-light] text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} mb-6 shadow-xl`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-[--primary] mb-2 uppercase tracking-wide">
                      {info.title}
                    </h3>

                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-xl font-medium text-[--foreground] hover:text-[--primary] transition-colors"
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

        {/* Contact Form Section */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                  Send us a message
                </h2>
                <p className="text-xl text-[--muted-foreground]">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Gradient Border Glow */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl" />

                <div className="relative bg-white rounded-3xl p-12 border border-[--border-light] shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all placeholder:text-[--muted-foreground]"
                          placeholder="Your name"
                        />
                      </div>

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
                          className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all placeholder:text-[--muted-foreground]"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
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
                        <option value="general">General Inquiry</option>
                        <option value="restaurant">
                          Restaurant Partnership
                        </option>
                        <option value="driver">Driver Application</option>
                        <option value="investment">
                          Investment Opportunity
                        </option>
                        <option value="press">Press Inquiry</option>
                        <option value="support">Customer Support</option>
                      </select>
                    </div>

                    {/* Message */}
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
                        rows={6}
                        className="w-full px-6 py-4 rounded-2xl border border-[--input-border] bg-[--input] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-all resize-none placeholder:text-[--muted-foreground]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full group shadow-xl"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Response Time Section */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary] via-[--primary-light] to-[--primary]">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.08)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-gradient" />
                </div>

                <div className="relative p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
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

        {/* Map/Location Section */}
        <section className="py-32 bg-gradient-to-b from-[--gray-50] to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[--foreground] mb-6">
                Visit Our Office
              </h2>
              <p className="text-xl text-[--muted-foreground]">
                We&apos;re based in the heart of Abu Dhabi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Decorative gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-[--primary] via-[--primary-light] to-[--primary] rounded-3xl opacity-20 blur-xl" />

              <div className="relative aspect-[16/9] rounded-3xl bg-gradient-to-br from-[--primary]/5 via-[--gray-100] to-[--accent-yellow]/5 border border-[--border-light] p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[--primary] to-[--primary-light] text-white mb-4 shadow-2xl">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[--foreground] mb-3">
                      Abu Dhabi Office
                    </h3>
                    <p className="text-lg text-[--muted-foreground] mb-6">
                      Exact location to be announced
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[--border-light] text-sm font-medium text-[--foreground] shadow-lg">
                      <Clock className="w-4 h-4 text-[--primary]" />
                      Mon - Fri: 9AM - 6PM
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
