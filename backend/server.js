import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow Netlify + local dev
app.use(
  cors({
    origin: [
      "http://localhost:5173",        // local vite dev
      "http://127.0.0.1:5173",        // local fallback
      "https://beryfy1.netlify.app",  // ✅ deployed frontend
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Reuse Nodemailer transporter with pooling
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // 16-digit App Password
  },
  pool: true,           // ✅ keep connections alive
  maxConnections: 5,    // up to 5 connections
  maxMessages: 100,     // reuse connection for multiple emails
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "✅ Beryfy Backend Server is running!" });
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "✅ Message sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: err.message, // ✅ helps debugging
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
