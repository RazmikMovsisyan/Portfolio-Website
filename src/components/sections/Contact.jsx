import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Send,
  MessageSquare,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import FadeIn from "../animations/fadeIn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  };

  const PUBLIC_EMAIL = "info@razmikmovsisyan.com";

  const PRIVATE_EMAIL = "razmikmovsisyan@icloud.com";

  const SOCIAL_LINKS = [
    {
      name: "GitHub",
      url: "https://github.com/razmikmovsisyan",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: PRIVATE_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: PUBLIC_EMAIL,
          submission_time: new Date().toLocaleString("de-DE"),
        },
        EMAILJS_CONFIG.userId
      );

      setSubmitStatus({
        type: "success",
        message: `✓ Message sent! I'll reply within 24h from ${PUBLIC_EMAIL}.`,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);

      let errorMessage =
        "Failed to send message. Please try again or email me directly at info@razmikmovsisyan.com.";

      if (error.text?.includes("quota")) {
        errorMessage = "Daily email limit reached. Please try again tomorrow.";
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Let's Connect
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Get In Touch
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-base text-white/70 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Email</div>
                      <a
                        href={`mailto:${PUBLIC_EMAIL}`}
                        className="text-white hover:text-primary transition-colors duration-300"
                      >
                        {PUBLIC_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Location</div>
                      <div className="text-white">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={200}>
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 w-fit">
                  <Send className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Send Message
                  </span>
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-5 rounded-xl border ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-300"
                        : "bg-red-500/10 border-red-500/30 text-red-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm leading-relaxed">
                        {submitStatus.message}
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 group-hover:text-primary transition-colors duration-300">
                        <User className="w-5 h-5 text-white/70" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                          errors.name
                            ? "border-red-500/50 text-white bg-red-500/5"
                            : "border-white/10 text-white hover:border-white/20"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Your Email *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 group-hover:text-primary transition-colors duration-300">
                        <Mail className="w-5 h-5 text-white/70" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                          errors.email
                            ? "border-red-500/50 text-white bg-red-500/5"
                            : "border-white/10 text-white hover:border-white/20"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-white/70 mb-2"
                    >
                      Your Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        rows="5"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500/50 text-white bg-red-500/5"
                            : "border-white/10 text-white hover:border-white/20"
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 ${
                      isSubmitting
                        ? "bg-primary/40 border-primary/50 cursor-not-allowed"
                        : "bg-gradient-to-r from-primary/50 to-primary/10 border-primary/30 hover:bg-primary/30 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="text-white font-medium">Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">
                          Send Message
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/50 text-center">
                    Replies from:{" "}
                    <span className="text-white/70">{PUBLIC_EMAIL}</span>
                  </p>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
