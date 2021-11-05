import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text" name="name" placeholder="Email Address" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="psw" />
        </label>
        <br />
        <input type="submit" value="Login" />
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <br />
      </form>
    </div>
  );
}

export default LoginPage;
