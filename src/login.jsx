import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "example@gmail.com" && password === "PASSWORD") {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#faf9f6"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem 2.5rem",
          borderRadius: "1rem",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          minWidth: 320
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", color: "#bfa145", textAlign: "center" }}>Trillion Hotels Login</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc"
            }}
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;