import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useAuthContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
