import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();

    fetch("https://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // User is authenticated, redirect to the chat page
          // window.location.href = "/chat";
        } else {
          // Show an error message
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="rounded-lg border-current text-base border-2 flex flex-col items-center justify-center"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => {
          fetch("https://localhost:3000/api/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          })
            .then(async (response) => {
              if (response.ok) {
                // User is authenticated, redirect to the chat page
                console.log(await response.json());
              } else {
                // Show an error message
                throw new Error("Login failed");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        API
      </button>
    </form>
  );
};

export { Login };
