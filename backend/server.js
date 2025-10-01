import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
        ],
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a valid email address" });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ Missing email configuration in environment variables");
        return res.status(500).json({
            success: false,
            message: "Email service configuration is missing",
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.verify();

        function sanitize(str) {
            return str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }

        const mailOptions = {
            from: `"${sanitize(name)} via Beryfy Website" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Beryfy | New Client Inquiry: ${sanitize(subject)}`,
            text: `Name: ${sanitize(name)}\nEmail: ${sanitize(email)}\nSubject: ${sanitize(subject)}\n\nMessage:\n${sanitize(message)}`,
            html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background-color: #6a00ff; padding: 20px; color: #ffffff; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">Beryfy</h1>
                <p style="margin: 5px 0 0 0; font-size: 14px;">New Client Inquiry</p>
            </div>

            <!-- Body -->
            <div style="padding: 20px; background-color: #f8f9fa;">
                <h2 style="font-size: 18px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Submission Details</h2>
                <p><strong>Name:</strong> ${sanitize(name)}</p>
                <p><strong>Email:</strong> ${sanitize(email)}</p>
                <p><strong>Subject:</strong> ${sanitize(subject)}</p>

                <h3 style="color: #333; margin-top: 20px;">Message:</h3>
                <p style="line-height: 1.6; color: #555;">${sanitize(message).replace(/\n/g, '<br>')}</p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
                <p><strong>Beryfy</strong> | www.beryfy.co.in</p>
                <p>This email was sent via the Beryfy website contact form.</p>
            </div>
        </div>
    `,
        };


        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "✅ Message sent successfully!" });
    } catch (err) {
        console.error("❌ Error sending email:", err);

        if (err.code === "EAUTH") {
            return res.status(500).json({
                success: false,
                message:
                    "Email authentication failed. Please check your email credentials.",
            });
        } else if (err.code === "ECONNECTION") {
            return res.status(500).json({
                success: false,
                message: "Unable to connect to email service. Please try again later.",
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "Failed to send message. Please try again later.",
            });
        }
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Beryfy Backend Server is running at http://localhost:${PORT}\n`);
});
