import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Andreas MOUZONG"
        message="Hello how are you ?"
        timestamp="30 minutes ago"
        profilePic="https://avatars.githubusercontent.com/u/22823458?v=4"
      />
      <Chat
        name="Andreas MOUZONG"
        message="Hello how are you ?"
        timestamp="30 minutes ago"
        profilePic="https://avatars.githubusercontent.com/u/22823458?v=4"
      />
      <Chat
        name="Andreas MOUZONG"
        message="Hello how are you ?"
        timestamp="30 minutes ago"
        profilePic="https://avatars.githubusercontent.com/u/22823458?v=4"
      />
      <Chat
        name="Andreas MOUZONG"
        message="Hello how are you ?"
        timestamp="30 minutes ago"
        profilePic="https://avatars.githubusercontent.com/u/22823458?v=4"
      />
    </div>
  );
};

export default Chats;
