# AI Meeting Notes Summarizer

This project is a simple **AI-powered meeting summarizer** that allows users to:
- Paste a transcript
- Enter a custom summarization prompt
- Generate a summary
- Send the summary via email

The project is built with:
- **Frontend**: React (with Tailwind CSS)
- **Backend**: Node.js + Express + Nodemailer

---

## 📂 Project Structure

ai-meeting-summarizer-full/
│── backend/ # Node.js + Express server
│ ├── server.js
│ ├── package.json
│ └── ...
│
│── frontend/ # React application
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── public/
│ │ └── index.html
│ ├── package.json
│ └── ...
│
└── README.md

yaml
Copy
Edit

---

## 🚀 How to Run the Project

### 1. Clone or Extract the Project
```bash
cd ai-meeting-summarizer-full
2. Start Backend
bash
Copy
Edit
cd backend
npm install
node server.js
Backend will start on http://localhost:5000

3. Start Frontend
Open a new terminal:

bash
Copy
Edit
cd frontend
npm install
npm start
Frontend will start on http://localhost:3000

📝 Usage
Open the frontend in your browser: http://localhost:3000

Paste your meeting transcript.

(Optional) Enter a custom prompt (e.g., "Summarize in bullet points").

Click Generate Summary → A summary will be displayed.

Enter a recipient email and click Send Email → Email will be sent.

📊 Sample Output
Input Transcript:
vbnet
Copy
Edit
Alice: Hi team, today we’ll discuss the Q3 roadmap.
Bob: We need to focus on customer retention.
Charlie: Let’s also allocate more budget to marketing.
Alice: Good point. I’ll update the roadmap.
Custom Prompt:
rust
Copy
Edit
Summarize in 3 bullet points.
Generated Summary:
Team discussed the Q3 roadmap.

Main focus: customer retention.

Decision: Allocate more budget to marketing.

📧 Email Example
If you send the summary via email, the recipient will get:

Subject: Meeting Summary
Body:

diff
Copy
Edit
Here’s the generated summary:
- Team discussed the Q3 roadmap
- Main focus: customer retention
- Decision: Allocate more budget to marketing
⚙️ Notes
For sending emails, configure Nodemailer in backend/server.js with your Gmail SMTP or another service.

You can enhance the summarization logic by integrating an AI model (e.g., OpenAI API).

✅ Future Improvements
Add user authentication

Save meeting transcripts & summaries in a database

Export summaries as PDF/Word

Integrate with Zoom/Google Meet APIs

pgsql
Copy
Edit
