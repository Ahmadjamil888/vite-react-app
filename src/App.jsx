import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator.jsx";
import Destinations from "./destinations.jsx";
import Experiences from "./experiences.jsx";
import Contact from "./contact.jsx";
import Login from "./login.jsx";
import Dashboard from "./Dashboard.jsx";
import { AuthProvider, useAuth } from "./AuthContext";
import NotFound from "./NotFound.jsx";

// Protects dashboard route: shows Dashboard if logged in, otherwise shows Login
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;