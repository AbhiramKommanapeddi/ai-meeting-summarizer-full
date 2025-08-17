const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Summarization API (mock AI service)
app.post("/api/summarize", async (req, res) => {
  const { transcript, prompt } = req.body;
  const summary = `Summary based on prompt: ${prompt}\n${transcript.slice(0, 100)}...`;
  res.json({ summary });
});

// Email API
app.post("/api/send", async (req, res) => {
  const { email, summary } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password"
    }
  });

  let mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Meeting Summary",
    text: summary
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.json({ message: "Email sent!" });
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
