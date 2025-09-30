# Beryfy Backend Server

This is the backend server for the Beryfy contact form, configured to send emails via Gmail.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gmail

You need to set up Gmail App Password for sending emails:

1. **Enable 2-Factor Authentication** on your Google Account
2. Go to **Google Account Settings** > **Security**
3. Under **2-Step Verification**, click **App passwords**
4. Select **Mail** and **Other (custom name)**
5. Enter "Beryfy Contact Form" as the name
6. Copy the generated 16-character password

### 3. Environment Configuration

Create a `.env` file in the backend directory with the following content:

```env
# Gmail Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password

# Server Configuration
PORT=5000
NODE_ENV=development
```

**Important:** 
- Use your Gmail address for `EMAIL_USER`
- Use the App Password (not your regular Gmail password) for `EMAIL_PASS`
- Never commit the `.env` file to version control

### 4. Run the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### GET /
Returns server status message.

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Troubleshooting

### Common Issues

1. **Authentication Error**: Make sure you're using an App Password, not your regular Gmail password
2. **Connection Error**: Check your internet connection and Gmail settings
3. **CORS Error**: Ensure the frontend is running on the correct port (default: 5173)

### Security Notes

- The contact form uses your Gmail account to send emails
- Make sure to use App Passwords for security
- Never expose your `.env` file in public repositories
- Consider using environment variables in production deployments
