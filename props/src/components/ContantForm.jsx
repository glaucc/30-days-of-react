import React, { useState } from 'react';
// import axios from 'axios';
import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();



function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const nodemailer = require('nodemailer');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = { name, email, message };
    const EMAIL = "";
    const PASSWORD = "";

    const nodemailer = require('nodemailer');

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        service: 'gmail',
        auth: {
          user: EMAIL, // Replace with your Gmail email address
          pass: PASSWORD // Replace with your Gmail password
        }
      });
  
      const mailOptions = {
        from: EMAIL, // Replace with your Gmail email address
        to: EMAIL, // Replace with the recipient email address
        subject: 'New message from your website',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      };
  
      await transporter.sendMail(mailOptions);
  
      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className='mainForm'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='messageBlock'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
