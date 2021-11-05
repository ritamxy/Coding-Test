import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Test Website!</h1>
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/signup">Sign Up Page</Link>
    </div>
  );
}

export default LandingPage;
