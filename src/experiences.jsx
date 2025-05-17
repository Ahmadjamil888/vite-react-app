import React from "react";
import { Link } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "#222",
  fontWeight: 500,
  transition: "color 0.2s"
};

function Experiences() {
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

      {/* Experiences Content */}
      <header style={{
        background: "#fff",
        padding: "2rem 2rem 1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#bfa145", marginBottom: "0.5rem" }}>
          Signature Experiences
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#444" }}>
          Discover the unforgettable moments that define Trillion Hotels.
        </p>
      </header>

      <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 1rem" }}>
        <ExperienceSection
          title="Private Island Retreats"
          img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        >
          Escape to your own private paradise with personalized service, secluded beaches, and luxury villas.
        </ExperienceSection>
        <ExperienceSection
          title="Michelin-Starred Dining"
          img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Savor world-class cuisine crafted by renowned chefs in breathtaking settings.
        </ExperienceSection>
        <ExperienceSection
          title="Wellness & Spa Journeys"
          img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        >
          Rejuvenate with holistic treatments, yoga retreats, and tranquil spa sanctuaries.
        </ExperienceSection>
        <ExperienceSection
          title="Yacht & Jet Charters"
          img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Travel in style with our private fleet, offering bespoke journeys across sea and sky.
        </ExperienceSection>
        <ExperienceSection
          title="Cultural Immersions"
          img="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
        >
          Exclusive access to art, music, and local traditions curated for our guests.
        </ExperienceSection>
        <ExperienceSection
          title="Royal Suite Living"
          img="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Experience the pinnacle of luxury in our signature royal suites, favored by celebrities and dignitaries.
        </ExperienceSection>
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

function ExperienceSection({ title, img, children, reverse }) {
  return (
    <section style={{
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row",
      alignItems: "center",
      gap: "2.5rem",
      marginBottom: "3rem",
      background: "#fff",
      borderRadius: "1.5rem",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      overflow: "hidden"
    }}>
      <img
        src={img}
        alt={title}
        style={{
          width: 370,
          height: 240,
          objectFit: "cover",
          borderRadius: reverse ? "0 1.5rem 1.5rem 0" : "1.5rem 0 0 1.5rem"
        }}
      />
      <div style={{ flex: 1, padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#bfa145", marginBottom: "1rem" }}>{title}</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>{children}</p>
      </div>
    </section>
  );
}

export default Experiences;