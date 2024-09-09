// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, lastName, email, phoneNumber, studio, subject, message } = await req.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services too
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or App Password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email, // Sender address
    to: process.env.RECIPIENT_EMAIL, // List of recipients
    subject: 'Contact Form Submission',
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Studio:</strong> ${studio}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
