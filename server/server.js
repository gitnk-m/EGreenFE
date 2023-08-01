// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 587; // You can use any port you prefer

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
app.use(express.json());

// API endpoint to handle sending emails
app.post('https://api.render.com/deploy/srv-cj4ddpaip7vuasiaqd90?key=Wrdyaec4InM', async (req, res) => {
  try {
    const { name, company, phone, email, location, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // service: 'Gmail', // You can use other email services, or use SMTP options for your own server
      host: 'smtp.gmail.com',
      port: 587, // or 465 for SSL
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'justadummynk@gmail.com', // Replace with your email address
        pass: 'qbbemphcddhijtkh', // Replace with your email password or app password for Gmail
      },
    });

    // Email data
    const mailOptions = {
      from: 'justadummynk@gmail.com', // Sender address
      to: 'justadummynk@gmail.com', // Recipient address (from the form data)
      subject: `${name}--${company}--${location}`, // Subject of the email (from the form data)
      text: `Name: ${name}
Company: ${company}
Location: ${location}
Phone: ${phone}
E-mail: ${email}
message: ${message}`, // Email body (from the form data)
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client with success message
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    // Respond with an error message if something went wrong
    res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
