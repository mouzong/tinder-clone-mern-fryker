import React, { useState } from "react";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Elon Musk",
      image:
        "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
      message: "what's going on ?",
    },
    {
      name: "Elon Musk",
      image:
        "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
      message: "where have you been this whole time ?",
    },
    {
      message: "Hey am good hope you do too",
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
    </div>
  );
};

export default ChatScreen;
