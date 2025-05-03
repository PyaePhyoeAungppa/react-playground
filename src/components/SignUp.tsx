import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>

      <Link to="/" className="underline text-sm">
        Sign In
      </Link>
    </>
  );
}

export default SignUp;
