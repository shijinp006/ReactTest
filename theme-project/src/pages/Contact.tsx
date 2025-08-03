import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();

  const backgroundColor = currentTheme.colors.background;
  const textColor = currentTheme.colors.text;
  const cardBg = currentTheme.colors.cardBackground;
  const borderColor = currentTheme.colors.borderColor;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor, color: textColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl shadow-lg p-6 sm:p-10"
        style={{
          backgroundColor: cardBg,
          boxShadow: currentTheme.card.boxShadow,
          borderRadius: currentTheme.card.borderRadius,
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-heading mb-6"
          style={{ color: currentTheme.colors.primary }}
        >
          Contact Us
        </h2>

        <p className="mb-6 text-base leading-relaxed" style={{ color: textColor }}>
          Have questions, feedback, or need assistance? Fill out the form below
          or reach us directly at our email or phone.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring"
              style={{
                backgroundColor: backgroundColor,
                borderColor,
                color: textColor,
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring"
              style={{
                backgroundColor: backgroundColor,
                borderColor,
                color: textColor,
              }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring resize-none"
              style={{
                backgroundColor: backgroundColor,
                borderColor,
                color: textColor,
              }}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 font-semibold transition duration-300 cursor-pointer w-full"
            style={{
              backgroundColor: currentTheme.colors.primary,
              color: "#fff",
              padding: `${currentTheme.button.paddingY} ${currentTheme.button.paddingX}`,
              borderRadius: currentTheme.button.borderRadius,
            }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-8 text-sm space-y-2" style={{ color: textColor }}>
          <p>
            <strong>Email:</strong> zee@-inc.com
          </p>
          <p>
            <strong>Phone:</strong> +9786544534
          </p>
          <p>
            <strong>Address:</strong> #India
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
