import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState("");
  let navigate = useNavigate();

  function togglePasswordVisiblity() {
    setShowPassword(showpassword ? false : true);
  }

  function checkInfo() {
    if (username === "rita123" && password === "66666") {
      navigate("/datapage");
    } else {
      alert("oops, username or password is wrong");
    }
  }

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            placeholder="Email Address"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showpassword ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        Show Password
        <input type="checkbox" onClick={togglePasswordVisiblity} />
        <br />
        <button type="submit" onClick={checkInfo}>
          Login
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <br />
      </form>
    </div>
  );
}

export default LoginPage;
