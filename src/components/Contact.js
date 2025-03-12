import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("service_6633u57", "template_qzskm7j", formData, "jkSTwxXeAiWMdIV4N")
      .then(() => { setStatus("Message sent successfully!"); setFormData({ name: "", email: "", message: "" }); })
      .catch(() => setStatus("Failed to send message. Please try again."));
  };

  const sendWhatsApp = () => {
    const url = `https://wa.me/+917498660387?text=Hello, my name is ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={sendEmail} className="p-4 shadow-lg">
        <input type="text" name="name" className="form-control mb-2" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" className="form-control mb-2" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" className="form-control mb-2" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="btn btn-success w-100">Send Email</button>
      </form>
      <button onClick={sendWhatsApp} className="btn btn-primary w-100 mt-2">Send via WhatsApp</button>
      {status && <p className="mt-3 text-center">{status}</p>}
    </div>
  );
}

export default Contact;
