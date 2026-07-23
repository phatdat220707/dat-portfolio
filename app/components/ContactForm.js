"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
          rows="5"
          required
        />
      </div>

      <button type="submit">Send Message</button>

      {submitted && (
        <p className="formMessage">
          Thank you. Your message has been recorded in the browser console.
        </p>
      )}
    </form>
  );
}