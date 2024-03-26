// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { FormEventHandler, useState } from "react";
import styles from "./App.module.scss";

type Message = {
  message: string;
  type: "mine" | "theirs";
};

type User = {
  name: string;
};

function App() {
  const users: User[] = [
    { name: "Gandalf the Grey" },
    { name: "Iron Man" },
    { name: "James Bond" },
    { name: "Pelé" },
    { name: "Sherlock Holmes" },
  ];

  const [contact, setContact] = useState(users[0]);

  const [messages, setMessages] = useState<Message[]>([]);

  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!message) return;
    const mineMessage: Message = { message, type: "mine" };
    const theirsMessage: Message = { message, type: "theirs" };
    setMessages([theirsMessage, mineMessage, ...messages]);
    setMessage("");
  };

  const selectUser = (user: User) => {
    setContact(user);
    setMessages([]);
  };

  return (
    <div className={styles.appRoot}>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <ul>
          {users.map((user) => (
            <li
              className={user.name === contact.name ? styles.selected : ""}
              onClick={() => selectUser(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.chat}>
        <h2>Chat</h2>
        <div className={styles.messageInput}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.messages}>
          {messages.map((message) => (
            <div className={`message ${styles[message.type]}`}>
              <span>{message.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
