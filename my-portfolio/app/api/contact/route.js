import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Configure the transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // Use 465 for SSL or 587 for TLS
        secure: true, // Use true for 465, false for 587
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail address
          pass: process.env.GMAIL_PASS, // Your Gmail App Password
        },
        connectionTimeout: 10000, // 10 seconds
      });
      

    // Define the email content
    const mailOptions = {
        from: `from portfolio website`,
        to: "soni93@uwindsor.ca",
        subject: "New Contact Form Submission from portfolio website",
        text: `You have a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };
      

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
