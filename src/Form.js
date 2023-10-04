import { useState } from "react";

function Form(props) {
  const { takimUyeleri, settakimUyeleri } = props;
  const [yeniUye, setyeniUye] = useState([{ name: "", email: "", role: "" }]);
  const uyeEkle = () => {
    if (yeniUye.name && yeniUye.email && yeniUye.role) {
      settakimUyeleri([...takimUyeleri, { ...yeniUye }]);
      setyeniUye({ name: "", email: "", role: "" });
    }
  };
  return (
    <div>
      <h2>Yeni Üye Ekle</h2>
      <input
        type="text"
        placeholder="Name"
        value={yeniUye.name}
        onChange={(e) => setyeniUye({ ...yeniUye, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={yeniUye.email}
        onChange={(e) => setyeniUye({ ...yeniUye, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={yeniUye.role}
        onChange={(e) => setyeniUye({ ...yeniUye, role: e.target.value })}
      />
      <button onClick={uyeEkle}>Üye Ekle</button>
    </div>
  );
}
export default Form;
