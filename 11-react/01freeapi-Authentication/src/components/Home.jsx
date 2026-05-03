import { useAuthContext } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuthContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {user?.data?.user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
