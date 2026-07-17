text: "THIS IS THE NEW CHATBOT 🚀"
import { useState, useRef, useEffect } from "react";
import "./AIChatbot.css";
import { getResponse } from "../utils/chatEngine";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `"THIS IS THE NEW CHATBOT 🚀"

I'm Rachana AI Assistant.

I can answer questions about:

🛡️ SOC Experience
💻 Cybersecurity Projects
📊 Splunk & Wazuh
🎯 Threat Hunting
🏆 Certifications
🎓 Education
💼 Career Goals

Try asking:

• Tell me about yourself
• What projects have you built?
• What are your SOC skills?
• Explain AI-Powered SOC Assistant`
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);

  function ask(question) {
    if (!question.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: question
      }
    ]);

    setLoading(true);

    setTimeout(() => {
      const reply = getResponse(question);

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: reply
        }
      ]);

      setLoading(false);
    }, 700);
  }

  function sendMessage() {
    if (!input.trim()) return;

    const question = input;

    setInput("");

    ask(question);
  }

  return (
    <>
      <button
        className="chat-button"
        onClick={() => setOpen(!open)}
      >
        🤖
      </button>

      {open && (
        <div className="chat-window">

          <div className="chat-header">

            <div>
              🛡️ Rachana AI Assistant
            </div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="message bot typing">
                🧠 Analyzing Rachana's cybersecurity profile...
              </div>
            )}

            <div ref={messagesEndRef}></div>

          </div>

          <div className="quick-questions">

            <button onClick={() => ask("Tell me about yourself")}>
              👤 About
            </button>

            <button onClick={() => ask("Skills")}>
              🛡️ Skills
            </button>

            <button onClick={() => ask("Projects")}>
              💻 Projects
            </button>

            <button onClick={() => ask("AI-Powered SOC Assistant")}>
              🤖 AI SOC
            </button>

            <button onClick={() => ask("Experience")}>
              📊 Experience
            </button>

            <button onClick={() => ask("Certifications")}>
              🏆 Certificates
            </button>

          </div>

          <div className="chat-input">

            <input
              value={input}
              placeholder="Ask me anything about Rachana..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}