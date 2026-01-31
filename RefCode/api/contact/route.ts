import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';

// Escape HTML to prevent XSS
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

// Load and process email template
const getEmailTemplate = async (name: string, email: string, subject: string, message: string) => {
  // Escape all user input
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  
  // Load template file
  const templatePath = path.join(process.cwd(), 'app', 'api', 'contact', 'support_email.html');
  let template = await fs.readFile(templatePath, 'utf-8');
  
  // Replace placeholders
  template = template
    .replace(/{{SENDER_NAME}}/g, safeName)
    .replace(/{{SENDER_EMAIL}}/g, safeEmail)
    .replace(/{{SUBJECT}}/g, safeSubject)
    .replace(/{{SUBJECT_ENCODED}}/g, encodeURIComponent(subject))
    .replace(/{{MESSAGE}}/g, safeMessage);
  
  return template;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpServer = process.env.SMTP_SERVER || 'smtp.gmail.com';
    const smtpUsername = process.env.SMTP_USERNAME;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpRecipient = process.env.SMTP_RECIPIENT || process.env.SMTP_USERNAME;

    if (!smtpUsername || !smtpPassword) {
      return NextResponse.json(
        { error: 'SMTP not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    });

    // Email content
    const emailHtml = await getEmailTemplate(name, email, subject, message);

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${smtpUsername}>`,
      replyTo: email,
      to: smtpRecipient,
      subject: `Support: ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}

