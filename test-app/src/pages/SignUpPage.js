function SignUpPage() {
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
          <input type="password" name="psw" placeholder="Password" />
        </label>
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
          <input type="text" name="address" />
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
