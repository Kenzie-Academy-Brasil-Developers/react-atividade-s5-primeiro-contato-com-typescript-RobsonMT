import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { useList } from "./contexts/ListProvider";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { createNewPerson, newPerson, list } = useList();

  const handleSubmit = (name: string, email: string) => {
    const person = { name, email };
    createNewPerson(person);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => handleSubmit(name, email)}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
