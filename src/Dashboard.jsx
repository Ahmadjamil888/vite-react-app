import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #faf9f6 60%, #e5e5e5 100%)",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{
        background: "#222",
        color: "#fff",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
      }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px", color: "#bfa145" }}>
          Trillion Hotels Admin
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: "#bfa145",
            color: "#fff",
            border: "none",
            padding: "0.7rem 2rem",
            borderRadius: "2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          background: "#fff",
          padding: "2.5rem 3.5rem",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          minWidth: 350,
          maxWidth: 500,
          textAlign: "center"
        }}>
          <h1 style={{ color: "#bfa145", marginBottom: "1.5rem", fontSize: "2rem" }}>
            Welcome, Admin
          </h1>
          <p style={{ fontSize: "1.15rem", marginBottom: "2rem", color: "#444" }}>
            You have successfully logged in to the <b>Trillion Hotels International Admin Panel</b>.<br />
            Manage properties, bookings, and exclusive guest experiences worldwide.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1.5rem",
            flexWrap: "wrap"
          }}>
            <AdminCard title="Properties" desc="View & edit all hotel locations" />
            <AdminCard title="Bookings" desc="Manage reservations & VIP guests" />
            <AdminCard title="Staff" desc="Oversee staff & assignments" />
            <AdminCard title="Reports" desc="View analytics & performance" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "1rem 0",
        fontSize: "1rem",
        letterSpacing: "1px"
      }}>
        © {new Date().getFullYear()} Trillion Hotels International. Admin Portal.
      </footer>
    </div>
  );
}

// Simple admin dashboard card
function AdminCard({ title, desc }) {
  return (
    <div style={{
      background: "#faf9f6",
      border: "1px solid #e5e5e5",
      borderRadius: "1rem",
      padding: "1.2rem 1.5rem",
      minWidth: 120,
      minHeight: 90,
      marginBottom: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
    }}>
      <div style={{ fontWeight: "bold", color: "#bfa145", fontSize: "1.1rem", marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#444", fontSize: "0.98rem" }}>{desc}</div>
    </div>
  );
}

export default Dashboard;