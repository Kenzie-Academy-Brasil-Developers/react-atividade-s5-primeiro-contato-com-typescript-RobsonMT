import React, { useState } from "react";
import "./App.scss";
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
    <div id="Home" className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#Home">home</a>
            </li>
            <li>
              <a href="#Users">users</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="Main">
        <fieldset>
          <legend>Register</legend>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(name, hobby, age);
            }}
          >
            <Input
              placeholder="Name"
              value={name ?? ""}
              onChange={(event) => setName(event.target.value)}
              type="text"
              required={true}
            />
            <Input
              placeholder="Hobby"
              value={hobby ?? ""}
              onChange={(event) => setHobby(event.target.value)}
              type="text"
              required={true}
            />
            <Input
              placeholder="Age"
              value={age || ""}
              onChange={(event) => setAge(Number(event.target.value))}
              type="number"
              required={true}
            />
            <button type="submit">Enviar</button>
          </form>
        </fieldset>
      </main>

      <section id="Users">
        {users.length > 0 && (
          <div className="NewUser">
            <h3>New user</h3>

            <Card
              key={newUser.name}
              name={newUser.name}
              hobby={newUser.hobby}
              age={newUser.age}
            />
          </div>
        )}

        <div className="UsersList">
          <h3>Users List:</h3>

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
      </section>
    </div>
  );
}

export default App;
