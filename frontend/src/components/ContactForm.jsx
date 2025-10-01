import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Update with your backend API (Render URL)
  const API_URL = "https://beryfy1.onrender.com/api/contact";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    setErrorMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Frontend error:", error);
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1a2329] rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg">
          Ready to start your project? Let's discuss your ideas and bring them to life.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#161c20] border border-gray-700 rounded-lg text-white"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#161c20] border border-gray-700 rounded-lg text-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#161c20] border border-gray-700 rounded-lg text-white"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-[#161c20] border border-gray-700 rounded-lg text-white resize-none"
            placeholder="Write your message..."
          />
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
            ✅ Message sent successfully!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
            ❌ {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="primary-btn w-full disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
