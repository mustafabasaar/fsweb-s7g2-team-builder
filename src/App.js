import Form from "./Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [takimUyeleri, settakimUyeleri] = useState([
    {
      id: 1,
      name: "Mustafa Başar",
      email: "mustafabasar96@hotmail.com",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      name: "Edin Dzeko",
      email: "golmakinası@gmail.com",
      role: "Forvet",
    },
  ]);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {takimUyeleri.map((uye) => (
          <li key={uye.id}>
            <h3>İsim:{uye.name}</h3>
            <p>E-mail:{uye.email}</p>
            <p>Rol:{uye.role}</p>
          </li>
        ))}
      </ul>
      <Form settakimUyeleri={settakimUyeleri} takimUyeleri={takimUyeleri} />
    </div>
  );
}

export default App;
