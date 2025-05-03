import { useAuth } from "@/context/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <div className="p-6">
      {user ? (
        <div>
          <span>{user?.email ?? "Loading..."}</span>
          <p>You are logged in!</p>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
          <p>Welcome to the home page!</p>
        </div>
      )}
    </div>
  );
}

export default Home;
