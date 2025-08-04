import { useEffect, useState } from "react";
import "./App.css";

const apiUrl = "http://localhost:3300/api";

interface User {
  name: string;
  email: string;
  age: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch(`${apiUrl}/users`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Hello world!</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {users.map((user) => (
          <li
            key={user.name}
            style={{
              marginBottom: 10,
              border: "1px solid #ccc",
              padding: "5px 10px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
