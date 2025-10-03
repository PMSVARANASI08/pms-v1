import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard");
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      <h2 className="mb-4 d-flex align-items-center gap-2">
        <FaSignInAlt className="text-primary" /> Admin Login
      </h2>
      <form onSubmit={handleLogin} className="w-100" style={{ maxWidth: "400px" }}>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaEnvelope />
          </InputGroup.Text>
          <FormControl
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaLock />
          </InputGroup.Text>
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>

        <Button type="submit" className="w-100" variant="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}
