import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "#222",
  fontWeight: 500,
  transition: "color 0.2s"
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, Arial, sans-serif", background: "#faf9f6", color: "#222" }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "#fff", padding: "1rem 2rem", borderBottom: "1px solid #e5e5e5", position: "sticky", top: 0, zIndex: 100
      }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px", color: "#222" }}>
          Trillion Hotels
        </div>
        <ul style={{ listStyle: "none", display: "flex", gap: "2rem", margin: 0, padding: 0 }}>
          <li><Link to="/" style={navLinkStyle}>Home</Link></li>
          <li><Link to="/destinations" style={navLinkStyle}>Destinations</Link></li>
          <li><Link to="/experiences" style={navLinkStyle}>Experiences</Link></li>
          <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
          <li>
            <Link to="/login" style={navLinkStyle}>Login</Link>
          </li>
        </ul>
      </nav>

      {/* Contact Content */}
      <header style={{
        background: "#fff",
        padding: "2rem 2rem 1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#bfa145", marginBottom: "0.5rem" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#444" }}>
          We would love to hear from you. Please fill out the form below.
        </p>
      </header>

      <div style={{
        maxWidth: 500,
        margin: "3rem auto",
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        padding: "2.5rem"
      }}>
        {submitted ? (
          <div style={{ textAlign: "center", color: "#bfa145", fontSize: "1.2rem" }}>
            Thank you for contacting us!<br />We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.2rem" }}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  marginTop: 6
                }}
              />
            </div>
            <div style={{ marginBottom: "1.2rem" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  marginTop: 6
                }}
              />
            </div>
            <div style={{ marginBottom: "1.2rem" }}>
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  marginTop: 6,
                  resize: "vertical"
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#bfa145",
                color: "#fff",
                border: "none",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "2rem 0",
        fontSize: "1rem",
        letterSpacing: "1px"
      }}>
        © {new Date().getFullYear()} Trillion Hotels. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;