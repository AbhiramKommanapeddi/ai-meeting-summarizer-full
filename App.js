import React, { useState } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerateSummary = async () => {
    // Call backend API
    const res = await fetch("http://localhost:5000/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transcript, prompt }),
    });

    const data = await res.json();
    setSummary(data.summary);
  };

  const handleSendEmail = async () => {
    await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, summary }),
    });
    alert("Email sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          AI Meeting Notes Summarizer
        </h1>

        {/* Transcript Input */}
        <textarea
          placeholder="Paste transcript here"
          className="w-full h-32 p-3 border rounded-lg mb-4"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />

        {/* Custom Prompt */}
        <input
          type="text"
          placeholder="Enter custom prompt"
          className="w-full p-3 border rounded-lg mb-4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {/* Generate Summary */}
        <button
          onClick={handleGenerateSummary}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
        >
          Generate Summary
        </button>

        {/* Display Summary */}
        {summary && (
          <div className="bg-gray-50 p-4 border rounded-lg mb-4">
            <h2 className="font-semibold mb-2">Summary:</h2>
            <p>{summary}</p>
          </div>
        )}

        {/* Recipient Email */}
        <input
          type="email"
          placeholder="Recipient email"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Send Email */}
        <button
          onClick={handleSendEmail}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default App;
