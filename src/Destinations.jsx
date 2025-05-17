import React from "react";
import { Link } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "#222",
  fontWeight: 500,
  transition: "color 0.2s"
};

function Destinations() {
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
          <li><a href="./experiences" style={navLinkStyle}>Experiences</a></li>
          <li><a href="./contact" style={navLinkStyle}>Contact</a></li>
          <li>
            <Link to="/login" style={navLinkStyle}>Login</Link>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header style={{
        background: "#fff",
        padding: "2rem 2rem 1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#bfa145", marginBottom: "0.5rem" }}>
          Our Destinations
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#444" }}>
          Explore the world's most exclusive locations with Trillion Hotels.
        </p>
      </header>

      {/* Destinations List */}
      <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 1rem" }}>
        <DestinationSection
          title="Paris, France"
          img="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
        >
          The city of lights and love. Enjoy breathtaking views of the Eiffel Tower, Michelin-starred dining, and timeless elegance at our Paris flagship.
        </DestinationSection>
        <DestinationSection
          title="Dubai, UAE"
          img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Experience futuristic luxury, private beaches, and the world’s tallest skyscrapers in the heart of Dubai.
        </DestinationSection>
        <DestinationSection
          title="New York, USA"
          img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
        >
          Discover the energy of Manhattan with penthouse suites overlooking Central Park and exclusive city experiences.
        </DestinationSection>
        <DestinationSection
          title="Tokyo, Japan"
          img="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Immerse yourself in a blend of tradition and innovation, with serene gardens and world-class hospitality.
        </DestinationSection>
        <DestinationSection
          title="Maldives"
          img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
        >
          Private overwater villas, turquoise lagoons, and ultimate seclusion in paradise.
        </DestinationSection>
        <DestinationSection
          title="Santorini, Greece"
          img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Whitewashed architecture, stunning sunsets, and luxury suites perched above the Aegean Sea.
        </DestinationSection>
        <DestinationSection
          title="London, UK"
          img="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
        >
          Classic British sophistication meets modern luxury in the heart of Mayfair.
        </DestinationSection>
        <DestinationSection
          title="Bali, Indonesia"
          img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Lush rainforests, private infinity pools, and tranquil spa retreats await in Bali.
        </DestinationSection>
        <DestinationSection
          title="Venice, Italy"
          img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        >
          Arrive by gondola and stay in palatial suites along the Grand Canal.
        </DestinationSection>
        <DestinationSection
          title="Sydney, Australia"
          img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          reverse
        >
          Iconic harbor views, world-class dining, and vibrant city life at your doorstep.
        </DestinationSection>
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

// Destination section component
function DestinationSection({ title, img, children, reverse }) {
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

export default Destinations;