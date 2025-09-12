// src/components/PetCareChatbot.jsx
import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";

const PetCareChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 🐾! I'm your Pet Care Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    setLoading(true);
    try {
      const res = await axiosInstance.post("/ai/feedbackAI", { message: input });
      const reply = res.data.reply;

      setMessages([...newMessages, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <Layout>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg w-100" style={{ maxWidth: "500px" }}>
          {/* Chat Header */}
          <div className="card-header bg-primary text-white fw-bold d-flex align-items-center">
            <span role="img" aria-label="dog" className="me-2">
              🐕
            </span>
            Pet Care Chatbot
          </div>

          {/* Chat Messages */}
          <div
            className="card-body overflow-auto"
            style={{ height: "450px", backgroundColor: "#f9f9f9" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`d-flex mb-3 ${
                  msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 px-3 rounded-3 ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-light border"
                  }`}
                  style={{ maxWidth: "75%" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-muted small fst-italic">Typing...</div>
            )}
          </div>

          {/* Input Box */}
          <div className="card-footer p-2">
            <div className="input-group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="form-control"
                placeholder="Ask about pet care..."
              />
              <button
                className="btn btn-primary"
                onClick={sendMessage}
                disabled={loading}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PetCareChatbot;