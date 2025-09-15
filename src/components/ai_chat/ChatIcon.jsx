import React, { useEffect } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export const ChatIcon = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
        $("#header-fixed-height").removeClass("active-height");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
        $("#header-fixed-height").addClass("active-height");
      }
    });

  
  }, []);

  const handleChatClick = () => {
    navigate("/petchat");
  };

  return (
    <>
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      
      {/* Chat Icon Button */}
      <button 
        className="chat-icon-button"
        onClick={handleChatClick}
        title="Chat with us"
      >
        <i className="fas fa-comment-dots"></i>
      </button>
    </>
  );
};

// Add this CSS to your stylesheet
const styles = `
.chat-icon-button {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.chat-icon-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #5a7df9, #9266d4);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(110, 142, 251, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0);
  }
}

/* For responsiveness */
@media (max-width: 768px) {
  .chat-icon-button {
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);