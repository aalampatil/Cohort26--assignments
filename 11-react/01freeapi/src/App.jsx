import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authStatus } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  if (authStatus) {
    return <Home />;
  }

  return (
    <div>
      <h1>Auth App</h1>

      {isLogin ? <Login /> : <Register />}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </button>
    </div>
  );
}

export default App;
