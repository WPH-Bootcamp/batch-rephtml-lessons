import { useState } from "react";
import { useAuthStore } from "../store/auth.store";

export default function AuthZustand() {
  const [email, setEmail] = useState("");
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // biar mencegah refresh
    login({
      email,
    });
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Input Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {user ? (
        <div>
          <h3>Profile</h3>
          <p>Email: {user?.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h2>Not Logged In</h2>
      )}
    </>
  );
}
