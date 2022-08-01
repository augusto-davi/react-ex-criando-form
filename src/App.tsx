import { ChangeEvent, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    age: "",
  });

  function rN(e: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, name: e.target.value });
  }

  function rLn(e: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, lastName: e.target.value });
  }

  function rA(e: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, age: e.target.value });
  }

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  function renderName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function renderLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function renderAge(e: ChangeEvent<HTMLInputElement>) {
    const inputAgeToNumber = parseInt(e.target.value);
    setAge(inputAgeToNumber);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={data.name} onChange={rN} />
      </div>
      <div>
        Sobrenome:
        <input type="text" value={data.lastName} onChange={rLn} />
      </div>
      <div>
        Idade:
        <input type="number" value={data.age} onChange={rA} />
      </div>
      <hr />
      Olá {`${data.name} ${data.lastName}`}, tudo bem?
      <br />
      Você tem {data.age} anos.
    </div>
  );
};

export default App;
