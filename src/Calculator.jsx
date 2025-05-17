import { Link } from "react-router-dom";
import contact from "./contact.jsx";
function Calculator() {
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
          <li><a href="/" style={navLinkStyle}>Home</a></li>
          <li><a href="./Destinations" style={navLinkStyle}>Destinations</a></li>
          <li><a href="./experiences" style={navLinkStyle}>Experiences</a></li>
          <li><a href="./contact" style={navLinkStyle}>Contact</a></li>
          <li>
  <Link to="/login" style={navLinkStyle}>Login</Link>
</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
        color: "#fff", padding: "8rem 2rem 6rem 2rem", textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", textShadow: "0 2px 8px #0006" }}>
          Welcome to Trillion Hotels
        </h1>
        <p style={{ fontSize: "1.5rem", textShadow: "0 2px 8px #0006" }}>
          The world's most exclusive luxury hotel chain.
        </p>
      </section>

      {/* 1. About */}
      <Section title="About Us">
        Experience opulence and grandeur at every destination. Trillion Hotels sets the global standard for luxury, privacy, and service.
      </Section>

      {/* 2. Signature Properties */}
      <Section title="Signature Properties" img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80">
        Discover our flagship hotels in Paris, Dubai, New York, and Tokyo—each a masterpiece of architecture and hospitality.
      </Section>

      {/* 3. Private Villas */}
      <Section title="Private Villas" img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80">
        Ultimate privacy and luxury in our curated villas, nestled in the world's most breathtaking locations.
      </Section>

      {/* 4. Royal Suites */}
      <Section title="Royal Suites" img="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80">
        Stay where royalty and celebrities reside. Our suites redefine indulgence.
      </Section>

      {/* 5. Fine Dining */}
      <Section title="Fine Dining" img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80">
        Michelin-starred restaurants and world-class chefs await your palate.
      </Section>

      {/* 6. Wellness & Spa */}
      <Section title="Wellness & Spa" img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80">
        Rejuvenate in our award-winning spas and wellness centers.
      </Section>

      {/* 7. Exclusive Events */}
      <Section title="Exclusive Events" img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80">
        Host or attend unforgettable galas, weddings, and conferences.
      </Section>

      {/* 8. Art Collections */}
      <Section title="Art Collections" img="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80">
        Admire curated art from renowned artists in every property.
      </Section>

      {/* 9. Private Jet Service */}
      <Section title="Private Jet Service" img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80">
        Arrive in style with our bespoke aviation experiences.
      </Section>

      {/* 10. Yacht Charters */}
      <Section title="Yacht Charters" img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80">
        Explore the seas with our luxury yacht fleet.
      </Section>

      {/* 11. Concierge */}
      <Section title="Concierge" img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80">
        Personalized service for every guest, 24/7.
      </Section>

      {/* 12. Sustainability */}
      <Section title="Sustainability" img="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80">
        Committed to eco-friendly luxury and responsible tourism.
      </Section>

      {/* 13. Awards & Recognition */}
      <Section title="Awards & Recognition" img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80">
        Globally acclaimed for excellence and innovation.
      </Section>

      {/* 14. Membership */}
      <Section title="Membership" img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80">
        Join our elite loyalty program for exclusive privileges.
      </Section>

      {/* 15. Press & Media */}
      <Section title="Press & Media" img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80">
        Read the latest news and features about Trillion Hotels.
      </Section>

      {/* CTA */}
      <section style={{
        padding: "4rem 2rem", background: "#fff", textAlign: "center", borderBottom: "1px solid #eee"
      }}>
        <h2 href="./contact.jsx" style={{ fontSize: "2rem", color: "#bfa145", marginBottom: "1rem" }}>Book Your Stay</h2>
        <button href="./contact" style={{
          background: "#bfa145", color: "#fff", border: "none", padding: "1rem 2.5rem",
          fontSize: "1.2rem", borderRadius: "2rem", cursor: "pointer", transition: "background 0.2s"
        }}>Reserve Now</button>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#222", color: "#fff", textAlign: "center", padding: "2rem 0", fontSize: "1rem", letterSpacing: "1px"
      }}>
        © {new Date().getFullYear()} Trillion Hotels. All rights reserved.
      </footer>
    </div>
  );
}

// Helper for nav links
const navLinkStyle = {
  textDecoration: "none",
  color: "#222",
  fontWeight: 500,
  transition: "color 0.2s"
};

// Section component for DRY code
function Section({ title, img, children }) {
  return (
    <section style={{
      padding: "4rem 2rem",
      borderBottom: "1px solid #eee",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap"
    }}>
      {img && (
        <img
          src={img}
          alt={title}
          style={{
            width: "350px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
          }}
        />
      )}
      <div style={{ flex: 1, minWidth: 250 }}>
        <h2 style={{ fontSize: "2rem", color: "#bfa145", marginBottom: "1rem" }}>{title}</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>{children}</p>
      </div>
    </section>
  );
}

export default Calculator;