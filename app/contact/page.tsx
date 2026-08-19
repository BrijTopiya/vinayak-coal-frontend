"use client";

import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <section className="about-banner">
        <h1>CONTACT US</h1>
      </section>

      <section className="contact-content">
        <div className="contact-info-box">
          <h2>Get In Touch</h2>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <p>FIRST FLOOR, SURVEY NO. 1291, PLOT NO. 6 & 21,UMA MARKET, OFFICE NO. 127,PANCHASAR ROAD,MORBI, GUJARAT – 363642, INDIA.</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p>vinayakcoal@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p>+91 98273 38492</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">Thank you! We will get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>
    </div>
  );
}