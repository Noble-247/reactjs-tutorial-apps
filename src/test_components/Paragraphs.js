import React from "react";

function Paragraphs() {
  const styles = {
    width: "300px",
    margin: "auto",
    fontSize: "30px",
  };

  const [messages, setMessages] = React.useState([
    "Hello Dear",
    "Hi, i miss u",
  ]);

  return (
    <div>
      {messages.length > 0 ? (
        <p style={styles}>
          You have {messages.length} unread message
          {messages.length === 1 ? "" : "s"}
        </p>
      ) : (
        <p style={styles}>You're all caught up!!</p>
      )}
    </div>
  );
}

export default Paragraphs;
