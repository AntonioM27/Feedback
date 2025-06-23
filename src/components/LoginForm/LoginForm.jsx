import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMasked, setIsMasked] = useState(true);

  const printValues = () => {
    console.log(`Vrijednosti: ${username} ${password}`);
  };

  return (
    <div id="login-form">
      <h2>Login</h2>
      <label htmlFor="username-input">Username: </label>
      <input
        type="text"
        id="username-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password-input">Password:</label>
      <input
        type={isMasked ? "password" : "text"}
        id="password-input"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button
        className="action"
        onClick={() => {
          setIsMasked(!isMasked);
        }}
      >
        {isMasked ? "Show pass" : "Hide pass"}
      </button>
      <button className="action" onClick={printValues}>
        Login
      </button>
    </div>
  );
}

export default LoginForm;
