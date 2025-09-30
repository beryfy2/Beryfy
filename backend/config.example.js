// Gmail Configuration for Contact Form
// Copy this file to config.js and replace these values with your actual Gmail credentials

export const config = {
    // Your Gmail address (the email that will receive contact form messages)
    EMAIL_USER: 'your-email@gmail.com',
    
    // Your Gmail App Password (NOT your regular Gmail password)
    // To get an App Password:
    // 1. Go to your Google Account settings
    // 2. Security > 2-Step Verification (must be enabled)
    // 3. App passwords > Generate app password
    // 4. Select "Mail" and generate password
    // 5. Use this generated password here (16 characters, no spaces)
    EMAIL_PASS: 'your-app-password-here',
    
    // Server Configuration
    PORT: 5000,
    NODE_ENV: 'development'
};
