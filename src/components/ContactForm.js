import { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { CONTACT_FORM_WEB_APP_URL as SCRIPT_URL } from "../constants";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSending(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 rounded bg-white shadow-sm">
      <h5 className="mb-3">Send us a message</h5>
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>Your Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={4}
          placeholder="Type your message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={sending}>
          {sending ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Sending...
            </>
          ) : (
            "Send"
          )}
        </Button>
      </div>
      {status && (
        <Alert
          variant={
            status.includes("success")
              ? "success"
              : status.includes("sending")
              ? "info"
              : "danger"
          }
          className="mt-3"
        >
          {status}
        </Alert>
      )}
    </Form>
  );
};

export default ContactForm;