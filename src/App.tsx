import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { useList } from "./contexts/ListProvider";

function App() {
  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const { createNewUser, users, newUser } = useList();

  const handleSubmit = (name: string, hobby: string, age: number) => {
    const user = { name, hobby, age };
    createNewUser(user);
    setName("");
    setHobby("");
    setAge(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="form">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <Input
            placeholder="Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            type="text"
          />
          <Input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            type="number"
          />
          <button onClick={() => handleSubmit(name, hobby, age)}>Enviar</button>
        </div>

        <div>
          <header>
            <h2>New User</h2>
          </header>
          <Card
            key={newUser.name}
            name={newUser.name}
            hobby={newUser.hobby}
            age={newUser.age}
          />
        </div>
      </header>

      <div>
        <h2>Users List:</h2>
        <ul>
          {users.map((user, index) => (
            <Card
              key={index}
              name={user.name}
              hobby={user.hobby}
              age={user.age}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
