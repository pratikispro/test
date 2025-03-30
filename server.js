require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

// Load email credentials from environment variables
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email transport error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: process.env.EMAIL_USER,
    to: "your-email@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending mail:", error);
      return res.status(500).json({ error: "Email sending failed." });
    }
    res.status(200).json({ status: "Message Sent", info });
  });
});
