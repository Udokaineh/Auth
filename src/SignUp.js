import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const auth = getAuth()
  const handleSignin = async () => {
    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      const user = userDetails.user;
      console.log("User logged in:", user);
      setIsLoggedIn(true);
      setError(null);
    } catch (error) {
      const myError = error.message;
      const slicedError = myError.slice(myError.indexOf(":") + 1);
      setError(slicedError);
    }
  }
  return (
    <div>
      {
        isLoggedIn ? (
          <Navigate to="/homepage" />
        ) : (
          <div className="signIn-container">
            <div className="signin-logo">
              <div className="logo-div">
                <h2 class="logo">L<span>
                  <div className="light-dot">
                    <div className="explosion1"></div>
                    <div className="explosion2"></div>
                    <div className="explosion3"></div></div> i</span>ght</h2>
              </div>
            </div>
            <div className="form">
              <h2>Sign up</h2>
              <p class="sub-title">Stepping into a world of captivating animated lights.</p>
              {error && <p className="error">{error}</p>}
              <div className="inputs-div">
                <p>Email</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email address" />
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignin}>Sign Up</button>
                <p class="question">Already have an account? <Link to="/login"><span>Login</span></Link></p>
              </div>
            </div>
          </div>
        )}
    </div>
  )
};

export default SignUp;
