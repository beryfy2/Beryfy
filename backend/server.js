import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// ✅ Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",      // local dev
    "https://your-netlify-site.netlify.app" // deployed frontend
  ],
  methods: ["POST"],
  credentials: true
}));
app.use(express.json());

// ✅ Create transporter ONCE (Brevo SMTP)
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER, // usually your Brevo account email
    pass: process.env.BREVO_KEY   // your Brevo API key
  },
  pool: true,
  maxConnections: 1,
  maxMessages: Infinity,
});

// ✅ Route to send email
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.BREVO_USER}>`,
      to: process.env.BREVO_USER, // your inbox
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email send failed:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
