import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#faf9f6",
      color: "#222"
    }}>
      <h1 style={{ fontSize: "4rem", color: "#bfa145" }}>404</h1>
      <h2 style={{ marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={{
        background: "#bfa145",
        color: "#fff",
        padding: "0.75rem 2rem",
        borderRadius: "2rem",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;