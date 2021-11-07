import React, { useState } from "react";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(showPassword ? false : true);
  }

  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text" name="username" placeholder="Email Address" />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            name="psw"
            placeholder="Password"
          />
        </label>
        Show Password
        <input
          onClick={togglePasswordVisibility}
          type="checkbox"
          name="showpsw"
        ></input>
        <br />
        <label>
          First Name:
          <input type="text" name="fristname" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" />
        </label>
        <br />
        Gender: male
        <input type="radio" name="sex" value="male" />
        female
        <input type="radio" name="sex" value="female" />
        <br />
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <br />
        <br />
        <input type="submit" value="Sign Up" />
        <br />
      </form>
    </div>
  );
}

export default SignUpPage;
