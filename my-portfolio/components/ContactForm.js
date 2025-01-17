"use client";
import React, { useState } from "react";
import { Button } from "./ui/MovingBorder";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="pt-10 pb-16 sm:py-20 bg-gray-100 dark:bg-black-100 flex flex-col items-center justify-center"
    >
      <div className="flex justify-center items-center mb-10">
        <Button
          className="px-10 cursor-default pointer-events-none"
          borderRadius="1.75rem"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white">
            Get In Touch
          </h2>
        </Button>
      </div>
      <BackgroundGradient containerClassName="sm:w-full sm:h-auto mt-0 max-w-4xl mx-auto p-1 rounded-3xl">
        <div className="w-full">
          <form
            className="space-y-6 dark:bg-gray-800 shadow-xl rounded-3xl p-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-base md:text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base md:text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base md:text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-transform duration-200 hover:scale-105"
              >
                Send
              </button>
            </div>
            {status && (
              <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default ContactForm;
