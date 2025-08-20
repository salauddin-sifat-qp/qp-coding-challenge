import React from "react";

const App = () => {
  const [msg, setMsg] = React.useState<{ message: string }>({ message: "" });

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      setMsg(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>test</h1>
      <h1>{msg.message}</h1>
    </div>
  );
};

export default App;
