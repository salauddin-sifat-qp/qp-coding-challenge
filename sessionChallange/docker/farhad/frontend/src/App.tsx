import { useState, useEffect } from "react";

const App = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>Hello from the Frontend!</h1>
      <h2>{backendMessage}</h2>
    </div>
  );
};

export default App;
