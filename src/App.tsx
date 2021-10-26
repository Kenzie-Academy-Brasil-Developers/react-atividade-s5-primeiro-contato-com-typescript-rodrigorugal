import React, { useState } from "react";
import CardComponent from "./components/Card";
import Input from "./components/Input";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState(0);

  const handlerPerson = (person: User) => {
    setUsers([...users, person]);
  };

  return (
    <div className="App">
      <div>
        <Input
          label={"Name: "}
          placeholder={"Name"}
          onChange={(ev) => setName(ev.target.value)}
        />
        <Input
          label={"Age: "}
          placeholder={"Age"}
          type="number"
          onChange={(ev) => setAge(Number(ev.target.value))}
        />
        <Input
          label={"Hobby: "}
          placeholder={"Hobby"}
          onChange={(ev) => setHobby(ev.target.value)}
        />
        <button
          onClick={() => handlerPerson({ name: name, age: age, hobby: hobby })}
        >
          enviar
        </button>
      </div>
      <ul>
        {users.map((item) => (
          <CardComponent name={item.name} age={item.age} hobby={item.hobby} />
        ))}
      </ul>
    </div>
  );
}

export default App;
