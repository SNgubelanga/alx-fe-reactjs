import { useState } from 'react';

import { useState } from "react";

function Contact() {
  // State hook to store form data
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          style={inputStyle} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          style={inputStyle} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          style={textareaStyle} 
          required 
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

// Inline styles
const pageStyle = {
  padding: "40px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  minHeight: "100vh"
};

const headingStyle = {
  color: "#333",
  fontSize: "32px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  width: "80%",
  maxWidth: "400px",
  margin: "auto"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px"
};

const textareaStyle = { ...inputStyle, height: "120px" };

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  width: "100%"
};

export default Contact;