import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useAuthContext();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="bg-black border-2 border-gray-700 px-4 py-2 text-sm focus:outline-none focus:border-pink-500"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="bg-black border-2 border-gray-700 px-4 py-2 text-sm focus:outline-none focus:border-pink-500"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        type="submit"
        className="mt-2 bg-pink-500 text-black font-semibold py-2 border-2 border-pink-500 hover:bg-black hover:text-pink-500 transition"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
